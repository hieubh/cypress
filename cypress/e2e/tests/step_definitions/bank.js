import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../Assignment/Pages/loginpage";
import { ManagerPage } from "../../Assignment/Pages/managerPage";

const loginPage = new LoginPage;
const managerPage = new ManagerPage;

Given('Access to Bank Manager Login', () => {
    cy.visit(loginPage.getLoginUrl)
    cy.wait(1000)
})

When('Click on button "Bank Manger Login"', () => {
    cy.get(loginPage.getBankManagerLoginBtn).click()
})

Then('Bank Manager Page loaded', () => {
    cy.url().should('contain', '/manager')
    cy.get('.center > *')
        .should('be.visible')
        .and('have.length', 3)
        .each(($btn) => {
            cy.get($btn)
                .should('have.css', 'text-align', 'center')
                .and('have.css', 'font-size', '18px')
        })
})

When('Click on button "Add Customer"', () => {
    cy.get(managerPage.getAddCustomerBtn).click()
})

Then('Add Customer related fields are displayed', () => {
    cy.url().should('contain', '/addCust')
    //validate button after click
    cy.get(managerPage.getAddCustomerBtn)
        .should('have.css', 'background-color', 'rgb(40, 96, 144)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .then(() => {
            //validate the notch
            cy.get('#notch')
                .should('be.visible')
                .and('have.css', 'border-top', '14.4px solid rgb(51, 122, 183)')
        })
    //validate first name field
    cy.get(managerPage.getFirstNameArea).then(($listElement) => {
        cy.get($listElement[0])
            .should('have.prop', 'tagName', 'LABEL')
            .and('have.text', 'First Name :')
        cy.get($listElement[1]).should('have.prop', 'tagName', 'INPUT')
            .and('have.attr', 'type', 'text')
            .and('have.attr', 'placeholder', 'First Name')
    })
    //validate last name field
    cy.get(managerPage.getLastNameArea).then(($listElement) => {
        cy.get($listElement[0])
            .should('have.prop', 'tagName', 'LABEL')
            .and('have.text', 'Last Name :')
        cy.get($listElement[1]).should('have.prop', 'tagName', 'INPUT')
            .and('have.attr', 'type', 'text')
            .and('have.attr', 'placeholder', 'Last Name')
            .and('have.attr', 'required')
    })
    //validate post code field
    cy.get(managerPage.getPostCodeArea).then(($listElement) => {
        cy.get($listElement[0])
            .should('have.prop', 'tagName', 'LABEL')
            .and('have.text', 'Post Code :')
        cy.get($listElement[1]).should('have.prop', 'tagName', 'INPUT')
            .and('have.attr', 'type', 'text')
            .and('have.attr', 'placeholder', 'Post Code')
            .and('have.attr', 'required')

    })
    //validate Add Customer button
    cy.get(managerPage.getSubmitBtn)
        .should('have.prop', 'tagName', 'BUTTON')
        .and('have.text', 'Add Customer')
})

When('Type in needed information', () => {
    cy.get(managerPage.getFirstNameTxtField)
        .type('Hieu')
    cy.get(managerPage.getLastNameTxtField)
        .type('Bui')
    cy.get(managerPage.getPostCodeTxtField)
        .type('10000')
})

Then('Info is displayed in the input field accordingly', () => {
    cy.get(managerPage.getFirstNameTxtField)
        .should('have.value', 'Hieu')
    cy.get(managerPage.getLastNameTxtField)
        .should('have.value', 'Bui')
    cy.get(managerPage.getPostCodeTxtField)
        .should('have.value', 10000)
})

When('Click on "Add Customer" button', () => {
    cy.get(managerPage.getSubmitBtn)
        .click()
})

Then('Create new user successfully', () => {
    cy.on('window:alert',(text)=> {
        expect(text).be.equal('Customer added successfully with customer id :6')
    })
})

