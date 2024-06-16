import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import Account from "../../fixtures/sauceDemoData.json"

Given('Access to Page',()=> {
    cy.visit('https://www.saucedemo.com/')
    cy.wait(1000)
})

Then('Page is loaded properly', () => {
    cy.wait(100)
})

When('user input standard account information', ()=> {
    // cy.fixture('sauceDemoData').then((account)=> {
    //     cy.get('#user-name').type(account.standard_user.userName)
    //     cy.get('#password').type(account.standard_user.password)
    // })

    cy.get('#user-name').type(Account.standard_user.userName)
    cy.get('#password').type(Account.standard_user.password)
})

Then('info is displayed properly on user name and password field', () => {
    cy.wait(100)

})

When('user click on login button', ()=> {
    cy.get('input[type="submit"]').click()
})

Then('Login successfully and switch to other Page', () => {
    cy.wait(100)
})