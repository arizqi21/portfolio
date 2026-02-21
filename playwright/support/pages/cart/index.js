import pageObject from './page-object.json';

class CartPage {
    constructor(page){
        this.page = page
    }

    async checkout(){
        await this.page.locator(pageObject.checkoutButton).click();
    }
}

export default CartPage;