/*import { test, expect } from '@playwright/test';

test('Homepage loads successfully', async ({ page }) => {
await page.goto('https://www.testlio.com/');

await expect(page).toHaveTitle(/Testlio/i);
});
*/

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Homepage loads successfully', async ({ page }) => {
const homePage = new HomePage(page);

await homePage.open();

const title = await homePage.getTitle();

await expect(title).toMatch(/Testlio/i);
});

