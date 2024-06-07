describe(('working with mouse'), () => {
    beforeEach(() => {
        cy.visit('https://mingo.vn/')
    })
    // it('change color on hover', () => {
    //     cy.get('#hover-box')
    //         .trigger('mouseover')
    //         .wait(5000)
    //         .should('have.class', 'hovered')
    //         .trigger('mouseout')
    //         .should('not.have.class', 'hovered')
    // })

    // it('should display tooltip on hover', () => {
    //     cy.get('.tooltip').realHover().wait(5000)
    //     cy.get('#tooltip-text').should('have.text', 'Tooltip text')
    // })

    // it('drag and drop', () => {
    //     cy.visit('https://demoqa.com/droppable')
    //     cy.get('#draggable').as('source')
    //     cy.get('#simpleDropContainer #droppable').as('target')

    //     cy.get('@source').trigger('mousedown', { which: 1 })
    //     cy.get('@target').trigger('mouseover').trigger('mouseup', { force: true })

    // })

    // it('drag and drop by using outside package', () => {
    //     cy.get('#draggable').drag('#droppable')
    //     cy.get('#droppable').should('have.class','dropped')
    // })

    it('scroll to bottom',()=> {
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.scrollTo('top')
        cy.wait(2000)
        cy.get('h2 ~ .tooltip').scrollIntoView()
    })

    it('working with slider',()=> {
        cy.get('#slider')
        .invoke('val',0)
        .trigger('input')
        .should('have.value',0)
    })

})