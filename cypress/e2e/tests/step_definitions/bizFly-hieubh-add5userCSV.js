import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import credentials from "../../../fixtures/credentials.json";
import { LoginPage } from "../../pages/bizFly-hieubh/LoginPage";
import { MainPage } from "../../pages/bizFly-hieubh/MainPage";


const loginPage = new LoginPage;
const mainPage = new MainPage;


Given('user on the login page 2', () => {
    cy.generate5User()
    cy.convertToXLSX()
    cy.visit(loginPage.getUrl)
    cy.wait(3000)
})

When('user enters valid username then click continue 2', () => {
    // cy.iframe('iframe[id="embed_login"]').find('input').type('abc.gmail')
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).type(credentials.username, { delay: 100 })
        getBody().find(loginPage.getSubmitBtn).click()
        cy.wait(2000)
    })
})

Then('page recognizes the exist user 2', () => {
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().xpath(loginPage.getExistUser).should('be.visible')
    })
})

When('user enters valid password and click continue 2', () => {
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).type(credentials.password)
        getBody().find(loginPage.getSubmitBtn).click()
        cy.wait(20000)
    })
})

Then('user login successfully and redirect to main page 2', () => {
    cy.url().should('equal', mainPage.getUrl);
})

When('user click on selecting project dropdown then select hieubh 2', () => {
    cy.get(mainPage.getChoosingProjectDropdown).click()
    cy.get(mainPage.getBizFlyMarketingOption).click()
    cy.wait(1000)
})

Then('click on BizEmail 2', () => {
    cy.get('[data-id="2"][data-code="mail"]').click()
    cy.wait(2000)
})

When('click on khach hang on left tab 2', () => {
    cy.get('a[data-original-title="Khách hàng"]').click()
    cy.wait(2000)
})

Then('click on them khach hang 2', () => {
    cy.xpath('//a[text()="Thêm khách hàng"]').click();
    cy.wait(2000)
})

When('user fill info 2', () => {
    //chon import them hang loat
    cy.get('label[for="import-many"]').click()
    // chon tai len tu file trong may tinh
    cy.get('#uploadfileManual').click().selectFile("cypress\downloads\data_5_users.xlsx",{force:true})

})