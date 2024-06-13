import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../pages/OrangeHrm/LoginPage";
import { AdminPage } from "../../pages/OrangeHrm/AdminPage";

const loginPage = new LoginPage
const adminPage = new AdminPage

Given('User wants to access OrangeHrm site', () => {

})
When('Connect to the url', () => {
    cy.visit(loginPage.getUrl)
})

Then('Page is loaded properly', ()=> {
    cy.url().should('equal',loginPage.getUrl)
    //There is a banner logo
    cy.get(loginPage.getBannerLogo).should('be.visible')
    //There is header title with value : Login
    cy.get(loginPage.getLoginTitleHeader).should('be.visible')
        .and('have.prop','tagName','H5')
        .and('have.css','text-align','center')
        .and('have.text','Login')
    //There is a provided credential
    cy.get(loginPage.getProvidedCredentialArea).should('be.visible')
    cy.get(loginPage.getProvidedCredentialUsernameTxt).should('not.eq',null)
    cy.get(loginPage.getProvidedCredentialPasswordTxt).should('not.eq',null)
    //There is username area
    cy.get(loginPage.getUsernameIcon).should('be.visible')
    cy.get(loginPage.getUsernameTitle).should('be.visible')
    cy.get(loginPage.getUsernameInputField).should('be.visible')
    //There is password area
    cy.get(loginPage.getPasswordIcon).should('be.visible')
    cy.get(loginPage.getPasswordTitle).should('be.visible')
    cy.get(loginPage.getPasswordInputField).should('be.visible')
        .and('have.attr','type','password')
    //There is login button
    cy.get(loginPage.getLoginBtn).should('be.visible')
    //There is forgot password
    cy.get(loginPage.getForgotPassword).should('be.visible')
})

When('input to username and password text field using provided username and password', () => {
    cy.get(loginPage.getUsernameInputField).type('Admin')
    cy.get(loginPage.getPasswordInputField).type('admin123')
})

Then('info is displayed accordingly', () => {
    cy.get(loginPage.getUsernameInputField).should('have.value','Admin')
    cy.get(loginPage.getPasswordInputField).should('have.value','admin123')

})

When('click on Login button', () => {
    cy.get(loginPage.getLoginBtn).click()
    cy.wait(2000)
})

Then('Login successfully and switch to dashboard page', ()=> {
    cy.url().should('eq',adminPage.getUrl)
})

