import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ForwardersPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // =========================
  // Locators (private helpers)
  // =========================

  private get forwardNameInput(): Locator {
    return this.page.locator('[data-e2e="forward-crate-name"]');
  }

  private get forwardNameLabel(): Locator {
    return this.page.locator('[data-e2e="forward-crate-name-label"]');
  }

  private get forwardNameValidation(): Locator {
    return this.page.locator('[data-e2e="validation"]');
  }
 
  private get createButton(): Locator {
    return this.page.locator('[data-e2e="create-box-submit"]');
  }

  // =========================
  // Actions
  // =========================

  async clickCreate(): Promise<void> {
    await this.createButton.click();
  }

  // =========================
  // Assertions (used in tests)
  // =========================

  async expectForwardNameRequiredError(): Promise<void> {
    await expect(this.forwardNameInput).toBeVisible();
    await expect(this.forwardNameLabel).toContainText('Forward all messages sent to:');
    await expect(this.forwardNameValidation).toHaveText('Required field.');
  }
}