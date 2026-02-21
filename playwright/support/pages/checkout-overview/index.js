import pageObject from './page-object.json';

class CheckoutOverviewPage {
    constructor(page) {
        this.page = page;
    }

    async finishCheckout(){
        await this.page.locator(pageObject.finishButton).click();
    }
}

export default CheckoutOverviewPage;