import { loginPage } from '../../support/page'
import credential from '../../support/data/credential.json'

describe('saucedemo UI - login', async () => {
    it('login failed with invalid password', async () => {
        await cy.visit('https://www.saucedemo.com');

        await loginPage.login({
            username: credential.username,
            password: 'wrong_password',
        });

        // assert error message is shown
        await cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'Username and password do not match');
    });

    it('login failed with invalid username', async () => {
        await cy.visit('https://www.saucedemo.com');

        await loginPage.login({
            username: 'wrong_user',
            password: credential.password,
        });

        // assert error message is shown
        await cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'Username and password do not match');
    });

    it('login failed with empty username and password', async () => {
        await cy.visit('https://www.saucedemo.com');

        await loginPage.login({
            username: '',
            password: '',
        });

        // assert error message is shown
        await cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'Username is required');
    });

    it('login failed with only username filled', async () => {
        await cy.visit('https://www.saucedemo.com');

        await loginPage.login({
            username: credential.username,
            // password not sent at all
        });

        await cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'Password is required');
    });

    it('login failed with only password filled', async () => {
        await cy.visit('https://www.saucedemo.com');

        await loginPage.login({
            // username not sent at all
            password: credential.password,
        });

        await cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain.text', 'Username is required');
    });

    it('login success', async () => {
        // visit website
        await cy.visit('https://www.saucedemo.com');

        // login with valid credential
        await loginPage.login({
            username: credential.username,
            password: credential.password,
        });

        // assert redirected to inventory page
        await cy.url().should('include', '/inventory.html');
        await cy.get('.inventory_list').should('be.visible');
    });
});