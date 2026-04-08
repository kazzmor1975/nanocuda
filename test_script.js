const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Load local file
    await page.goto(`file://${process.cwd()}/index.html`);

    // Test: Bookmarks display and click
    await page.click('.app-card:first-child');
    await page.click('.btn-home');
    await page.screenshot({ path: 'bookmarks_view.png' });

    // Test: Nano-lesson mode
    await page.click('.app-card:first-child');
    await page.click('#btn-mode-learn');
    await page.screenshot({ path: 'lesson_view.png' });

    // Test: Reverse Flow (Material -> App)
    await page.click('.btn-home');
    await page.click('#btn-flow-mat');
    await page.screenshot({ path: 'reverse_flow.png' });

    await browser.close();
})();
