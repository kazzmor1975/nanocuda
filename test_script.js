const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Load local file
    await page.goto(`file://${process.cwd()}/index.html`);

    // Wait for the app to load
    await page.waitForSelector('#app-grid .app-card:first-child', { state: 'visible', timeout: 30000 });

    // Test: Bookmarks display and click
    await page.click('#app-grid .app-card:first-child');
    await page.waitForSelector('#view-priority:visible');
    // Because there are two .btn-home, use the one inside view-priority
    await page.click('#view-priority .btn-home');
    await page.waitForSelector('#view-home:visible');
    await page.screenshot({ path: 'bookmarks_view.png' });

    // Test: Encyclopedia Mode (Material Data Browser)
    await page.click('#nav-encyclopedia');
    await page.waitForSelector('#view-encyclopedia:visible');
    await page.screenshot({ path: 'encyclopedia_flow.png' });

    // Test: Quiz Mode
    await page.click('#nav-quiz');
    await page.waitForSelector('#view-quiz-home:visible');

    // Test: Active Quiz View
    await page.click('#quiz-categories .app-card:first-child');
    await page.waitForSelector('#view-quiz-active:visible');
    await page.screenshot({ path: 'quiz_flow.png' });

    await browser.close();
})();
