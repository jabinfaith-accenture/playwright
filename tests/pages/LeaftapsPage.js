const { expect } = require('@playwright/test');

class LeaftapsPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.crmSfaLink = page.getByRole('link', { name: 'CRM/SFA' });
  }

  async goto() {
    await this.page.goto('https://leaftaps.com/opentaps/control/main');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.page.getByRole('heading', { name: 'Welcome Demo Sales Manager' })).toBeVisible();
  }

  async openCrmSfa() {
    await this.crmSfaLink.click();
  }

  async expectCrmHomePage() {
    await expect(this.page).toHaveURL(/\/crmsfa\/control\/main/);
    await expect(this.page).toHaveTitle('My Home | opentaps CRM');
  }
}

module.exports = { LeaftapsPage };
