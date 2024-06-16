import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from "../../../fixtures/bizFly.json"
import { LoginPage } from "../../pages/bizFly/LoginPage";
import { MainPage } from "../../pages/bizFly/mainPage";
import { BizFlyMarketingPage } from "../../pages/bizFly/bizFlyEmarketingPage";
import { BizCRM } from "../../pages/bizFly/bizCRM";
import { ProductListPage } from "../../pages/bizFly/ProductListPage";
import { ProductDetailPage } from "../../pages/bizFly/ProductDetailPage";
import { PopUpWindow } from "../../pages/bizFly/PopUpWindow";

const loginPage = new LoginPage;
const mainPage = new MainPage;
const bizFlyMarketingPage = new BizFlyMarketingPage;
const bizCRM = new BizCRM;
const productListPage = new ProductListPage;
const productDetailPage = new ProductDetailPage;
const popUpWindow = new PopUpWindow;


Given('user on the login page', () => {
    cy.visit(loginPage.getUrl)
    cy.wait(3000)
})

When('user enters valid username then click continue', () => {
    // cy.iframe('iframe[id="embed_login"]').find('input').type('abc.gmail')
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).type(data.credentials.username, { delay: 100 })
        getBody().find(loginPage.getSubmitBtn).click()
        cy.wait(2000)
    })
})

Then('page recognizes the exist user', () => {
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().xpath(loginPage.getExistUser).should('be.visible')
    })
})

When('user enters valid password and click continue', () => {
    cy.enter(loginPage.getIframe).then((getBody) => {
        getBody().find(loginPage.getInputField).type(data.credentials.password)
        getBody().find(loginPage.getSubmitBtn).click()
        cy.wait(30000)
    })
})

Then('user login successfully and redirect to main page',() => {
    cy.url().should('equal',mainPage.getUrl);
})

When('user click on selecting project dropdown then select bizFly EMarketing', () => {
    cy.get(mainPage.getChoosingProjectDropdown).click()   
    cy.get(mainPage.getBizFlyMarketingOption).click()
    cy.wait(1000)
})

Then('redirect to BizFly Emarketing page', () => {
    cy.url().should('equal', bizFlyMarketingPage.getUrl)
})

When('user select BizCRM in project overview page', () => {
    cy.get(bizFlyMarketingPage.getBizCrm).click()
    cy.wait(1000)
})

Then('redirect to BizCRM page', ()=> {
    cy.url().should('equal',bizCRM.getUrl)
    cy.viewport(1100, 660)
    cy.wait(1000)
})

When('user click on CRM sale tab', () => {
    cy.get(bizCRM.getCrmSaleTab).click()
    cy.wait(1000)
})

Then('redirect to CRM sale tab', () => {
    cy.url().should('equal',bizCRM.getCrmSaleTabUrl)
})

When('user click on Follow sau ban then click on San Pham', () => {
    cy.xpath(bizCRM.getfollowAfterSaleOption).click()
    cy.wait(1000)
    cy.get(bizCRM.getProductOption).click()
})

Then('redirect to Product List page', () => {
    cy.url().should('equal', productListPage.getUrl)
    cy.wait(1000)
})

When('user click on Them san pham moi then click them san pham moi', ()=> {
    cy.xpath(productListPage.getAddNewProductBtn).click();
    cy.wait(1000)
    cy.xpath(productListPage.getAddNewProductOption).click();
})

Then('redirect to product detail page', ()=> {
    cy.visit(productDetailPage.getUrl);
    cy.wait(1000)
})

When('user type in productCode, productName, productPrice then click Save', ()=> {
    cy.get(productDetailPage.getProductCode).type(data.newProduct.code);
    cy.get(productDetailPage.getProductName).type(data.newProduct.name);
    cy.get(productDetailPage.getProductPrice).type(data.newProduct.price);
    cy.get(productDetailPage.getSaveBtn).click()
    cy.wait(3000);
    
})

Then('pop up succesfull message show up', () => {
    cy.get(popUpWindow.getPopUpComponent).should('be.visible');
})

When('user click on Ok', ()=> {
    cy.get(popUpWindow.getOkBtn).click()
    cy.wait(2000)
})

Then('return to new created product page', ()=> {
    
})










