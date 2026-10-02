// example.spec.js
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main',{waitUntil:'load'});
  
  
//await page.waitForSelector('input[id="proceed-button"]');
//await page.click('input[id="proceed-button"]');

await page.waitForSelector('input[id="username"]');
await page.fill('input[id="username"]', 'Demosalesmanager');

await page.waitForSelector('input[id="password"]');
await page.fill('input[id="password"]','crmsfa');

await page.waitForSelector('input[class="decorativeSubmit"]');
await page.click('input[class="decorativeSubmit"]');

await page.waitForSelector('//a[contains(@href,"externalLoginKey")]');
await page.click('//a[contains(@href,"externalLoginKey")]');

//Create Lead

await page.waitForSelector('//a[contains(@href,"createLeadForm")]');
await page.click('//a[contains(@href,"createLeadForm")]');

await page.waitForSelector('input[id="createLeadForm_companyName"]');
await page.fill('input[id="createLeadForm_companyName"]', 'ACCENTURE');

await page.waitForSelector('input[id="createLeadForm_firstName"]');
await page.fill('input[id="createLeadForm_firstName"]', 'JABIN');

await page.waitForSelector('input[id="createLeadForm_lastName"]');
await page.fill('input[id="createLeadForm_lastName"]', 'FAITH');

await page.locator('#createLeadForm_dataSourceId').selectOption({ index: 4 }); // Employee

await page.waitForSelector('input[name="submitButton"]');
await page.click('input[name="submitButton"]');

await page.waitForSelector('//a[contains(@href,"deleteLeadForm")]');
await page.click('//a[contains(@href,"deleteLeadForm")]');

});