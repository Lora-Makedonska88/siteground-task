import { Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateWithToken(demoToken: string): Promise<void> {
    await this.page.goto(`/?demoToken=${demoToken}`, {
      waitUntil: 'domcontentloaded',
    });
  }
}
 