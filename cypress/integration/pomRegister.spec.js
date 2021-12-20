/// <reference types="Cypress" />

import { authRegister } from '../../page_objects/authRegister';
import { header } from '../../page_objects/header';
const faker = require("faker");

describe('POM Register', () => {

    let validEmail = 'aleksandarloncar89@gmail.com';

    let userData = {
        randomName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomNewPassword: faker.internet.password()
    }

    before('visit app', () => {
        cy.visit('/');
        cy.url().should('contains', 'gallery-app');
    });

    it('register with valid credentials', () => {
        header.registerBtn.click();
        cy.wait(1000);
        authRegister.register(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
        cy.url().should('contains', '/register');

    });
});    
