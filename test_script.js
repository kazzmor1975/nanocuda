const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Load local file
    await page.goto(`file://${process.cwd()}/index.html`);

    // Wait for the app to load
    await page.waitForSelector('.app-card:first-child');

    // Test: Bookmarks display and click
    await page.click('.app-card:first-child');
    await page.waitForSelector('#view-priority:visible');
    // Because there are two .btn-home, use the one inside view-priority
    await page.click('#view-priority .btn-home');
    await page.waitForSelector('#view-home:visible');
    await page.screenshot({ path: 'bookmarks_view.png' });

    // Test: Nano-lesson mode
    await page.click('.app-card:first-child');
    await page.waitForSelector('#view-priority:visible');
    await page.click('#btn-mode-learn');
    await page.waitForSelector('#view-lesson:visible');
    await page.screenshot({ path: 'lesson_view.png' });

    // Go back home from lesson mode
    await page.click('#view-lesson .btn-home');
    await page.waitForSelector('#view-home:visible');

    // Test: Encyclopedia Mode (Material Data Browser)
    await page.click('#nav-encyclopedia');
    await page.waitForSelector('#view-encyclopedia:visible');
    await page.screenshot({ path: 'encyclopedia_flow.png' });

    await browser.close();
})();
