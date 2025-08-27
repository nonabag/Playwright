import { test, expect } from '@playwright/test';

test('Dashboard UI elements verification', async ({ page }) => {
  await page.goto('https://wirestock.io/');
  await page.getByText('Gen AI Tools').click();
  await page.getByRole('link', { name: 'AI Image Generator Transform' }).click();
  await expect(page.locator('div').filter({ hasText: /^Gen AI ToolsMarketplaceSell Visual ContentFor AI CompaniesResources$/ }).getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'AI Image Generator: Create &' })).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Create AI images using text prompts');
  await expect(page.locator('h1')).toMatchAriaSnapshot(`- 'heading "AI Image Generator: Create & Sell Your AI Images for Free" [level=1]'`);
  await page.locator('div').filter({ hasText: 'Highest Quality and Details' }).nth(3).click();
});