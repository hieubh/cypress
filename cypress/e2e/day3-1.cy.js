describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html')
    cy.get('[name="username"]').type('username').invoke("val",'username');
    cy.get('[name="password"]').type('password').should('have.value','password');
    cy.xpath('//textarea[@name="comments"]').clear().type('this is a test for this');
    cy.get('[name="filename"]').click().selectFile('/Users/hieu/Downloads/Photo-34.jpg');
    cy.get('[value="cb1"]').check();
    cy.get('[value="cb2"]').check();
    cy.get('[value="cb3"]').uncheck();
    cy.get('[name="multipleselect[]"]').select(['ms1','ms2','ms3']);
    cy.get('[name="dropdown"]').select(['dd4'])
    cy.get('[value="submit"]').click();
    
    //submit successfully. switch to new url
    cy.url().should('eq','https://testpages.herokuapp.com/styled/the_form_processor.php');
    //validate username
    cy.get('#_valueusername').should('contain','username');
    //validate password
    cy.get('#_valuepassword').should('have.text','password');
    //validate input comment
    cy.get('#_valuecomments').should('contain','this is a test for this');
    //check photo file name
    cy.get('#_filename').should('contain','Photo-34.jpg');
    cy.get('#_valuehiddenField').should('contain','Hidden Field Value');
    //check value of selected check box
    cy.get('#_valuecheckboxes0').should('contain','cb1');
    cy.get('#_valuecheckboxes1').should('contain','cb2');
    //check value of selected radio button
    cy.get('#_valueradioval').should('contain','rd2');
    //check values of multiple select
    cy.get('#_valuemultipleselect0').should('contain','ms1');
    cy.get('#_valuemultipleselect1').should('contain','ms2');
    cy.get('#_valuemultipleselect2').should('contain','ms3');
    //check value of selected dropdown
    cy.get('#_valuedropdown').should('contain','dd4');
    //check action click on button submit
    cy.get('#_valuesubmitbutton').should('contain','submit');
    //check availability of back to form button
    cy.get('#back_to_form').should('be.visible');
  })
})