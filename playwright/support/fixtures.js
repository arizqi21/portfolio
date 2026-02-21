import {test as base, expect} from 'playwright/test';

import * as Pages from './pages/index';

export const test = base.extend({
    loginPage: async ({page}, use) => {
        await use(new Pages.LoginPage(page))
    }
})