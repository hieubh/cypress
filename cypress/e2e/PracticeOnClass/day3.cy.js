describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.xpath('//input[@id="user-name"]').type('standard_user').should('have.value','standard_user');
    cy.xpath('//input[@id="password"]').type('secret_sauce').should('have.value','secret_sauce');
    cy.xpath('//input[@id="login-button"]').click();

    cy.xpath('//div[text()="Swag Labs"]').should('be.visible')
  })
})