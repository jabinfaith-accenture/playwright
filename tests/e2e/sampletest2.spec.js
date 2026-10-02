import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test('Basic Testing', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://uibank.uipath.com/welcome');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('FebApiuser');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Eagle@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'I agree to the Privacy Policy' }).click();

  await expect.soft(page.locator('//div[text()="Apply For New Account "]')).toBeEnabled();

  expect('Apply For New Account ').toEqual(await page.locator('//div[text()="Apply For New Account "]').textContent());

  await page.getByText('Apply For New Account').click();

  console.log('Test completed successfully');
  await page.getByRole('link', { name: 'Logout' }).click();
  
})