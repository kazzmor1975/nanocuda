document.addEventListener('DOMContentLoaded', () => {
    if (typeof APP_DATA === 'undefined' || typeof UI_I18N === 'undefined') {
        console.error("Data modules are not defined. Ensure data.js is loaded before app.js.");
        return;
    }

    // State Management
    let currentLang = localStorage.getItem('lang') || 'en';
    if (currentLang !== 'en' && currentLang !== 'pl') {
        currentLang = 'en';
    }

    let applications = APP_DATA[currentLang];
    let uiDict = UI_I18N[currentLang];

    let currentApp = null;
    let userPriorities = {}; // { dimensionId: weight (1-5) }
    let rankedMaterials = [];
    let selectedForComparison = [];
    let appMode = 'decide'; // 'explore' or 'decide'

    // DOM Elements - Header Actions
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');

    // DOM Elements - Views
    const viewHome = document.getElementById('view-home');
    const viewPriority = document.getElementById('view-priority');
    const viewSummary = document.getElementById('view-summary');
    const viewResult = document.getElementById('view-result');
    const viewCompare = document.getElementById('view-compare');

    // DOM Elements - Inner
    const appGrid = document.getElementById('app-grid');
    const prioritySlidersContainer = document.getElementById('priority-sliders');
    const btnGetRecommendations = document.getElementById('btn-get-recommendations');
    const rankingListContainer = document.getElementById('ranking-list');
    const btnCompareMode = document.getElementById('btn-compare-mode');

    // Mode toggles
    const btnModeExplore = document.getElementById('btn-mode-explore');
    const btnModeDecide = document.getElementById('btn-mode-decide');

    // Initialize
    initTheme();
    updateUIForLanguage();

    // Event Listeners - Header
    themeToggleBtn.addEventListener('click', toggleTheme);
    langToggleBtn.addEventListener('click', toggleLanguage);

    // Event Listeners - Navigation
    document.querySelectorAll('.btn-home').forEach(btn => btn.addEventListener('click', showHome));
    document.querySelectorAll('.btn-priority').forEach(btn => btn.addEventListener('click', () => {
        if(currentApp) showPriorityView(currentApp.id);
    }));
    document.querySelectorAll('.btn-summary').forEach(btn => btn.addEventListener('click', showSummaryView));

    btnGetRecommendations.addEventListener('click', generateRecommendations);
    btnCompareMode.addEventListener('click', showCompareView);

    if (btnModeExplore) btnModeExplore.addEventListener('click', () => setAppMode('explore'));
    if (btnModeDecide) btnModeDecide.addEventListener('click', () => setAppMode('decide'));

    function setAppMode(mode) {
        appMode = mode;
        if (mode === 'explore') {
            btnModeExplore.classList.add('active');
            btnModeDecide.classList.remove('active');
            prioritySlidersContainer.style.display = 'none';
            btnGetRecommendations.textContent = currentLang === 'pl' ? 'Przeglądaj materiały' : 'Explore Materials';
            const priDesc = document.querySelector('#view-priority .view-header p');
            if(priDesc) priDesc.style.display = 'none';
        } else {
            btnModeDecide.classList.add('active');
            btnModeExplore.classList.remove('active');
            prioritySlidersContainer.style.display = 'grid';
            btnGetRecommendations.textContent = uiDict.btnGetRecs;
            const priDesc = document.querySelector('#view-priority .view-header p');
            if(priDesc) priDesc.style.display = 'block';
        }
    }

    // Initial Render
    renderGrid();

    /* =================== I18N MANAGEMENT =================== */

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'pl' : 'en';
        localStorage.setItem('lang', currentLang);
        applications = APP_DATA[currentLang];
        uiDict = UI_I18N[currentLang];

        updateUIForLanguage();

        // Re-render current view with new data
        if (viewHome.style.display !== 'none') {
            renderGrid();
        } else if (viewPriority.style.display !== 'none' && currentApp) {
            // Re-fetch currentApp reference from new language array
            showPriorityView(currentApp.id, true);
        } else if (viewSummary.style.display !== 'none' && currentApp) {
            currentApp = applications.find(a => a.id === currentApp.id);
            generateRecommendations();
        } else if (viewResult.style.display !== 'none' && currentApp) {
            // Go back to summary if in result to refresh easily
            currentApp = applications.find(a => a.id === currentApp.id);
            generateRecommendations();
        } else if (viewCompare.style.display !== 'none' && currentApp) {
            currentApp = applications.find(a => a.id === currentApp.id);
            generateRecommendations();
        }
    }

    function updateUIForLanguage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (uiDict[key]) {
                el.textContent = uiDict[key];
            }
        });

        // Update dynamic parts manually based on state
        updateCompareButton();

        // Update theme toggle text while preserving icon
        const currentTheme = document.documentElement.getAttribute('data-theme');
        themeToggleBtn.textContent = currentTheme === 'dark' ? uiDict.themeLight : uiDict.themeDark;
    }

    /* =================== VIEW MANAGEMENT =================== */

    function switchView(targetView) {
        [viewHome, viewPriority, viewSummary, viewResult, viewCompare].forEach(v => {
            v.style.display = 'none';
        });
        targetView.style.display = 'block';
        window.scrollTo(0, 0);
    }

    function showHome() {
        currentApp = null;
        userPriorities = {};
        selectedForComparison = [];
        switchView(viewHome);
    }

    /* STEP 1: HOME GRID */
    function renderGrid() {
        appGrid.innerHTML = '';
        applications.forEach(app => {
            const card = document.createElement('button');
            card.className = 'app-card';
            card.setAttribute('aria-label', `Select ${app.title}`);
            card.innerHTML = `
                <div class="app-card-icon">${app.icon}</div>
                <h3>${app.title}</h3>
                <p>${app.description}</p>
            `;
            card.addEventListener('click', () => showPriorityView(app.id));
            appGrid.appendChild(card);
        });
    }

    /* STEP 2: PRIORITY SETTINGS */
    function showPriorityView(appId, keepPriorities = false) {
        currentApp = applications.find(a => a.id === appId);
        if (!keepPriorities) {
            userPriorities = {}; // reset on new entry
        }

        document.getElementById('pri-app-name').textContent = currentApp.title;

        const diagramContainer = document.getElementById('pri-app-diagram');
        if (diagramContainer) {
            diagramContainer.innerHTML = currentApp.diagram || '';
        }

        prioritySlidersContainer.innerHTML = '';

        currentApp.dimensions.forEach(dim => {
            // Keep existing or default middle value (3)
            if (!userPriorities[dim.id]) {
                userPriorities[dim.id] = 3;
            }

            const group = document.createElement('div');
            group.className = 'slider-group';
            group.innerHTML = `
                <div class="slider-labels">
                    <span>${dim.opposite}</span>
                    <span>${dim.label}</span>
                </div>
                <input type="range" class="slider-input" min="1" max="5" value="${userPriorities[dim.id]}" aria-label="Priority for ${dim.label}">
            `;

            const slider = group.querySelector('input');
            slider.addEventListener('input', (e) => {
                userPriorities[dim.id] = parseInt(e.target.value, 10);
            });

            prioritySlidersContainer.appendChild(group);
        });

        switchView(viewPriority);
    }

    /* SCORING LOGIC */
    function calculateScores() {
        const dimensions = currentApp.dimensions;

        const scoredMaterials = currentApp.materials.map(mat => {
            let totalScore = 0;
            let maxPossible = 0;

            dimensions.forEach(dim => {
                let weight = 3;
                if (appMode === 'decide') {
                    const slider = document.getElementById(`slider-${dim.id}`);
                    weight = slider ? parseInt(slider.value, 10) : 3;
                }
                userPriorities[dim.id] = weight;

                const rating = mat.ratings[dim.id] || 3;
                const fit = 5 - Math.abs(rating - weight);

                totalScore += fit * weight;
                maxPossible += 5 * weight;
            });

            const matchPercentage = Math.round((totalScore / maxPossible) * 100);
            return { ...mat, matchScore: matchPercentage };
        });

        // Sort descending
        if (appMode === 'explore') {
             return scoredMaterials.sort((a, b) => {
                 if (a.metrics2D && b.metrics2D) {
                     return b.metrics2D.performance - a.metrics2D.performance;
                 }
                 return 0;
             });
        }
        return scoredMaterials.sort((a, b) => b.matchScore - a.matchScore);
    }

    /* CHART UTILITIES */
    const CHART_COLORS = [
        'rgba(37, 99, 235, 0.8)',   // blue-600
        'rgba(22, 163, 74, 0.8)',   // green-600
        'rgba(220, 38, 38, 0.8)'    // red-600
    ];

    function drawRadarChart(canvasId, legendId, materialsToChart) {
        const canvas = document.getElementById(canvasId);
        const legendContainer = document.getElementById(legendId);
        if (!canvas || !legendContainer) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(centerX, centerY) - 40; // leave room for labels

        ctx.clearRect(0, 0, width, height);
        legendContainer.innerHTML = '';

        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const textColor = isDarkMode ? '#d1d5db' : '#4b5563';

        const dimensions = currentApp.dimensions;
        const numAxes = dimensions.length;
        const angleStep = (Math.PI * 2) / numAxes;

        // Draw Grid
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '12px Inter, sans-serif';

        for (let level = 1; level <= 5; level++) {
            const r = (radius / 5) * level;
            ctx.beginPath();
            for (let i = 0; i < numAxes; i++) {
                const angle = i * angleStep - Math.PI / 2;
                const x = centerX + r * Math.cos(angle);
                const y = centerY + r * Math.sin(angle);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }

        // Draw Axes and Labels
        for (let i = 0; i < numAxes; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();

            // Draw label
            const labelX = centerX + (radius + 20) * Math.cos(angle);
            const labelY = centerY + (radius + 20) * Math.sin(angle);

            // Adjust alignment based on angle to prevent overlap
            if (Math.abs(Math.cos(angle)) < 0.1) {
                ctx.textAlign = 'center';
            } else if (Math.cos(angle) > 0) {
                ctx.textAlign = 'left';
            } else {
                ctx.textAlign = 'right';
            }

            ctx.fillStyle = textColor;
            // truncate label if too long
            let labelText = dimensions[i].label;
            if (labelText.length > 15) labelText = labelText.substring(0, 15) + '...';
            ctx.fillText(labelText, labelX, labelY);
        }

        // Draw Data Polygons
        materialsToChart.forEach((mat, matIdx) => {
            const color = CHART_COLORS[matIdx % CHART_COLORS.length];

            ctx.beginPath();
            for (let i = 0; i < numAxes; i++) {
                const dimId = dimensions[i].id;
                const val = mat.ratings[dimId] || 3;
                const r = (radius / 5) * val;
                const angle = i * angleStep - Math.PI / 2;
                const x = centerX + r * Math.cos(angle);
                const y = centerY + r * Math.sin(angle);

                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();

            ctx.fillStyle = color.replace('0.8', '0.2'); // semi-transparent fill
            ctx.fill();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw Legend
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';
            legendItem.innerHTML = `<span class="legend-color" style="background-color: ${color};"></span> <span>${mat.name}</span>`;
            legendContainer.appendChild(legendItem);
        });
    }

    /* STEP 3: RECOMMENDATION SUMMARY */
    function generateRecommendations() {
        rankedMaterials = calculateScores();
        selectedForComparison = []; // reset
        updateCompareButton();
        renderRankingList();

        // Draw summary charts for top 3
        const top3 = rankedMaterials.slice(0, 3);
        drawRadarChart('summary-radar-chart', 'summary-radar-legend', top3);
        draw2DChart('summary-2d-chart', top3);

        switchView(viewSummary);
    }

    function showSummaryView() {
        switchView(viewSummary);
    }

    function renderRankingList() {
        document.getElementById('sum-app-name').textContent = currentApp.title;
        rankingListContainer.innerHTML = '';

        rankedMaterials.forEach((mat, index) => {
            const item = document.createElement('div');
            item.className = 'ranked-item';

            let scoreHTML = '';
            if (appMode === 'decide') {
                scoreHTML = `
                    <div class="score-bar-bg">
                        <div class="score-bar-fill" style="width: ${mat.matchScore}%"></div>
                    </div>
                    <span class="score-text">${mat.matchScore}% ${uiDict.match}</span>
                `;
            }

            item.innerHTML = `
                <div class="rank-number">${index + 1}</div>
                <div class="rank-details">
                    <h3>${mat.name}</h3>
                    <p>${mat.why}</p>
                    ${scoreHTML}
                </div>
                <div class="rank-actions">
                    <button class="btn-primary btn-view-details" data-id="${mat.id}">${uiDict.btnViewDetails}</button>
                    <button class="btn-select btn-compare-toggle" data-id="${mat.id}">${uiDict.btnCompareToggleAdd}</button>
                </div>
            `;

            // Event Listeners for actions
            item.querySelector('.btn-view-details').addEventListener('click', () => showDetailView(mat));

            const compareBtn = item.querySelector('.btn-compare-toggle');
            compareBtn.addEventListener('click', (e) => toggleComparisonSelection(mat.id, e.target, item));

            rankingListContainer.appendChild(item);
        });
    }

    function toggleComparisonSelection(matId, btnElement, itemElement) {
        const index = selectedForComparison.indexOf(matId);

        if (index > -1) {
            // Remove
            selectedForComparison.splice(index, 1);
            btnElement.classList.remove('active');
            itemElement.classList.remove('selected');
            btnElement.textContent = uiDict.btnCompareToggleAdd;
        } else {
            // Add (limit to 2)
            if (selectedForComparison.length >= 2) {
                alert(uiDict.alertCompareLimit);
                return;
            }
            selectedForComparison.push(matId);
            btnElement.classList.add('active');
            itemElement.classList.add('selected');
            btnElement.textContent = uiDict.btnCompareToggleActive;
        }
        updateCompareButton();
    }

    function updateCompareButton() {
        const spanText = `<span data-i18n="btnCompareSelected">${uiDict.btnCompareSelected}</span>`;
        btnCompareMode.innerHTML = `${spanText} (<span id="compare-count">${selectedForComparison.length}</span>)`;
        btnCompareMode.disabled = selectedForComparison.length !== 2;
    }

    /* STEP 4: DETAIL VIEW */
    function showDetailView(mat) {
        document.getElementById('res-title').textContent = mat.name;
        const scoreBadge = document.querySelector('.score-badge');
        if (appMode === 'decide') {
            scoreBadge.style.display = 'inline-block';
            document.getElementById('res-score').textContent = mat.matchScore;
        } else {
            scoreBadge.style.display = 'none';
        }
        document.getElementById('res-why').textContent = mat.why;

        // Render Lists
        document.getElementById('res-strengths').innerHTML = mat.strengths.map(s => `<li>${s}</li>`).join('');
        document.getElementById('res-limitations').innerHTML = mat.limitations.map(l => `<li>${l}</li>`).join('');

        // Benefit-Risk Indicators
        const brContainer = document.getElementById('res-benefit-risk');
        if (brContainer && mat.metrics2D) {
            const benPct = (mat.metrics2D.benefit / 5) * 100;
            const riskPct = (mat.metrics2D.riskAwareness / 5) * 100;
            brContainer.innerHTML = `
                <div class="br-indicator">
                    <div class="br-label">${uiDict.benefit || "Benefit"}</div>
                    <div class="br-bar-bg"><div class="br-bar-fill ben-fill" style="width: ${benPct}%"></div></div>
                </div>
                <div class="br-indicator">
                    <div class="br-label">${uiDict.risk || "Risk Awareness"}</div>
                    <div class="br-bar-bg"><div class="br-bar-fill risk-fill" style="width: ${riskPct}%"></div></div>
                </div>
            `;
        }

        document.getElementById('res-properties').innerHTML = currentApp.targetProperties.map((prop, idx) => {
            const score = mat.propertyScores[idx] || 3;
            const pct = (score / 5) * 100;
            return `
            <div class="property-tag-container" aria-label="${prop}: ${score} out of 5">
                <div class="property-tag-bar" style="width: ${pct}%"></div>
                <span class="property-tag-text">${prop}</span>
            </div>
            `;
        }).join('');

        document.getElementById('res-methods').innerHTML = currentApp.methods.map(method => `
            <div class="method-item">
                <strong>${method.name}</strong>
                <p>${method.why}</p>
            </div>
        `).join('');

        document.getElementById('res-path').innerHTML = mat.experimentalPath.map(step => `<li>${step}</li>`).join('');

        document.getElementById('res-tradeoffs').textContent = currentApp.tradeOffs;
        document.getElementById('res-question').innerHTML = `<blockquote>"${currentApp.studentQuestions}"</blockquote>`;

        switchView(viewResult);
    }

    /* STEP 5: COMPARE VIEW */
    function showCompareView() {
        if (selectedForComparison.length !== 2) return;

        const mat1 = rankedMaterials.find(m => m.id === selectedForComparison[0]);
        const mat2 = rankedMaterials.find(m => m.id === selectedForComparison[1]);

        const grid = document.getElementById('compare-grid');
        grid.innerHTML = ''; // clear

        // Draw Chart
        drawRadarChart('compare-radar-chart', 'compare-radar-legend', [mat1, mat2]);

        [mat1, mat2].forEach(mat => {
            const col = document.createElement('div');
            col.className = 'compare-col';

            // Generate a simple dimension score representation
            const dimScoresHtml = currentApp.dimensions.map(dim => {
                const matRating = mat.ratings[dim.id] || 3;
                return `
                    <div style="margin-bottom: 0.5rem; display: flex; justify-content: space-between; font-size:0.85rem;">
                        <span>${dim.label}</span>
                        <strong>${matRating}/5</strong>
                    </div>
                `;
            }).join('');

            col.innerHTML = `
                <div class="compare-header">
                    <h3>${mat.name}</h3>
                    <div class="score-badge" style="display:inline-block; margin-top:0.5rem;">${uiDict.match}: ${mat.matchScore}%</div>
                </div>

                <div class="compare-section-block">
                    <h4>${uiDict.compStrengths}</h4>
                    <ul class="bullet-list">${mat.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>

                <div class="compare-section-block">
                    <h4>${uiDict.compLimitations}</h4>
                    <ul class="bullet-list">${mat.limitations.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>

                <div class="compare-section-block">
                    <h4>${uiDict.compRatings}</h4>
                    <div style="margin-top: 1rem;">
                        ${dimScoresHtml}
                    </div>
                </div>
            `;
            grid.appendChild(col);
        });

        switchView(viewCompare);
    }

    /* THEME UTILS */
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            // theme text handled by updateUIForLanguage
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            // theme text handled by updateUIForLanguage
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = uiDict.themeDark;
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = uiDict.themeLight;
        }
    }

    // I18N Helper
    window.getUiDict = function() {
        return uiDict;
    }
});

    /* 2D Property Chart Rendering */
    function draw2DChart(canvasId, materials) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        // Configuration
        const padding = 40;
        const plotWidth = width - padding * 2;
        const plotHeight = height - padding * 2;
        const minVal = 0;
        const maxVal = 6; // To give some space above 5

        // Draw Axes
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--text-secondary').trim();
        ctx.lineWidth = 2;
        ctx.stroke();

        // Axis Labels
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-primary').trim();
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'center';

        // I18N context
        const localUiDict = (typeof window.getUiDict === 'function') ? window.getUiDict() : {};

        // X-axis label
        ctx.fillText(localUiDict.axisSynth || "Synthesis Feasibility →", width / 2, height - padding / 3);

        // Y-axis label
        ctx.save();
        ctx.translate(padding / 3, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(localUiDict.axisPerf || "Performance →", 0, 0);
        ctx.restore();

        // Draw Grid Lines (optional, but good for Ashby charts)
        ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--border-color').trim();
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);

        for (let i = 1; i <= 5; i++) {
            // X grid
            const x = padding + (i / maxVal) * plotWidth;
            ctx.beginPath(); ctx.moveTo(x, padding); ctx.lineTo(x, height - padding); ctx.stroke();

            // Y grid
            const y = height - padding - (i / maxVal) * plotHeight;
            ctx.beginPath(); ctx.moveTo(padding, y); ctx.lineTo(width - padding, y); ctx.stroke();
        }
        ctx.setLineDash([]);

        // Colors corresponding to the radar chart
        const colors = [
            'rgba(59, 130, 246, 0.8)', // blue-500
            'rgba(34, 197, 94, 0.8)',  // green-500
            'rgba(249, 115, 22, 0.8)'  // orange-500
        ];

        // Plot Points
        materials.forEach((mat, idx) => {
            if (!mat.metrics2D) return;

            const xVal = mat.metrics2D.synthesisFeasibility;
            const yVal = mat.metrics2D.performance;
            const bubbleSize = (mat.metrics2D.benefit || 3) * 4; // Using benefit for bubble size

            const x = padding + (xVal / maxVal) * plotWidth;
            const y = height - padding - (yVal / maxVal) * plotHeight;

            ctx.beginPath();
            ctx.arc(x, y, bubbleSize, 0, 2 * Math.PI);
            ctx.fillStyle = colors[idx % colors.length];
            ctx.fill();

            ctx.strokeStyle = 'white';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Label
            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-primary').trim();
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'left';

            // Text background for readability
            const txt = `M${idx + 1}`;
            const txtWidth = ctx.measureText(txt).width;
            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--card-bg').trim();
            ctx.fillRect(x + bubbleSize + 2, y - 5, txtWidth + 4, 10);

            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text-primary').trim();
            ctx.fillText(txt, x + bubbleSize + 4, y + 4);
        });
    }
