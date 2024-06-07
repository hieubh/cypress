describe('login', () => {
  it('fail', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user').should('have.value','standard_user');
    cy.get('#password').type('secret_sauc').should('have.value','secret_sauc');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service');
  })

  it('success', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user').should('have.value','standard_user');
    cy.get('#password').type('secret_sauce').should('have.value','secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('eq','https://www.saucedemo.com/inventory.html');
    cy.get('.header_label').should('contain','Swag Labs');
    cy.get('.inventory_item').should('have.length.at.least',1);
  })
})