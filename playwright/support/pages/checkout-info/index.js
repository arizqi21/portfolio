import pageObject from './page-object.json';

class CheckoutInfoPage{
    constructor(page) {
        this.page = page
    }

    async fillCustomerData(){
        await this.page.locator(pageObject.firstNameInput).fill('first name');
        await this.page.locator(pageObject.lastNameInput).fill('last name');
        await this.page.locator(pageObject.postalCodeInput).fill('123321');
        await this.page.locator(pageObject.continueButton).click();
    }
}

export default CheckoutInfoPage;