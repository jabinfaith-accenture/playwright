const { test, expect } = require('@playwright/test');
const { UiBankPage } = require('../pages/UiBankPage');

test('UiBank login, create account, and logout flow', async ({ page }) => {
  const uiBankPage = new UiBankPage(page);

  await uiBankPage.goto();
  await uiBankPage.login();
  await uiBankPage.acceptPrivacyPolicy();

  await expect(page).toHaveURL(/\/accounts$/);

  await uiBankPage.openApplyForNewAccount();
  await uiBankPage.createCheckingAccount('AutomationTest');

  await expect(page.getByRole('heading', { name: 'Congratulations!' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /You've been approved for a new account!/ })).toBeVisible();

  await uiBankPage.viewAccounts();
  await expect(page).toHaveURL(/\/accounts$/);

  await uiBankPage.logout();

  await expect(page).toHaveURL(/\/welcome$/);
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});
