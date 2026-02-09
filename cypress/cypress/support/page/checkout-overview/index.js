import pageObject from './page-object.json';

class Action {
    async finishCheckout() {
        await cy.xpath(pageObject.finishButton).click();
    }
}

export default new Action();
