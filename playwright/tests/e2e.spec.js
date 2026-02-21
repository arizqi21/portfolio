import {test, expect} from '../support/fixtures';

test('e2e', async ({loginPage, homePage, cartPage, checkoutInfoPage, checkoutOverviewPage, checkoutCompletePage}) => {
    await loginPage.goto();
    
    // login
    await loginPage.login();

    // add item to cart
    await homePage.addItemToCart();
    await homePage.goToCartPage();

    // checkout from cart
    await cartPage.checkout();

    //checkout info 
    await checkoutInfoPage.fillCustomerData();

    //checkout overview
    await checkoutOverviewPage.finishCheckout();

    //checkout complete
    await checkoutCompletePage.backToHome();
})