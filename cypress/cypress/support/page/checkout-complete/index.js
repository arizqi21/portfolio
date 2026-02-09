import pageObject from './page-object.json';

class Action {
    async backToProducts() {
        await cy.xpath(pageObject.backToProductsButton).click();
    }
}

export default new Action();
