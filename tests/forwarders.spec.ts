import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { ForwardersPage } from '../pages/forwarders.page';
import { testData } from '../utils/testData';

test.describe('Forwarders - TC#2 Validation', () => {
  let dashboardPage: DashboardPage;
  let forwardersPage: ForwardersPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    forwardersPage = new ForwardersPage(page);
    await dashboardPage.navigateWithToken(testData.demoToken);
    await dashboardPage.navigateToForwarders();
  });

  test('TC#2 - Required field error when creating forwarder without data', async () => {
    await forwardersPage.openDomainDropdown();
    await forwardersPage.validateDomainOptions(testData.expectedDomains);
    await forwardersPage.chooseDomain(testData.selectedDomain);
    await forwardersPage.clickCreate();
    await forwardersPage.expectForwardNameRequiredError();
  });
});
 