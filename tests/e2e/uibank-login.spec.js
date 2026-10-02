const { test, expect } = require('@playwright/test');
const { UiBankPage } = require('../pages/UiBankPage');

test('UiBank login and logout flow', async ({ page }) => {
  const uiBankPage = new UiBankPage(page);

  await uiBankPage.goto();
  await uiBankPage.login();
  await uiBankPage.acceptPrivacyPolicy();

  await expect(page).toHaveURL(/\/accounts$/);
  await expect(page.getByRole('heading', { name: 'Welcome!' })).toBeVisible();

  await uiBankPage.logout();

  await expect(page).toHaveURL(/\/welcome$/);
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});
