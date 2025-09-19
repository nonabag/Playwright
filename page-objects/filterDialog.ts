import { Page, expect } from "@playwright/test";

export class Filter {
    readonly page : Page;

    constructor(page: Page){

        this.page = page;

    }

    async searchForaLanguageAndCheckIt(enteredLanguage: string){
        
        await this.page.locator('#filter_language').getByRole('textbox').fill(enteredLanguage);
        expect(this.page.locator('#filter_language').getByRole('checkbox', {name: enteredLanguage, exact: true})).toBeVisible();
        if (await this.page.locator('#filter_language').getByRole('checkbox').count() === 1)
        {
            await this.page.locator('#filter_language').getByRole('checkbox', {name: enteredLanguage}).check();
        }
        else {
            await this.page.locator('#filter_language').getByRole('checkbox').first().check();
        }
  }
    async setValueToPriceSliderAndVerifyIt(price: string) {

          await this.page.locator('.slider-horizontal').scrollIntoViewIfNeeded();
          const box = await this.page.locator('.slider-horizontal').boundingBox();
          const xCoord = box!.x;
          const yCoord = box!.y;
          await this.page.mouse.move(xCoord, yCoord);
          await this.page.mouse.down();
          await this.page.mouse.move(xCoord + box!.width/2, yCoord);
       //   await this.page.mouse.move(xCoord + price, yCoord);
          await this.page.mouse.up();
          const DisplayedValue = await this.page.locator('input[name="priceFrom"]').inputValue();
          expect(DisplayedValue).toBe(price);

    }

    async checkAllLanguagesCheckboxes(){
        const allLanguageCheckBoxes = this.page.locator('#filter_language').getByRole('checkbox');
        for (const language of await allLanguageCheckBoxes.all()) {
            await language.check({});
            expect(language.isChecked()).toBeTruthy();
        }
    }

    async selectAgefilterFromDropDownFieldsAndVerify(fromAge: string, toAge: string){
        await this.page.locator('select[name="age-from"]').selectOption(fromAge);
        await this.page.locator('select[name="age-to"]').selectOption(toAge);
        await expect(this.page.locator('select[name="age-from"]')).toHaveValue(fromAge);
        await expect(this.page.locator('select[name="age-to"]')).toHaveValue(toAge);
        
    }

}