/// <reference types="Cypress" />

import { authLogin } from '../../page_objects/authLogin';
import { header } from '../../page_objects/header';
const faker = require("faker");


describe('POM Login', () => {

    let validEmail = 'aleksandarloncar89@gmail.com';
    let validPass = 'Sladoled1!';

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.datatype.number()
    }

    before('visit app', () => {
        cy.visit('/');
        cy.url().should('contains', 'gallery-app');
    });

    it('login with invalid credentials', () => {
        header.loginBtn.click();
        authLogin.login(userData.randomEmail, userData.randomPassword)
        cy.url().should('contains', '/login');

    });

    it('login with valid credentials', () => {

        cy.get("a[href='/login']").click();
        cy.url().should('contains', '/login');

        authLogin.login(validEmail, validPass);
        cy.wait(1000);
        cy.url().should('not.contains', '/login');

    });
    
    it('logout',() => {
        cy.wait(1000);
        header.logoutBtn.click();
    });

});
