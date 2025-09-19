import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test.describe('Zangak Bookstore test suite', () => {

test.beforeEach(async ({page}) => {
  await page.goto('https://zangakbookstore.am/');

})

test('Verify Home Page is Visible', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().navigateToMainPage();
  
});

test('Search for Saroyan books', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().navigateToMainPage();
  await pm.onMainPage().searchForAnAuthorOnMainPage('William Saroyan')

}); 

});


