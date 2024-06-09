describe('work with modal, iframe',()=> {
    it('modal',()=> {
        cy.visit('https://mingo.vn/')
        cy.get('#myBtn').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-content > *').then(($list)=>{
            cy.get($list[0]).should('have.prop','tagName','SPAN')
            cy.get($list[1]).should('have.prop','tagName','P')
                .and('have.text','Some text in the Modal..')
            cy.get($list[2]).should('have.prop','tagName','BUTTON')
                .and('have.text','Click me')
                cy.get($list[0]).click()
        })
    })

    it('iframe',()=> {
        cy.visit('https://my.bizdev.vn/embed/login?type_view=&is_login=0')
        cy.get('[type="text"]').type('techtest.rd2@gmail.com')
        cy.get('.btn').click()
        cy.get('input[type="password"]').type('A123456!')
        cy.get('.btn').click()
    })
})