import { HerokuResultPage } from "../pages/herokuResultPage";
import { HerokuSubmitPage } from "../pages/herokuSubmitPage";

const herokuResultPage = new HerokuResultPage;
const herokuSubmitPage = new HerokuSubmitPage;


describe('checking result after clicking Submit', () => {
    it('match with submit info', () => {
        cy.submitInfo();
        cy.url().should('eq', herokuResultPage.getReturnUrl);
        cy.get(herokuResultPage.getUserName).then(
            (el) => {
                cy.wrap(el.text()).as('submitUserName');
            }
        );
        cy.get("@submitUserName").then(
            (el) => {
                cy.get("@inputUserName").should('have.username', el)
            }
        );
    })
})
