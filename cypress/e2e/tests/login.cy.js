import { LoginUI } from "../pages/loginUI";

describe('go to Swag Labs', () => {
    it('success', () => {
        //   cy.visit(loginUI.getUrl);
        //   cy.get(loginUI.getUsername).type('standard_user');
        //   cy.get(loginUI.getPassword).type('secret_sauc');
        //   cy.get(loginUI.getElmLoginBtn).click();
        cy.login();
    })
})