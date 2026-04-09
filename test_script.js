const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Load local file
    await page.goto(`file://${process.cwd()}/index.html`);

    // Wait for the app to load
    await page.waitForSelector('#app-grid .app-card:first-child', { state: 'visible', timeout: 30000 });

    // Test: Encyclopedia Mode (Material Data Browser)
    await page.click('#nav-encyclopedia', { force: true });
    await page.waitForSelector('#view-encyclopedia:visible', { timeout: 10000 });
    await page.screenshot({ path: 'encyclopedia_flow.png' });

    // Test: Quiz Mode
    await page.click('#nav-quiz', { force: true });
    await page.waitForSelector('#view-quiz-home:visible', { timeout: 10000 });

    // Test: Active Quiz View
    await page.click('#quiz-categories .app-card:first-child', { force: true });
    await page.waitForSelector('#view-quiz-active:visible', { timeout: 10000 });
    await page.screenshot({ path: 'quiz_flow.png' });

    // Test: Assistant Mode
    await page.click('#nav-assistant', { force: true });
    await page.waitForSelector('#view-assistant:visible', { timeout: 10000 });
    await page.screenshot({ path: 'assistant_flow.png' });

    await browser.close();
})();
