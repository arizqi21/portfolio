import pageObject from './page-object.json';

class Action {
    async proceedToCheckout() {
        await cy.xpath(pageObject.checkoutButton).click();
    }
}

export default new Action();
