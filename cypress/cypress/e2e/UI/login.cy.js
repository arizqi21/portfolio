import { loginPage } from '../../support/page'

describe('saucedemo UI', async () => {
    it('e2e', async () => {
        
        //visit website
        await cy.visit('https://www.saucedemo.com');
        
        //login
        await loginPage.loginValid();
        
        //add item 1 and 2 to cart
        await cy.xpath("(//button[contains(@data-test,'add-to-cart')])[1]").click();
        await cy.xpath("(//button[contains(@data-test,'add-to-cart')])[2]").click();

        //checkout
        await cy.xpath("//a[@data-test='shopping-cart-link']").click();

        //checkout
        await cy.xpath("//button[@data-test='checkout']").click();

        //fill checkout information
        await cy.xpath("//input[@data-test='firstName']").type('user');
        await cy.xpath("//input[@data-test='lastName']").type('baru');
        await cy.xpath("//input[@data-test='postalCode']").type('123321');
        await cy.xpath("//input[@data-test='continue']").click();

        //finish transaction
        await cy.xpath("//button[@data-test='finish']").click();

        //checkout complete
        await cy.xpath("//button[@data-test='back-to-products']").click();
    });
});