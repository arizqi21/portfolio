import pageObject from './page-object.json';

class HomePage {
    constructor(page) {
        this.page = page
    }

    async addItemToCart(){
        await this.page.locator(pageObject.addToCartItem1).click();
        await this.page.locator(pageObject.addToCartItem2).click();
    }

    async goToCartPage(){
        await this.page.locator(pageObject.shoppingCartLink).click();
    }
}

export default HomePage;