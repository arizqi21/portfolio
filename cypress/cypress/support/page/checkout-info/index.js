import pageObject from './page-object.json';

class Action {
    async fillFirstName(value) {
        await cy.xpath(pageObject.firstNameInput).type(value);
    }

    async fillLastName(value) {
        await cy.xpath(pageObject.lastNameInput).type(value);
    }

    async fillPostalCode(value) {
        await cy.xpath(pageObject.postalCodeInput).type(value);
    }

    async clickContinue() {
        await cy.xpath(pageObject.continueButton).click();
    }
}

export default new Action();
