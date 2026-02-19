import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openDashboard(): Promise<void> {
    await this.page.getByRole('listitem').filter({ hasText: 'Dashboard' }).click();
  }

  async openEmailMenu(): Promise<void> {
    await this.page.getByRole('listitem').filter({ hasText: 'Email' }).click();
  }

  async navigateToEmailAccounts(): Promise<void> {
    await this.openDashboard();
    await this.openEmailMenu();
    await this.page.locator('li[data-e2e="navigation-group-mail"]').click();
  }

  async navigateToForwarders(): Promise<void> {
    await this.openDashboard();
    await this.openEmailMenu();
    await this.page.locator('[data-e2e="navigation-list-item-email-forward"]').click();
  }

}
