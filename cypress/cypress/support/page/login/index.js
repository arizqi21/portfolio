import pageObject from './page-object.json';
import credential from '../../data/credential.json';

class Action {
    async login({ username, password }) {
        // username: hanya disentuh jika dikirim (undefined/null = tidak dikirim)
        await cy.xpath(pageObject.usernameField).clear();
        if (username) {
            await cy.xpath(pageObject.usernameField).type(username);
        }

        // password: sama seperti username
        await cy.xpath(pageObject.passwordField).clear();
        if (password) {
            await cy.xpath(pageObject.passwordField).type(password);
        }

        await cy.xpath(pageObject.loginButton).click();
    }

    async loginValid() {
        await this.login({
            username: credential.username,
            password: credential.password,
        });
    }
}

export default new Action();