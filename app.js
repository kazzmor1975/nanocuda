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

    let applications = APP_DATA[currentLang].applications || APP_DATA[currentLang];
    let uiDict = UI_I18N[currentLang];

    let currentApp = null;
    let userPriorities = {}; // { dimensionId: weight (1-5) }
    let rankedMaterials = [];
    let selectedForComparison = [];
    let appMode = 'decide'; // 'explore' or 'decide' or 'learn'
    let startFlow = 'app'; // 'app' or 'mat'

    // Lesson State
    let currentLessonIndex = 0;
    let selectedQuizOption = null;

    // Bookmarks state
    let sessions = [];
    try {
        sessions = JSON.parse(localStorage.getItem('nanoSessions') || '[]');
    } catch (e) {
        sessions = [];
    }

    // DOM Elements - Header Actions
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');

    // DOM Elements - Views
    const viewHome = document.getElementById('view-home');
    const viewPriority = document.getElementById('view-priority');
    const viewSummary = document.getElementById('view-summary');
    const viewResult = document.getElementById('view-result');
    const viewCompare = document.getElementById('view-compare');
    const viewLesson = document.getElementById('view-lesson');
    const viewEncyclopedia = document.getElementById('view-encyclopedia');
    const viewEncyclopediaDetail = document.getElementById('view-encyclopedia-detail');

    // DOM Elements - Inner
    const appGrid = document.getElementById('app-grid');
    const bookmarksSection = document.getElementById('bookmarks-section');
    const bookmarksList = document.getElementById('bookmarks-list');
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

    // Project Sheet
    const btnGenerateSheet = document.getElementById('btn-generate-sheet');
    if (btnGenerateSheet) btnGenerateSheet.addEventListener('click', () => window.print());
    btnCompareMode.addEventListener('click', showCompareView);

    // Global Navigation
    const navDecide = document.getElementById('nav-decide');
    const navEncyclopedia = document.getElementById('nav-encyclopedia');
    const btnNavQuiz = document.getElementById('nav-quiz');
    if (navDecide) navDecide.addEventListener('click', () => setGlobalMode('decide'));
    if (navEncyclopedia) navEncyclopedia.addEventListener('click', () => setGlobalMode('encyclopedia'));

    function setGlobalMode(mode) {
        if (navDecide) navDecide.classList.remove('active');
        if (navEncyclopedia) navEncyclopedia.classList.remove('active');
        if (btnNavQuiz) btnNavQuiz.classList.remove('active');

        if (mode === 'decide') {
            if (navDecide) navDecide.classList.add('active');
            renderGrid();
            renderBookmarks();
            switchView(viewHome);
        } else if (mode === 'encyclopedia') {
            if (navEncyclopedia) navEncyclopedia.classList.add('active');
            renderEncyclopediaHome();
            switchView(viewEncyclopedia);
        } else if (mode === 'quiz') {
            if (btnNavQuiz) btnNavQuiz.classList.add('active');
            renderQuizCategories();
            switchView(viewQuizHome);
        }
    }

    if (btnNavQuiz) {
        btnNavQuiz.addEventListener('click', () => setGlobalMode('quiz'));
    }

    const btnQuizBack = document.getElementById('btn-quiz-back');
    if (btnQuizBack) {
        btnQuizBack.addEventListener('click', () => {
            switchView(viewQuizHome);
            renderQuizCategories();
        });
    }

    // Encyclopedia State
    let encMaterials = [];
    let currentlyViewedMaterial = null;
    let externalDataLoaded = false;
    const encSearch = document.getElementById('enc-search');
    const encMorph = document.getElementById('enc-filter-morph');
    const encComp = document.getElementById('enc-filter-comp');
    const encApp = document.getElementById('enc-filter-app');

    if (encSearch) encSearch.addEventListener('input', renderEncyclopediaHome);
    if (encMorph) encMorph.addEventListener('change', renderEncyclopediaHome);
    if (encComp) encComp.addEventListener('change', renderEncyclopediaHome);
    if (encApp) encApp.addEventListener('change', renderEncyclopediaHome);

    function initEncyclopediaFilters() {
        if (!encMorph) return;

        encMaterials = APP_DATA[currentLang].materials;

        // Populate options based on current lang
        const extractUnique = (arr, key) => [...new Set(arr.flatMap(item => item[key]))];

        const morphs = extractUnique(encMaterials, 'morphology');
        const comps = extractUnique(encMaterials, 'composition');

        encMorph.innerHTML = `<option value="all">${uiDict['filterMorphology'] || "Filter by Morphology"}</option>`;
        morphs.forEach(m => encMorph.innerHTML += `<option value="${m}">${m}</option>`);

        encComp.innerHTML = `<option value="all">${uiDict['filterComposition'] || "Filter by Composition"}</option>`;
        comps.forEach(c => encComp.innerHTML += `<option value="${c}">${c}</option>`);

        encApp.innerHTML = `<option value="all">${uiDict['filterApp'] || "Filter by Application"}</option>`;
        applications.forEach(app => encApp.innerHTML += `<option value="${app.id}">${app.title}</option>`);
    }

    function renderEncyclopediaHome() {
        const grid = document.getElementById('enc-grid');
        if (!grid) return;

        grid.innerHTML = '';
        const search = encSearch.value.toLowerCase();
        const morph = encMorph.value;
        const comp = encComp.value;
        const app = encApp.value;

        encMaterials.forEach(mat => {
            // Apply filters
            if (morph !== 'all' && !mat.morphology.includes(morph)) return;
            if (comp !== 'all' && !mat.composition.includes(comp)) return;
            if (app !== 'all' && !mat.applications.includes(app)) return;
            if (search) {
                const text = `${mat.name} ${mat.shortDescription} ${mat.morphology.join(' ')} ${mat.composition.join(' ')}`.toLowerCase();
                if (!text.includes(search)) return;
            }

            const card = document.createElement('button');
            card.className = 'app-card';
            card.innerHTML = `
                <h3>${mat.name}</h3>
                <p style="margin-bottom: 0.5rem;" class="helper-text">${mat.shortDescription}</p>
                <div class="tags-container" style="margin-top: 0.5rem;">
                    ${mat.morphology.map(m => `<span class="tag" style="background:var(--surface-light)">${m}</span>`).join('')}
                    ${mat.composition.map(c => `<span class="tag" style="background:var(--surface-light)">${c}</span>`).join('')}
                </div>
            `;
            card.addEventListener('click', () => showEncyclopediaDetail(mat));
            grid.appendChild(card);
        });
    }

    function showEncyclopediaDetail(mat) {
        currentlyViewedMaterial = mat;
        externalDataLoaded = false;

        document.getElementById('enc-mat-title').textContent = mat.name;
        document.getElementById('enc-mat-desc').textContent = mat.shortDescription;

        // Map app IDs to titles
        const appTitles = mat.applications.map(appId => {
            const found = applications.find(a => a.id === appId);
            return found ? found.title : appId;
        });

        document.getElementById('enc-mat-apps').innerHTML = appTitles.map(a => `<span class="tag">${a}</span>`).join('');
        document.getElementById('enc-mat-props').innerHTML = mat.properties.map(p => `<li>${p}</li>`).join('');
        document.getElementById('enc-mat-methods').innerHTML = mat.methods.map(m => `<li><strong>${m.name}:</strong> ${m.why}</li>`).join('');
        document.getElementById('enc-mat-strengths').innerHTML = mat.strengths.map(s => `<li>${s}</li>`).join('');
        document.getElementById('enc-mat-limitations').innerHTML = mat.limitations.map(l => `<li>${l}</li>`).join('');
        document.getElementById('enc-mat-safety').textContent = mat.nanosafety;

        // Reset External Data Panel
        const externalContainer = document.getElementById('external-data-container');
        if (externalContainer) externalContainer.style.display = 'none';
        const toggleIcon = document.getElementById('external-toggle-icon');
        if (toggleIcon) toggleIcon.textContent = '▼';

        // "See where this fits" Action
        const btnSeeFits = document.getElementById('btn-see-fits');
        btnSeeFits.onclick = () => {
            // Pick first applicable application to jump into
            if (mat.applications.length > 0) {
                setGlobalMode('decide');
                showPriorityView(mat.applications[0]);
            }
        };

        switchView(viewEncyclopediaDetail);
    }

    // Toggle External Data Panel
    const btnToggleExternal = document.getElementById('btn-toggle-external');
    if (btnToggleExternal) {
        btnToggleExternal.addEventListener('click', () => {
            const container = document.getElementById('external-data-container');
            const icon = document.getElementById('external-toggle-icon');
            if (container.style.display === 'none') {
                container.style.display = 'block';
                icon.textContent = '▲';
                if (!externalDataLoaded && currentlyViewedMaterial) {
                    loadExternalData(currentlyViewedMaterial);
                }
            } else {
                container.style.display = 'none';
                icon.textContent = '▼';
            }
        });
    }

    // --- External API Fetching ---
    async function loadExternalData(mat) {
        externalDataLoaded = true;
        const mpContent = document.getElementById('ext-mp-content');
        const pubchemContent = document.getElementById('ext-pubchem-content');
        const nanoLinks = document.getElementById('ext-nano-links');

        // Loading states
        const loadingStr = uiDict['loadingExternal'] || "Fetching data...";
        mpContent.innerHTML = `<p class="helper-text"><em>${loadingStr}</em></p>`;
        pubchemContent.innerHTML = `<p class="helper-text"><em>${loadingStr}</em></p>`;
        nanoLinks.innerHTML = '';

        // 1. PubChem API
        if (mat.pubchemCids && mat.pubchemCids.length > 0) {
            let pubchemHtml = '';
            for (const cid of mat.pubchemCids) {
                try {
                    // PUG-REST simple properties fetch
                    const res = await fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/property/MolecularFormula,MolecularWeight,IUPACName/JSON`);
                    if (res.ok) {
                        const data = await res.json();
                        const props = data.PropertyTable.Properties[0];
                        pubchemHtml += `
                            <div style="background:var(--card-bg); padding:0.75rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:0.5rem;">
                                <strong>IUPAC:</strong> ${props.IUPACName || 'N/A'}<br>
                                <strong>Formula:</strong> ${props.MolecularFormula || 'N/A'}<br>
                                <strong>Weight:</strong> ${props.MolecularWeight ? props.MolecularWeight + ' g/mol' : 'N/A'}<br>
                                <a href="https://pubchem.ncbi.nlm.nih.gov/compound/${cid}" target="_blank" rel="noopener noreferrer">View on PubChem ↗</a>
                            </div>
                        `;
                    } else {
                        pubchemHtml += `<p class="helper-text">Could not load CID ${cid}</p>`;
                    }
                } catch (e) {
                    console.error("PubChem Fetch Error:", e);
                    pubchemHtml = `<p class="helper-text error-text">${uiDict['errorExternal'] || "Data could not be loaded."}</p>`;
                }
            }
            pubchemContent.innerHTML = pubchemHtml;
        } else {
            pubchemContent.innerHTML = `<p class="helper-text">${uiDict['noExternalIds'] || "No external identifiers."}</p>`;
        }

        // 2. Materials Project API
        // For security and simplicity in this vanilla client, we mock the API key requirement check
        // Real implementation would require a backend proxy or an env variable injected into the client
        const MP_API_KEY = window.MP_API_KEY || null; // e.g. set via config

        if (mat.materialsProjectIds && mat.materialsProjectIds.length > 0) {
            let mpHtml = '';

            if (!MP_API_KEY) {
                mpHtml = `<p class="helper-text"><em>API Key required for Materials Project data. Please configure window.MP_API_KEY.</em></p>`;
                // Fallback to just providing a link
                mat.materialsProjectIds.forEach(mpId => {
                    mpHtml += `<p><a href="https://next-gen.materialsproject.org/materials/${mpId}" target="_blank" rel="noopener noreferrer">View ${mpId} on Materials Project ↗</a></p>`;
                });
            } else {
                for (const mpId of mat.materialsProjectIds) {
                    try {
                        const res = await fetch(`https://api.materialsproject.org/materials/summary/?material_ids=${mpId}&_fields=formula_pretty,spacegroup,band_gap,energy_above_hull`, {
                            headers: {
                                'X-API-KEY': MP_API_KEY,
                                'Accept': 'application/json'
                            }
                        });

                        if (res.ok) {
                            const data = await res.json();
                            if (data.data && data.data.length > 0) {
                                const doc = data.data[0];
                                mpHtml += `
                                    <div style="background:var(--card-bg); padding:0.75rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:0.5rem;">
                                        <strong>Formula:</strong> ${doc.formula_pretty || 'N/A'}<br>
                                        <strong>Space Group:</strong> ${doc.spacegroup ? doc.spacegroup.symbol : 'N/A'}<br>
                                        <strong>Band Gap:</strong> ${doc.band_gap !== null ? doc.band_gap.toFixed(3) + ' eV' : 'N/A'}<br>
                                        <strong>Energy Above Hull:</strong> ${doc.energy_above_hull !== null ? doc.energy_above_hull.toFixed(3) + ' eV/atom' : 'N/A'}<br>
                                        <a href="https://next-gen.materialsproject.org/materials/${mpId}" target="_blank" rel="noopener noreferrer">View on Materials Project ↗</a>
                                    </div>
                                `;
                            }
                        } else {
                            mpHtml += `<p class="helper-text">Could not load MP ID ${mpId}</p>`;
                        }
                    } catch (e) {
                        console.error("Materials Project Fetch Error:", e);
                        mpHtml = `<p class="helper-text error-text">${uiDict['errorExternal'] || "Data could not be loaded."}</p>`;
                    }
                }
            }
            mpContent.innerHTML = mpHtml;
        } else {
            mpContent.innerHTML = `<p class="helper-text">${uiDict['noExternalIds'] || "No external identifiers."}</p>`;
        }

        // 3. Curated Nano Databases (StatNano, NanoDatabank, etc)
        let nanoHtml = '';
        if (mat.nanoExampleLinks && mat.nanoExampleLinks.length > 0) {
            nanoHtml += mat.nanoExampleLinks.map(link => `
                <li style="margin-bottom: 0.25rem;">
                    <strong>[${link.source}]</strong> <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>
                </li>
            `).join('');
        }

        if (mat.safetySources && mat.safetySources.length > 0) {
            nanoHtml += mat.safetySources.map(link => `
                <li style="margin-bottom: 0.25rem;">
                    <strong>[${link.source}]</strong> <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>
                </li>
            `).join('');
        }

        if (nanoHtml) {
            nanoLinks.innerHTML = nanoHtml;
        } else {
            nanoLinks.innerHTML = `<li><span class="helper-text">${uiDict['noExternalIds'] || "No external links provided."}</span></li>`;
        }
    }

    const btnEncBack = document.getElementById('btn-enc-back');
    if (btnEncBack) btnEncBack.addEventListener('click', () => {
        switchView(viewEncyclopedia);
    });

    if (btnModeExplore) btnModeExplore.addEventListener('click', () => setAppMode('explore'));
    if (btnModeDecide) btnModeDecide.addEventListener('click', () => setAppMode('decide'));

    function setAppMode(mode) {
        appMode = mode;

        [btnModeExplore, btnModeDecide].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });

        if (mode === 'explore') {
            if (btnModeExplore) btnModeExplore.classList.add('active');
            prioritySlidersContainer.style.display = 'none';
            btnGetRecommendations.textContent = currentLang === 'pl' ? 'Przeglądaj materiały' : 'Explore Materials';
            const priDesc = document.querySelector('#view-priority .view-header p');
            if(priDesc) priDesc.style.display = 'none';
            if (viewPriority.style.display !== 'block') switchView(viewPriority);
        } else if (mode === 'decide') {
            if (btnModeDecide) btnModeDecide.classList.add('active');
            prioritySlidersContainer.style.display = 'grid';
            btnGetRecommendations.textContent = uiDict.btnGetRecs;
            const priDesc = document.querySelector('#view-priority .view-header p');
            if(priDesc) priDesc.style.display = 'block';
            if (viewPriority.style.display !== 'block') switchView(viewPriority);
        }
    }

    /* =================== QUIZ LOGIC =================== */
    const viewQuizHome = document.getElementById('view-quiz-home');
    const viewQuizActive = document.getElementById('view-quiz-active');
    const quizCategoriesContainer = document.getElementById('quiz-categories');
    const btnQuizCheck = document.getElementById('btn-quiz-check');
    const btnQuizNext = document.getElementById('btn-quiz-next');
    const btnQuizRestart = document.getElementById('btn-quiz-restart');

    let currentQuizCategory = null;
    let currentQuizQuestions = [];
    let currentQuizIndex = 0;
    let currentQuizScore = 0;
    let currentQuizSelectedOption = null;

    function renderQuizCategories() {
        if (!quizCategoriesContainer) return;
        quizCategoriesContainer.innerHTML = '';
        if (typeof QUIZ_DATA === 'undefined') return;

        Object.keys(QUIZ_DATA).forEach(categoryKey => {
            const card = document.createElement('div');
            card.className = 'app-card';

            const titleStr = uiDict.quizCategoryTitles && uiDict.quizCategoryTitles[categoryKey] ?
                             uiDict.quizCategoryTitles[categoryKey] : categoryKey;

            card.innerHTML = `<h3>${titleStr}</h3>`;
            card.addEventListener('click', () => startQuiz(categoryKey));
            quizCategoriesContainer.appendChild(card);
        });
    }

    function startQuiz(categoryKey) {
        currentQuizCategory = categoryKey;
        // Deep copy questions and shuffle options
        currentQuizQuestions = QUIZ_DATA[categoryKey].map(q => {
            // Options are strings, first is correct (index 0) originally
            const options = [...q.options];
            const originalCorrect = options[q.correctIndex];

            // Shuffle
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [options[i], options[j]] = [options[j], options[i]];
            }

            return {
                ...q,
                options,
                newCorrectIndex: options.indexOf(originalCorrect)
            };
        });

        currentQuizIndex = 0;
        currentQuizScore = 0;

        const titleStr = uiDict.quizCategoryTitles && uiDict.quizCategoryTitles[currentQuizCategory] ?
                         uiDict.quizCategoryTitles[currentQuizCategory] : currentQuizCategory;

        document.getElementById('quiz-active-title').textContent = titleStr;
        switchView(viewQuizActive);
        renderActiveQuiz();
    }

    function renderActiveQuiz(onlyUpdateLanguage = false) {
        if (!onlyUpdateLanguage) {
            document.getElementById('quiz-active-container').style.display = 'block';
            document.getElementById('quiz-results-container').style.display = 'none';
        }

        const total = currentQuizQuestions.length;
        if (currentQuizIndex >= total) {
            showQuizResults();
            return;
        }

        const q = currentQuizQuestions[currentQuizIndex];

        let progText = uiDict.quizProgress || "Question {current} of {total}";
        document.getElementById('quiz-progress-text').textContent = progText.replace('{current}', currentQuizIndex + 1).replace('{total}', total);

        let scoreText = uiDict.quizScore || "Score: {score} / {total}";
        document.getElementById('quiz-score-text').textContent = scoreText.replace('{score}', currentQuizScore).replace('{total}', total);

        document.getElementById('quiz-active-question').textContent = q.question;

        if (!onlyUpdateLanguage) {
            const optsContainer = document.getElementById('quiz-active-options');
            optsContainer.innerHTML = '';
            currentQuizSelectedOption = null;
            btnQuizCheck.disabled = true;
            btnQuizCheck.style.display = 'block';
            btnQuizNext.style.display = 'none';

            const feedback = document.getElementById('quiz-active-feedback');
            feedback.style.display = 'none';

            q.options.forEach((optText, index) => {
                const optEl = document.createElement('div');
                optEl.className = 'quiz-option';
                optEl.innerHTML = `<input type="radio" name="active-quiz-opt" value="${index}"> <label>${optText}</label>`;
                optEl.addEventListener('click', () => {
                    if (btnQuizCheck.style.display === 'none') return; // already answered
                    optsContainer.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
                    optEl.classList.add('selected');
                    optEl.querySelector('input').checked = true;
                    currentQuizSelectedOption = index;
                    btnQuizCheck.disabled = false;
                });
                optsContainer.appendChild(optEl);
            });
        }
    }

    if (btnQuizCheck) {
        btnQuizCheck.addEventListener('click', () => {
            if (currentQuizSelectedOption === null) return;
            const q = currentQuizQuestions[currentQuizIndex];
            const isCorrect = currentQuizSelectedOption === q.newCorrectIndex;
            const feedback = document.getElementById('quiz-active-feedback');

            if (isCorrect) {
                currentQuizScore++;
                feedback.textContent = `✅ ${uiDict.quizCorrect || 'Correct!'}`;
                feedback.className = 'quiz-feedback margin-top-sm success';
            } else {
                feedback.textContent = `❌ ${uiDict.quizIncorrect || 'Not quite.'}`;
                feedback.className = 'quiz-feedback margin-top-sm error';
            }

            // Mark correct answer
            const options = document.getElementById('quiz-active-options').children;
            options[q.newCorrectIndex].style.borderLeft = '4px solid var(--success-color)';
            if (!isCorrect) {
                options[currentQuizSelectedOption].style.borderLeft = '4px solid var(--error-color)';
            }

            // Update score display immediately
            let scoreText = uiDict.quizScore || "Score: {score} / {total}";
            document.getElementById('quiz-score-text').textContent = scoreText.replace('{score}', currentQuizScore).replace('{total}', currentQuizQuestions.length);

            feedback.style.display = 'block';
            btnQuizCheck.style.display = 'none';
            btnQuizNext.style.display = 'block';
        });
    }

    if (btnQuizNext) {
        btnQuizNext.addEventListener('click', () => {
            currentQuizIndex++;
            renderActiveQuiz();
        });
    }

    if (btnQuizRestart) {
        btnQuizRestart.addEventListener('click', () => {
            startQuiz(currentQuizCategory);
        });
    }

    function showQuizResults() {
        document.getElementById('quiz-active-container').style.display = 'none';
        document.getElementById('quiz-results-container').style.display = 'block';
        if (btnQuizNext) btnQuizNext.style.display = 'none';

        let scoreText = uiDict.quizScore || "Score: {score} / {total}";
        document.getElementById('quiz-final-score').textContent = scoreText.replace('{score}', currentQuizScore).replace('{total}', currentQuizQuestions.length);
    }


    // Initial Render
    initEncyclopediaFilters();
    renderGrid();

    /* =================== I18N MANAGEMENT =================== */

    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'pl' : 'en';
        localStorage.setItem('lang', currentLang);
        applications = APP_DATA[currentLang].applications || APP_DATA[currentLang];
        uiDict = UI_I18N[currentLang];

        updateUIForLanguage();
        initEncyclopediaFilters();

        // Re-render current view with new data
        if (viewHome.style.display !== 'none') {
            renderGrid();
        } else if (document.getElementById('view-encyclopedia').style.display !== 'none') {
            renderEncyclopediaHome();
        } else if (document.getElementById('view-encyclopedia-detail').style.display !== 'none' && currentlyViewedMaterial) {
            showEncyclopediaDetail(currentlyViewedMaterial);
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
        [viewHome, viewPriority, viewSummary, viewResult, viewCompare, viewLesson, viewEncyclopedia, viewEncyclopediaDetail, viewQuizHome, viewQuizActive].forEach(v => {
            if (v) v.style.display = 'none';
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

    function saveSession(appId, appTitle) {
        // Remove existing if same app
        sessions = sessions.filter(s => s.appId !== appId);
        sessions.unshift({
            id: Date.now(),
            appId: appId,
            title: appTitle,
            date: new Date().toLocaleDateString()
        });
        if (sessions.length > 5) sessions.pop();
        localStorage.setItem('nanoSessions', JSON.stringify(sessions));
        renderBookmarks();
    }

    function renderBookmarks() {
        if (sessions.length === 0) {
            if (bookmarksSection) bookmarksSection.style.display = 'none';
            return;
        }
        if (bookmarksSection) bookmarksSection.style.display = 'block';
        if (bookmarksList) {
            bookmarksList.innerHTML = '';
            sessions.forEach(session => {
                const btn = document.createElement('button');
                btn.className = 'tag';
                btn.style.cursor = 'pointer';
                btn.style.padding = '0.5rem 1rem';
                btn.innerHTML = `🕒 ${session.title} <span style="font-size: 0.8em; opacity: 0.7;">(${session.date})</span>`;
                btn.addEventListener('click', () => {
                    showPriorityView(session.appId);
                });
                bookmarksList.appendChild(btn);
            });
        }
    }

    /* STEP 1: HOME GRID */
    function renderGrid() {
        renderBookmarks();

        // App Grid
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

        saveSession(currentApp.id, currentApp.title);

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

        // Populate Print View
        populatePrintView(mat);

        const btnOpenEnc = document.getElementById('btn-open-enc');
        if (btnOpenEnc) {
            btnOpenEnc.onclick = () => {
                const encMat = APP_DATA[currentLang].materials.find(m => m.id === mat.id);
                if (encMat) {
                    setGlobalMode('encyclopedia');
                    showEncyclopediaDetail(encMat);
                }
            };
        }

        switchView(viewResult);
    }

    function populatePrintView(mat) {
        document.getElementById('print-app-name').textContent = currentApp.title;
        document.getElementById('print-mat-name').textContent = mat.name;
        document.getElementById('print-why').textContent = mat.why;

        document.getElementById('print-properties').innerHTML = currentApp.targetProperties.map(p => `<li>${p}</li>`).join('');
        document.getElementById('print-methods').innerHTML = currentApp.methods.map(m => `<li><strong>${m.name}:</strong> ${m.why}</li>`).join('');
        document.getElementById('print-path').innerHTML = mat.experimentalPath.map(step => `<li>${step}</li>`).join('');
        document.getElementById('print-limitations').innerHTML = mat.limitations.map(l => `<li>${l}</li>`).join('');
        document.getElementById('print-tradeoffs').textContent = currentApp.tradeOffs;
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
