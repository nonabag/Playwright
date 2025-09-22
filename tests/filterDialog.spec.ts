import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async ({page}) => {
    await page.goto('https://zangakbookstore.am/');
});

test('Check all language checkboxes', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().navigateToFilterDialog();
  await pm.onFilterDialog().checkAllLanguagesCheckboxes();
  
});

test('Filter by price slider functionality', async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().navigateToFilterDialog();
  await pm.onFilterDialog().setValueToPriceSliderAndVerifyIt('75000');


}) 

test('Search by language functionality verification', async ({page}) => {
    const pm = new PageManager(page);
    await pm.navigateTo().navigateToFilterDialog();
    await pm.onFilterDialog().searchForaLanguageAndCheckIt('Հայերեն');

})

test('Select from and to age filters', async ({page}) => {
    const pm = new PageManager(page);
    await pm.navigateTo().navigateToFilterDialog();
    await pm.onFilterDialog().selectAgefilterFromDropDownFieldsAndVerify('3', '12');

})
