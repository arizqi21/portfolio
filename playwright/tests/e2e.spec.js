// import {test, expect} from 'playwright/test';
// import pageObject from '../support/page-object/login.json';
import {test, expect} from '../support/fixtures';

test('coba', async ({loginPage}) => {
    await loginPage.goto();
    
    //login
    await loginPage.login();
    // await expect(page).toHaveTitle('Swag Labs');
    // await page.locator(pageObject.usernameField).fill('standard_user');
    // await page.locator(pageObject.passwordField).fill('secret_sauce');
    // await page.locator(pageObject.loginButton).click();

    //
    // await expect().toBeVisible();
})