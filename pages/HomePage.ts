import { Page, Locator } from '@playwright/test';

export class HomePage {
readonly page: Page;
readonly logo: Locator;

constructor(page: Page) {
this.page = page;
this.logo = page.locator('a').filter({ has: page.locator('img') }).first();
}

async open() {
await this.page.goto('https://www.testlio.com/');
}

async getTitle() {
return await this.page.title();
}
}