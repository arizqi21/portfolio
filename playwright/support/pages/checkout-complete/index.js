import pageObject from './page-object.json';

class CheckoutCompletePage {
    constructor(page){
        this.page = page
    }

    async backToHome(){
        await this.page.locator(pageObject.backToHomeButton).click();
    }
}

export default CheckoutCompletePage;