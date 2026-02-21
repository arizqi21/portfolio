import {test as base, expect} from 'playwright/test';

import * as Pages from './pages/index';

export const test = base.extend({
    loginPage: async ({page}, use) => {
        await use(new Pages.LoginPage(page));
    },

    homePage: async ({page}, use) => {
        await use(new Pages.HomePage(page));
    },

    cartPage: async ({page}, use) => {
        await use(new Pages.CartPage(page));
    },

    checkoutInfoPage: async ({page}, use) => {
        await use(new Pages.CheckoutInfoPage(page));
    },
    
    checkoutOverviewPage: async ({page}, use) => {
        await use(new Pages.CheckoutOverviewPage(page));
    },

    checkoutCompletePage: async ({page}, use) => {
        await use(new Pages.CheckoutCompletePage(page));
    }
})