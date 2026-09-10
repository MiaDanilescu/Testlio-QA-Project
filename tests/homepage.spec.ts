import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Homepage loads successfully', async ({ page }) => {
const homePage = new HomePage(page);

await homePage.open();

const title = await homePage.getTitle();

await expect(title).toMatch(/Testlio/i);
});

