import { Page, expect} from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openDashboard(): Promise<void> {
    await this.page.locator('li[data-e2e="navigation-group-dashboard"]').click();
  }

  async openEmailMenu(): Promise<void> {
    const emailMenu = this.page.getByRole('listitem').filter({ hasText: 'Email' });
    await expect(emailMenu).toBeVisible();
    await emailMenu.click();
  }
  
  async navigateToEmailAccounts(): Promise<void> {
    await this.openDashboard();
    await this.openEmailMenu();
    const accountsLink = this.page.getByRole('link', { name: 'Accounts' });
    await expect(accountsLink).toBeVisible();
    await accountsLink.click();
  }

  async navigateToForwarders(): Promise<void> {
    await this.openDashboard();
    await this.openEmailMenu();
    await this.page.locator('[data-e2e="navigation-list-item-email-forward"]').click();
  }

}
