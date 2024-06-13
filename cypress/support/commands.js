// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { HerokuSubmitPage } from "../e2e/pages/herokuSubmitPage";
import { LoginUI } from "../e2e/pages/loginUISauceDemo";

const loginUI = new LoginUI;
const herokuSubmitPage = new HerokuSubmitPage


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

Cypress.Commands.add('login', function () {
    cy.visit(loginUI.getUrl);
    cy.get(loginUI.getUsername).type('standard_user');
    cy.get(loginUI.getPassword).type('secret_sauce');
    cy.get(loginUI.getElmLoginBtn).click();
    cy.url().should('contain', '/inventory.html');
    cy.get('.header_label').should('contain', 'Swag Labs');
    cy.get('.inventory_item').should('have.length.at.least', 1);
})

Cypress.Commands.add('submitInfo', function () {
    cy.visit(herokuSubmitPage.getUrl);
    cy.get(herokuSubmitPage.getUserName).type('username').then(
        (el) => {
        cy.wrap(el.val()).as('inputUserName');
    });
    cy.get(herokuSubmitPage.getPassword).type('password').then(
        (el) => {
            cy.wrap(el.val()).as('inputPassword');
        }
    );
    cy.xpath(herokuSubmitPage.getCommentArea).clear().type('this is comment for this section');
    cy.get(herokuSubmitPage.getuploadFileBtn).click().selectFile(herokuSubmitPage.getFileLocation);
    //action at checkboxes
    cy.get(herokuSubmitPage.getCheckBox3).uncheck();
    cy.get(herokuSubmitPage.getCheckBox1).check();
    cy.get(herokuSubmitPage.getCheckBox2).check();
    //Radio items
    cy.get(herokuSubmitPage.getRadioItem1).check();
    //Multiple select
    cy.get(herokuSubmitPage.getMultipleSelect).select([herokuSubmitPage.getOption1, herokuSubmitPage.getOption2, herokuSubmitPage.getOption3]);
    //Select option 4
    cy.get(herokuSubmitPage.getDropdown).select(herokuSubmitPage.getItem4);
    //Click on submit button
    cy.get(herokuSubmitPage.getSubmitBtn).click();
})