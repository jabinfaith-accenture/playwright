// playwright.config.js
module.exports = {
  testDir: './tests/e2e',
  fullyParallel: true,

  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright']
  ]
};