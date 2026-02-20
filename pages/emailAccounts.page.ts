import { Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class EmailAccountsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // =========================
  // Locators (private helpers)
  // =========================

  private get accountNameInput() {
    return this.page.locator('[data-e2e="text-input-name"]');
  }

  private get generatePasswordButton() {
    return this.page.getByRole("button", { name: "Generate" });
  }

  private get passwordInput() {
    return this.page.locator('[data-e2e="form-password-password"]');
  }

  private get createButton() {
    return this.page.locator('[data-e2e="create-box-submit"]');
  }

  private get successMessage() {
    return this.page.locator(
      '[data-e2e="box-notification"] [data-e2e="title"]',
    );
  }

  private get manageEmailAccounts() {
    return this.page.locator('[data-e2e="table-body"]');
  }

  // =========================
  // Actions
  // =========================

  async fillAccountName(accountName: string): Promise<void> {
    await this.accountNameInput.fill(accountName);
  }
  async generatePassword(): Promise<void> {
    await this.generatePasswordButton.click();
  }
  async clickCreate(): Promise<void> {
    await this.createButton.click();
  }

  // =========================
  // Getters (for assertions in test)
  // =========================

  getSuccessMessage() {
    return this.successMessage;
  }
  getAccountFromList(accountName: string) {
    return this.manageEmailAccounts.getByText(accountName);
  }
}
