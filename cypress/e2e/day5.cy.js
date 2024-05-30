describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://mingo.vn/#');
    cy.get('#dataTable').should('exist');
    cy.get('#dataTable').within(() => {
      cy.get('#sttColumn').contains('Index')
    })
  })

  it('search', () => {
    let searchTerm = 'Vy';
    cy.visit('https://mingo.vn/#');
    cy.get('#searchInput').should('be.visible');
    cy.get('#searchInput')
      .type(searchTerm);
    cy.get('#tableBody tr:visible').should('have.length', 1)
    cy.get('.click-btn:visible').click()

  })

  it('working with list', () => {
    cy.visit('https://mingo.vn/#');
    let number = 0;
    cy.get('ul.list-group li').each((li) => {
      const liText = li.text();
      if (liText === 'Banana') {
        expect(liText).to.equal('Banana');
        number++;
      }
    }).then(() => {
      expect(number).to.equal(1);
    });
  })

  it('multiplelist', () => {
    cy.visit('https://mingo.vn/#');
    cy.get('#navbarDropdownMenuLink').click();
    // cy.get('.dropdown-menu show');
    cy.get('.dropdown-submenu').contains('Web Design').click();
    //navbarDropdownMenuLink
  })

  it('working with tab', () => {
    cy.visit('https://mingo.vn/#');
    cy.get('.tablinks').contains('London').click();
    cy.get('#London').should('be.visible'); 
  })
})