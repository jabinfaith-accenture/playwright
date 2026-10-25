const { Given, When, Then } = require('@cucumber/cucumber');
const { LeaftapsPage } = require('../../tests/pages/LeaftapsPage');

Given('I am on the Leaftaps login page', async function () {
  this.leaftapsPage = new LeaftapsPage(this.page);
  await this.leaftapsPage.goto();
});

When('I log in to Leaftaps with username {string} and password {string}', async function (username, password) {
  await this.leaftapsPage.login(username, password);
});

When('I open the CRM and SFA application', async function () {
  await this.leaftapsPage.openCrmSfa();
});

Then('I should be on the Leaftaps CRM home page', async function () {
  await this.leaftapsPage.expectCrmHomePage();
});
