import { LoginPage } from "../Pages/loginpage"
import { ManagerPage } from "../Pages/managerPage";

let loginPage = new LoginPage;
let managerPage = new ManagerPage;

describe('check UI', () => {
    beforeEach(() => {
        cy.visit(loginPage.getLoginUrl)
    })
    it(('validate login page'), () => {
        //validate header and body
        cy.validateHeaderAndBody()
        //validate customer login btn
        cy.get(loginPage.getCustomerLoginBtn)
            .should('be.visible')
            .and('have.text', 'Customer Login')
            .and('have.css', 'background-color', 'rgb(51, 122, 183)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'text-align', 'center')
        //validate bank manager login btn
        cy.get(loginPage.getBankManagerLoginBtn)
            .should('be.visible')
            .and('have.text', 'Bank Manager Login')
            .and('have.css', 'background-color', 'rgb(51, 122, 183)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'text-align', 'center')
    })

    it('validate main manager account page', () => {
        cy.get(loginPage.getBankManagerLoginBtn).click()
        cy.url().should('eq', managerPage.getLinkUrl)
        // cy.wait(2000);
        //validate header and body
        cy.validateHeaderAndBody()
        //validate buttons bar in manager page
        cy.get(managerPage.getButtonBar).should('be.visible')
            .each(($btn) => {
                cy.get($btn)
                    .should('have.css', 'text-align', 'center')
                    .and('have.css', 'font-size', '18px')
            })
    })
    it('validate manager account page when click on add customer',()=> {
        cy.get(loginPage.getBankManagerLoginBtn).click()
        //Click on Add Customer button
        cy.get(managerPage.getAddCustomerBtn).click();
        cy.url().should('contain','/addCust')
        //validate button after click
        cy.get(managerPage.getAddCustomerBtn)
            .should('have.css', 'background-color', 'rgb(40, 96, 144)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .then(($addCustomerBtn) => {
                //validate the notch
                cy.get('#notch')
                    .should('be.visible')
                    .and('have.css', 'border-top', '15px solid rgb(51, 122, 183)')
            })
        //validate form and button area under add customer btn
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
    it('validate manager account page when click on open account button',() => {
        cy.visit(loginPage.getLoginUrl)
        cy.get(loginPage.getBankManagerLoginBtn).click();
        cy.get(managerPage.getOpenAccountBtn).click();
        cy.url().should('contain','/openAccount')
        //validate customer field
        cy.get(managerPage.getCustomerArea).then(($listElement)=> {
            cy.get($listElement[0])
                .should('have.prop','tagName','LABEL')
                .should('have.text','Customer :')
            cy.get($listElement[1])
                .should('have.prop','tagName','SELECT')
                .and('have.attr','required')
        })
        //validate currentcy area
        cy.get(managerPage.getCurrencyArea).then(($listElement)=> {
            cy.get($listElement[0])
                .should('have.prop','tagName','LABEL')
                .should('have.text','Currency :')
            cy.get($listElement[1])
                .should('have.prop','tagName','SELECT')
                .and('have.attr','required')
        })
        //validate process button
        cy.get(managerPage.getProcessBtn)
            .should('have.prop', 'tagName', 'BUTTON')
            .and('have.text', 'Process')
    })
    it('validate manager account page when click on Customers button',()=> {
        cy.visit(loginPage.getLoginUrl)
        cy.get(loginPage.getBankManagerLoginBtn).click();
        cy.get(managerPage.getCustomerBtn).click();
        cy.url().should('contain','/list')
        //validate Customer area
        cy.get(managerPage.getCustomerArea).should('be.visible')
        


    })
})