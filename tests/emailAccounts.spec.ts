import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { EmailAccountsPage } from '../pages/emailAccounts.page';
import { testData } from'../utils/testData';

test.describe('Email Accounts - Add Email Account', () => {
  let dashboardPage: DashboardPage;
  let emailAccountsPage: EmailAccountsPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    emailAccountsPage = new EmailAccountsPage(page);
    await dashboardPage.navigateWithToken(testData.demoToken);
    await dashboardPage.navigateToEmailAccounts();
  });

  test('TC#1 - Successfull Account creation', async () => {
     // TODO:
  });
});
 