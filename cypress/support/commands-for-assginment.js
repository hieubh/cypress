import { LoginPage } from "../e2e/Assignment/Pages/loginpage";
import { ManagerPage } from "../e2e/Assignment/Pages/managerPage";

const loginPage = new LoginPage;
const managerPage = new ManagerPage;

Cypress.Commands.add('validateHeaderAndBody', () => {
    //validate header part
    cy.get(loginPage.getHeaderPart)
        .should('be.visible')
        .and('have.css', 'background-color', 'rgb(66, 66, 66)')
    //checking homeBtn
    cy.get(loginPage.getHomeBtn)
        .should('be.visible')
        .and('have.text', 'Home')
        .and('have.css', 'float', 'left')
        .and('have.css', 'text-align', 'center')
    //check main heading text
    cy.get(loginPage.getMainHeadingText)
        .should('be.visible')
        .and('have.text', 'XYZ Bank')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'text-align', 'center')
        .and('have.prop', 'tagName', 'STRONG')
    //validate body part
    cy.get(loginPage.getBodyPart)
        .should('be.visible')
})