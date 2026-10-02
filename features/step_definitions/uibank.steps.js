const { Before, After, Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { UiBankPage } = require('../../tests/pages/UiBankPage');

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.uiBankPage = new UiBankPage(this.page);
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given('I am on the UiBank welcome page', async function () {
  await this.uiBankPage.goToWelcomePage();
});

When('I sign in with username {string} and password {string}', async function (username, password) {
  await this.uiBankPage.login(username, password);
});

When('I accept the privacy policy', async function () {
  await this.uiBankPage.acceptPrivacyPolicy();
});

When('I open the apply for new account page', async function () {
  await this.uiBankPage.openApplyForNewAccount();
});

When('I create a checking account with nickname {string}', async function (nickname) {
  await this.uiBankPage.createCheckingAccount(nickname);
});

When('I view my accounts', async function () {
  await this.uiBankPage.viewAccounts();
});

When('I log out', async function () {
  await this.uiBankPage.logout();
});

Then('I should be on the accounts page', async function () {
  await this.page.waitForURL(/\/accounts$/);
});

Then('I should see the congratulations message', async function () {
  await this.uiBankPage.checkCongratulations();
});

Then('I should be on the welcome page', async function () {
  await this.page.waitForURL(/\/welcome$/);
});

Then('I should remain on the welcome page', async function () {
  await this.uiBankPage.expectOnWelcomePage();
});
