const { expect } = require('@playwright/test');

class UiBankPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Enter username');
    this.passwordInput = page.getByPlaceholder('Enter password');
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.privacyPolicyButton = page.getByRole('button', { name: 'I agree to the Privacy Policy' });
    this.applyForNewAccountButton = page.getByText('Apply For New Account');
    this.accountNicknameInput = page.getByLabel('Give a Nickname to Your Account');
    this.typeOfAccountSelect = page.locator('#typeOfAccount');
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.viewYourAccountsButton = page.getByText('View Your Accounts');
    this.toggleNavigationButton = page.getByRole('button', { name: 'Toggle navigation' });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
  }

  async goto() {
    await this.page.goto('https://uibank.uipath.com/welcome');
  }

  async goToWelcomePage() {
    await this.goto();
  }

  async login(username = 'FebApiuser', password = 'Eagle@123') {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async acceptPrivacyPolicy() {
    await this.privacyPolicyButton.click();
  }

  async openApplyForNewAccount() {
    await this.applyForNewAccountButton.click();
  }

  async createCheckingAccount(nickname = 'AutomationTest') {
    await this.accountNicknameInput.fill(nickname);
    await this.typeOfAccountSelect.selectOption('checking');
    await this.applyButton.click();
  }

  async viewAccounts() {
    await this.viewYourAccountsButton.click();
  }

  async checkCongratulations() {
    await expect(this.page.getByRole('heading', { name: 'Congratulations!' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: /You've been approved for a new account!/ })).toBeVisible();
  }

  async expectOnWelcomePage() {
    await this.page.waitForURL(/\/welcome$/);
    await expect(this.page).toHaveURL(/\/welcome$/);
  }

  async logout() {
    if (await this.toggleNavigationButton.isVisible().catch(() => false)) {
      await this.toggleNavigationButton.click();
    }

    await expect(this.logoutLink).toBeVisible({ timeout: 15000 });
    await this.logoutLink.click();
  }
}

module.exports = { UiBankPage };
