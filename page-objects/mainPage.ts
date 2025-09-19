import { Page, expect } from "@playwright/test";

export class MainPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async searchForAnAuthorOnMainPage(author: string){
        const searchInputField = this.page.getByRole('textbox', { name: 'Որոնել' })
        await searchInputField.click();
        await searchInputField.fill(author);
        await expect(searchInputField).toHaveValue(author);
        await this.page.locator('#topSearchForm').getByRole('button').click();
        await expect(this.page.locator('body')).toContainText(author);

    }
}



