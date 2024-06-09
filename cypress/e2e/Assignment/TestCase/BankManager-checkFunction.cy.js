import { LoginPage } from "../Pages/loginpage"
import { ManagerPage } from "../Pages/managerPage";

const loginPage = new LoginPage;
const managerPage = new ManagerPage;

describe('create new bank account',()=> {
    beforeEach(()=> {
        cy.visit(loginPage.getLoginUrl)
    })
    it('Step 1: Add customer',()=> {
        cy.get(loginPage.getBankManagerLoginBtn).click()
        //click on Add customer btn
        cy.get(managerPage.getAddCustomerBtn).click()
        //insert data to first name, last name and customers
        cy.get(managerPage.getFirstNameTxtField)
            .type('Hieu')
            .should('have.value','Hieu')
        cy.get(managerPage.getLastNameTxtField)
            .type('Bui')
            .should('have.value','Bui')
        cy.get(managerPage.getPostCodeTxtField)
            .type('10000')
            .should('have.value',10000)
        //Click on Add customer button
        cy.get(managerPage.getSubmitBtn)
            .click()
        cy.on('window:alert',(text)=> {
            expect(['Customer added successfully with customer id :6','Account created successfully with account Number :1016']).be.include(text)
        })
        //Click on open account button
        //select the created account in the bottom of the dropdown list
        cy.get(managerPage.getOpenAccountBtn).click()
        cy.get(managerPage.getCustomerDropdown).then(($list)=>{
            const lastOption = $list.find('option').last().val()
            cy.get(managerPage.getCustomerDropdown).select(lastOption)
        })
        //select currency type which is Pound
        cy.get(managerPage.getCurrencyDropdown).select('Pound')
        //click on process button
        cy.get(managerPage.getProcessBtn).click()
        //click on Customers button, search for created account then click delete
        cy.get(managerPage.getCustomerBtn).click()
        cy.get(managerPage.getSearchBar).type('Hieu').should('have.value','Hieu')
        cy.get(managerPage.getTableBody)
            .should('have.length',1)
            .then(($el)=> {
                cy.get($el.find('button')).click()
            })
    })
})  