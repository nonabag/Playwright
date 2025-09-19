import { Page, expect } from "@playwright/test";

export class NavigateTo {

    readonly page: Page;
    constructor( page: Page) {
        this.page = page
    }

    async navigateToMainPage() {
        await expect(this.page.locator('img.logo')).toBeVisible();
    }

    async navigateToFilterDialog() {
        await this.page.getByRole('banner').getByRole('link', { name: 'Գրքեր' }).click();
        await this.page.getByRole('link', { name: 'Ֆիլտրել' }).click();

};
}