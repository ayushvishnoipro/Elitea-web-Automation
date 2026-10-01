import { test, expect } from '@playwright/test';

test('EPAM Client Work navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Open Services from the header menu.
  await page.getByRole('link', { name: 'Services', exact: true }).click();

  // The current site exposes the Client Work destination from the Services page.
  await page.getByRole('link', { name: 'view all case studies' }).click();

  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
