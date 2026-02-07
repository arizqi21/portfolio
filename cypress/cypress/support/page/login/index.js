import pageObject from './page-object.json';
import credential from '../../data/credential.json';

class Action {
    async loginValid(){
        await cy.xpath(pageObject.usernameField).type(credential.username);
        await cy.xpath(pageObject.passwordField).type(credential.password);
        await cy.xpath(pageObject.loginButton).click();
    }
}

export default new Action();