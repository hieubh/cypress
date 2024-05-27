import { HerokuSubmitPage } from "../pages/herokuSubmitPage";

const herokuSubmitPage = new HerokuSubmitPage;

describe('fill up info then click Submit', () => {
    it('submit success', () => {
        cy.visit(herokuSubmitPage.getUrl);
        cy.get(herokuSubmitPage.getUserName).type('username');
        cy.get(herokuSubmitPage.getPassword).type('password');
        cy.xpath(herokuSubmitPage.getCommentArea).clear().type('this is comment for this section');
        cy.get(herokuSubmitPage.getuploadFileBtn).click().selectFile(herokuSubmitPage.getFileLocation);
        //action at checkboxes
        cy.get(herokuSubmitPage.getCheckBox3).uncheck();
        cy.get(herokuSubmitPage.getCheckBox1).check();
        cy.get(herokuSubmitPage.getCheckBox2).check();
        //Radio items
        cy.get(herokuSubmitPage.getRadioItem1).check();
        //Multiple select
        cy.get(herokuSubmitPage.getMultipleSelect).select([herokuSubmitPage.getOption1, herokuSubmitPage.getOption2, herokuSubmitPage.getOption3]);
        //Select option 4
        cy.get(herokuSubmitPage.getDropdown).select(herokuSubmitPage.getItem4);
        //Click on submit button
        cy.get(herokuSubmitPage.getSubmitBtn).click();

    })
})