import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from "../../../fixtures/data.json"
import { LoginPage } from "../../pages/bizFly-hieubh/LoginPage";
import { MainPage } from "../../pages/bizFly-hieubh/MainPage";

const loginPage = new LoginPage;
const mainPage = new MainPage;


Given('user on the login page 1', () => {
    cy.visit(loginPage.getUrl)
    cy.wait(3000)
})

When('user enters valid username then click continue 1', () => {
    // cy.iframe('iframe[id="embed_login"]').find('input').type('abc.gmail')
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).type(data.credentials.username, { delay: 100 })
        getBody().find(loginPage.getSubmitBtn).click()
        cy.wait(2000)
    })
})

Then('page recognizes the exist user 1', () => {
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().xpath(loginPage.getExistUser).should('be.visible')
    })
})

When('user enters valid password and click continue 1', () => {
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).type(data.credentials.password)
        getBody().find(loginPage.getSubmitBtn).click()
        cy.wait(15000)
    })
})

Then('user login successfully and redirect to main page 1',() => {
    cy.url().should('equal',mainPage.getUrl);
})

When('user click on selecting project dropdown then select hieubh', () => {
    cy.get(mainPage.getChoosingProjectDropdown).click()   
    cy.get(mainPage.getBizFlyMarketingOption).click()
    cy.wait(1000)
})

Then('click on BizEmail', ()=> {
    cy.get('[data-id="2"][data-code="mail"]').click()
    cy.wait(2000)
})

When('click on khach hang on left tab', ()=> {
    cy.get('a[data-original-title="Khách hàng"]').click()
    cy.wait(2000)
})

Then('click on them khach hang', ()=> {
    cy.xpath('//a[text()="Thêm khách hàng"]').click();
    cy.wait(2000)
})

When('user fill info', () => {
    //tao danh sach chua khach hang
    cy.get('[class="parent-input mb-3"] .input[data-click="listContact"]').click()
    cy.wait(1000)
    cy.get('[class="parent-input mb-3"] .input[data-click="listContact"] button[data-click="showCreateList"]').click()
    cy.wait(1000)
    cy.get('#frm-create-list input:nth-of-type(2)').type('Loyalty')
    cy.get('button[class="btn-biz-primary"][data-click="createList"]').click()
})