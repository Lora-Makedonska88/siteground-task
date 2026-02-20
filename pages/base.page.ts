import { Page, expect } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  // =========================
  // Locators (common across multiple pages)
  // =========================

  private get domainDropdown() {
    return this.page.locator("div[data-e2e='dropdown']");
  }

  // =========================
  // Common Actions (used across multiple pages)
  // =========================

  async navigateWithToken(demoToken: string): Promise<void> {
    await this.page.goto(`/?demoToken=${demoToken}`, {
      waitUntil: "networkidle",
    });
  }

  async openDomainDropdown(): Promise<void> {
    await this.domainDropdown.click();
  }

  async validateDomainOptions(expectedDomains: string[]): Promise<void> {
    const options = this.page
      .locator('[data-e2e="dropdown-options"]')
      .getByRole("option");
    const actualDomains = (await options.allTextContents()).map((text) =>
      text.trim(),
    );
    expect(actualDomains).toEqual(expectedDomains);
  }
  
  async chooseDomain(domain: string): Promise<void> {
    await this.page
      .locator('[data-e2e="dropdown-options"]')
      .getByText(domain)
      .click();
  }
}
