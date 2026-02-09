import { loginPage, productsPage, cartPage, checkoutInfoPage, checkoutOverviewPage, checkoutCompletePage } from '../../support/page'
import defaultCustomer from '../../support/data/customer-data.json'

describe('saucedemo UI - checkout flow', async () => {
    it('e2e checkout', async () => {
        // visit website
        await cy.visit('https://www.saucedemo.com');

        // login
        await loginPage.loginValid();

        // add item 1 and 2 to cart
        await productsPage.addItemsToCart();

        // checkout
        await productsPage.goToCart();
        await cartPage.proceedToCheckout();

        // fill checkout information
        await checkoutInfoPage.fillFirstName(defaultCustomer.firstName);
        await checkoutInfoPage.fillLastName(defaultCustomer.lastName);
        await checkoutInfoPage.fillPostalCode(defaultCustomer.postalCode);
        await checkoutInfoPage.clickContinue();

        // finish transaction
        await checkoutOverviewPage.finishCheckout();

        // checkout complete
        await checkoutCompletePage.backToProducts();
    });
});
