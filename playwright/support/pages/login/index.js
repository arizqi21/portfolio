// import {text, Page} from 'playwright/test';
import pageObject from './page-object.json';

class Action { 
    constructor(page){
        this.page = page
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com');
    }

    async login() {    
        await this.page.locator(pageObject.usernameField).fill('standard_user');
        await this.page.locator(pageObject.passwordField).fill('secret_sauce');
        await this.page.locator(pageObject.loginButton).click();
    }
}

export default Action;