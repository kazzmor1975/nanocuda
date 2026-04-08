document.addEventListener('DOMContentLoaded', () => {
    // Check if APP_DATA is loaded
    if (typeof APP_DATA === 'undefined') {
        console.error("APP_DATA is not defined. Ensure data.js is loaded before app.js.");
        return;
    }

    const { applications } = APP_DATA;

    // DOM Elements
    const themeToggleBtn = document.getElementById('theme-toggle');
    const introSection = document.getElementById('intro-section');
    const appGrid = document.getElementById('app-grid');
    const resultSection = document.getElementById('result-section');
    const backBtn = document.getElementById('back-btn');

    // Result DOM Elements
    const resTitle = document.getElementById('res-title');
    const resDesc = document.getElementById('res-desc');
    const resMaterials = document.getElementById('res-materials');
    const resProperties = document.getElementById('res-properties');
    const resMethods = document.getElementById('res-methods');
    const resTradeoffs = document.getElementById('res-tradeoffs');
    const resQuestion = document.getElementById('res-question');
    const resNextStep = document.getElementById('res-nextstep');

    // Initialize Theme
    initTheme();

    // Event Listeners
    themeToggleBtn.addEventListener('click', toggleTheme);
    backBtn.addEventListener('click', showHome);

    // Render Home Grid
    renderGrid();

    /**
     * Theme Management
     */
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙 Dark Mode';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️ Light Mode';
        }
    }

    /**
     * View Management
     */
    function renderGrid() {
        appGrid.innerHTML = ''; // Clear existing

        applications.forEach(app => {
            const card = document.createElement('button');
            card.className = 'app-card';
            card.setAttribute('aria-label', `Select ${app.title}`);
            card.innerHTML = `
                <h3>${app.title}</h3>
                <p>${app.description}</p>
            `;
            card.addEventListener('click', () => showResult(app));
            appGrid.appendChild(card);
        });
    }

    function showHome() {
        resultSection.style.display = 'none';
        introSection.style.display = 'block';
        appGrid.style.display = 'grid'; // ensure it uses grid layout
        window.scrollTo(0, 0);
    }

    function showResult(app) {
        // Hide Home
        introSection.style.display = 'none';
        appGrid.style.display = 'none';

        // Populate Result
        resTitle.textContent = app.title;
        resDesc.textContent = app.description;

        // Populate Materials
        resMaterials.innerHTML = app.materials.map(mat => `
            <div class="material-item">
                <h4>${mat.name}</h4>
                <p>${mat.why}</p>
            </div>
        `).join('');

        // Populate Properties (Tags)
        resProperties.innerHTML = app.targetProperties.map(prop => `
            <span class="tag">${prop}</span>
        `).join('');

        // Populate Methods
        resMethods.innerHTML = app.methods.map(method => `
            <div class="method-item">
                <strong>${method.name}</strong>
                <p>${method.why}</p>
            </div>
        `).join('');

        // Populate Sidebar
        resTradeoffs.textContent = app.tradeOffs;
        resQuestion.innerHTML = `<blockquote>"${app.studentQuestions}"</blockquote>`;
        resNextStep.textContent = app.nextLabStep;

        // Show Result
        resultSection.style.display = 'block';
        window.scrollTo(0, 0);
    }
});
