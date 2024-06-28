// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import credentials from "../../../fixtures/credentials.json";
// import { LoginPage } from "../../pages/bizFly-hieubh/LoginPage";
// import { MainPage } from "../../pages/bizFly-hieubh/MainPage";


// const loginPage = new LoginPage;
// const mainPage = new MainPage;


// Given('user on the login page 1', () => {
//     cy.generate1User()
//     cy.visit(loginPage.getUrl)
//     cy.wait(3000)
// })

// When('user enters valid username then click continue 1', () => {
//     // cy.iframe('iframe[id="embed_login"]').find('input').type('abc.gmail')
//     cy.enter(loginPage.getIframe).then((getBody) => {
//         getBody().find(loginPage.getInputField).type(credentials.username, { delay: 100 })
//         getBody().find(loginPage.getSubmitBtn).click()
//         cy.wait(2000)
//     })
// })

// Then('page recognizes the exist user 1', () => {
//     cy.enter(loginPage.getIframe).then((getBody) => {
//         getBody().xpath(loginPage.getExistUser).should('be.visible')
//     })
// })

// When('user enters valid password and click continue 1', () => {
//     cy.enter(loginPage.getIframe).then((getBody) => {
//         getBody().find(loginPage.getInputField).type(credentials.password)
//         getBody().find(loginPage.getSubmitBtn).click()
//         cy.wait(20000)
//     })
// })

// Then('user login successfully and redirect to main page 1', () => {
//     cy.url().should('equal', mainPage.getUrl);
// })

// When('user click on selecting project dropdown then select hieubh', () => {
//     cy.get(mainPage.getChoosingProjectDropdown).click()
//     cy.get(mainPage.getBizFlyMarketingOption).click()
//     cy.wait(1000)
// })

// Then('click on BizEmail', () => {
//     cy.get('[data-id="2"][data-code="mail"]').click()
//     cy.wait(2000)
// })

// When('click on khach hang on left tab', () => {
//     cy.get('a[data-original-title="Khách hàng"]').click()
//     cy.wait(2000)
// })

// Then('click on them khach hang', () => {
//     cy.xpath('//a[text()="Thêm khách hàng"]').click();
//     cy.wait(2000)
// })

// When('user fill info', () => {
//     //tao danh sach chua khach hang
//     cy.get('[class="parent-input mb-3"] .input[data-click="listContact"]').click()
//     cy.wait(1000)
//     cy.get('[class="parent-input mb-3"] .input[data-click="listContact"] button[data-click="showCreateList"]').click()
//     cy.wait(1000)
//     cy.fixture('data_1_user').then((data) => {
//         cy.get('#frm-create-list input:nth-of-type(2)').type(data.customerList);
//         cy.get('button[class="btn-biz-primary"][data-click="createList"]').click()
//         cy.wait(1000)
//         cy.get('button[class="btn btn-primary bootbox-accept"]').click()
//     })
//     //chon danh sach chua khach hang, chon 2 muc dau tien
//     cy.get('[class="parent-input mb-3"] .input[data-click="listContact"]').click()
//     cy.wait(1000)
//     cy.get('#contact_list_drop li:first-of-type').click()
//     cy.get('#contact_list_drop li:nth-of-type(2)').click()
//     cy.get('#oneSelectList button[data-click="selectList"]').click()

//     //tao danh sach nguon chua khach hang
//     cy.get('div[class="parent-input mb-3"] ~ div[class="parent-input mb-3"]').click()
//     cy.wait(1000)
//     cy.get('[class="absolute dropdown-show btn-shadow btn-border dropdown-list"] button').click()
//     cy.wait(1000)
//     cy.fixture('data_1_user').then((data)=> {
//         cy.get('#frm-create-source input:nth-of-type(3)').type(data.customerSource)
//         cy.get('button[class="btn-biz-primary"][data-click="createSource"]').click()
//         cy.wait(1000)
//         cy.get('button[class="btn btn-primary bootbox-accept"]').click()
//     })
//     cy.wait(1000)
//     //chon danh sach nguon chua
//     cy.get('div[class="parent-input mb-3"] ~ div[class="parent-input mb-3"]').click()
//     cy.wait(1000)
//     cy.get('div[class="absolute dropdown-show btn-shadow btn-border dropdown-list"] li[data-click="addDataSource"]:nth-of-type(1)').click()

//     //dien email, ten, sdt
//     cy.fixture('data_1_user').then((data)=> {
//         cy.get('input[name="emails"]').type(data.email)
//         cy.get('[data-key="name"] input').type(data.name)
//         cy.get('[data-key="phones"] input').type(data.phone)
//     })
//     //an submit
//     cy.get('#btn-import-form').click()
//     //xac nhan them khach hang
//     cy.get('#btn-accept-imported').click()
//     //an vao khach hang
//     cy.get('a[data-original-title="Khách hàng"]').click()
//     cy.wait(2000)
//     //tu trang khach hang, chon vao ban ghi vua tao
//     cy.get('.contact-line:first-child td:first-child').click()
//     cy.wait(1000)
//     //an vaof xuat file tu trang khach hang
//     cy.get('button[data-click="openExport"]').click()
//     cy.wait(1000)
//     //an vao xuat file tu cua so xuat file
//     cy.get('button[data-click="getExportData"]').click()




// })