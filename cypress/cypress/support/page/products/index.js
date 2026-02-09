import pageObject from './page-object.json';

class Action {
    async addItemsToCart() {
        await cy.xpath(pageObject.addToCartItem1).click();
        await cy.xpath(pageObject.addToCartItem2).click();
    }

    async goToCart() {
        await cy.xpath(pageObject.shoppingCartLink).click();
    }
}

export default new Action();
