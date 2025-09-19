import { test, expect, Page } from '@playwright/test';
import { Filter } from './filterDialog';
import { NavigateTo } from './navigation';
import { MainPage } from './mainPage';

export class PageManager {

    readonly page: Page;
    readonly navigation: NavigateTo;
    readonly filter: Filter;

    constructor( page: Page)
    {
        this.page = page;
        this.navigation = new NavigateTo(this.page);
        this.filter = new Filter(this.page);
    };

    navigateTo () {
        return this.navigation
    }

    onFilterDialog () {
        return  this.filter
    }

    onMainPage () {
        return  new MainPage(this.page)
    }

};