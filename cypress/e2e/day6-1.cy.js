describe('saucedemo', () => {
  beforeEach(()=> {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })
  it('select item', () => {
    //add 2 first item into shopping cart then check card badge
    cy.get('.inventory_item:first-child .pricebar button').click()
    cy.get('.inventory_item:nth-child(2) .pricebar button').click()
    cy.get('.shopping_cart_badge').should('have.text',2)
    //get name and description from 2 add-to-cart item
    //for first item
    cy.get('.inventory_item:first-child .inventory_item_name').then(($el)=> {
      cy.wrap($el.text()).as('firstItemName');
    })
    cy.get('.inventory_item:first-child .inventory_item_desc').then(($el)=> {
      cy.wrap($el.text()).as('firstItemDesc');
    })
    cy.get('.inventory_item:first-child .inventory_item_price').then(($el)=> {
      cy.wrap($el.text()).as('firstItemPrice');
    })
    //for second item
    cy.get('.inventory_item:nth-child(2) .inventory_item_name').then(($el)=>{
      cy.wrap($el.text()).as('secondItemName');
    })
    cy.get('.inventory_item:nth-child(2) .inventory_item_desc').then(($el)=>{
      cy.wrap($el.text()).as('secondItemDesc');
    })
    cy.get('.inventory_item:nth-child(2) .inventory_item_price').then(($el)=>{
      cy.wrap($el.text()).as('secondItemPrice');
    })
    //click on shopping cart logo
    cy.get('.shopping_cart_link').click();
    //new web page is loaded
    cy.url().should('eq','https://www.saucedemo.com/cart.html');
    //compare item name and desc from cart page and previous item page
    //for first item
    cy.get('.cart_item:nth-child(3) .inventory_item_name').then(($addedFirstItemName)=> {
      cy.get('@firstItemName').then(($firstItemName)=> {
        expect($addedFirstItemName.text()).be.equal($firstItemName);
      });
    });
    cy.get('.cart_item:nth-child(3) .inventory_item_desc').then(($addedFirstItemDesc)=> {
      cy.get('@firstItemDesc').then(($firstItemDesc)=> {
        expect($addedFirstItemDesc.text()).be.equal($firstItemDesc);
      });
    });
    cy.get('.cart_item:nth-child(3) .inventory_item_price').then(($addedFirstItemPrice)=> {
      cy.get('@firstItemPrice').then(($firstItemPrice)=> {
        expect($addedFirstItemPrice.text()).be.equal($firstItemPrice);
      });
    });
    //for second item
    cy.get('.cart_item:last-child .inventory_item_name').then(($addedSecondItemName)=> {
      cy.get('@secondItemName').then(($secondItemName)=> {
        expect($addedSecondItemName.text()).be.equal($secondItemName);
      });
    });
    cy.get('.cart_item:last-child .inventory_item_desc').then(($addedSecondItemDesc)=> {
      cy.get('@secondItemDesc').then(($secondItemDesc)=> {
        expect($addedSecondItemDesc.text()).be.equal($secondItemDesc);
      });
    });
    cy.get('.cart_item:last-child .inventory_item_price').then(($addedSecondItemPrice)=> {
      cy.get('@secondItemPrice').then(($secondItemPrice)=> {
        expect($addedSecondItemPrice.text()).be.equal($secondItemPrice);
      });
    });
  });
});