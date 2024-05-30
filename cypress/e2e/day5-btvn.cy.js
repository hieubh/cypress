    it('check hot pizza', () => {
      cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm');
      cy.get('#Pizza h1').each(($h1) => {
        let elementText = $h1.text();
        if(elementText.includes('Hot')) {
            cy.log(elementText);
            cy.log(typeof($h1))
        }
      })
      cy.get('#Pizza h1').each(($h1)=> {
        if($h1.text().includes('Hot')){
            const elementText = $h1.next('p').text();
            cy.log(elementText)
        }
      })
    })