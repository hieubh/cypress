import { HerokuResultPage } from "../pages/herokuResultPage";
import { HerokuSubmitPage } from "../pages/herokuSubmitPage";

const herokuResultPage = new HerokuResultPage;
const herokuSubmitPage = new HerokuSubmitPage;


describe('checking result after clicking Submit', () => {
    it('match with submit info', () => {
        cy.submitInfo();
        cy.url().should('eq', herokuResultPage.getReturnUrl);
        //check input username vs submitted username
        cy.get(herokuResultPage.getUserName).then(
            (el) => {
                cy.wrap(el.text()).as('submitUserName');
            }
        );
        cy.get("@submitUserName").then(
            (submitUserName) => {
                cy.get("@inputUserName").then(
                    (inputUserName) => {
                        expect(submitUserName).to.eq(inputUserName);
                    }
                )
            }
        );
        //check input password vs submitted password
        cy.get(herokuResultPage.getPassword).then(
            (el) => {
                cy.wrap(el.text()).as('submitPassword');
            }
        );
        cy.get("@submitPassword").then(
            (submitPassword) => {
                cy.get("@inputPassword").then(
                    (inputPassword) => {
                        expect(submitPassword).to.eq(inputPassword);
                    }
                )
            }
        )
    })
})
