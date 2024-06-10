describe('work with modal, iframe', () => {
    // it('modal',()=> {
    //     cy.visit('https://mingo.vn/')
    //     cy.get('#myBtn').click()
    //     cy.get('.modal-content').should('be.visible')
    //     cy.get('.modal-content > *').then(($list)=>{
    //         cy.get($list[0]).should('have.prop','tagName','SPAN')
    //         cy.get($list[1]).should('have.prop','tagName','P')
    //             .and('have.text','Some text in the Modal..')
    //         cy.get($list[2]).should('have.prop','tagName','BUTTON')
    //             .and('have.text','Click me')
    //             cy.get($list[0]).click()
    //     })
    // })

    // it('iframe-first-approach',()=> {
    //     cy.visit('https://my.bizdev.vn/embed/login?type_view=&is_login=0')
    //     cy.get('[type="text"]').type('techtest.rd2@gmail.com')
    //     cy.get('.btn').click()
    //     cy.get('input[type="password"]').type('A123456!')
    //     cy.get('.btn').click()
    // })

    // it('iframe-second-approach',()=> {
    //     let username = 'techfest.rd2@gmail.com';
    //     let password = 'A123456!';

    //     cy.visit('https://my.bizdev.vn/login')

    //     cy.get('#embed_login').then(($iframe)=> {
    //         const iframeDoc = $iframe.contents().find('body')
    //         cy.wrap(iframeDoc)
    //             .xpath('//input[@type="text"]')
    //             .type(username)

    //         cy.wrap(iframeDoc)
    //             .xpath('//div[@id="loginForm"]//button')
    //             .click()

    //         cy.wrap(iframeDoc)
    //             .xpath('//input[@type="text"]')
    //             .type(password)

    //         cy.wrap(iframeDoc)
    //             .xpath('//div[@id="loginForm"]//button')
    //             .click()

    //     })
    // })

    // it('pop-up', () => {
    //     cy.visit('https://mingo.vn/')
    //     //gia lap hanh vi mo cua so pop up trong cung 1 tab
    //     cy.window().then((win) => {
    //         cy.stub(win, 'open').callsFake((url, target, features) => {
    //             win.location.href = url;
    //         })
    //     })

    //     cy.get('#popupLink').click()
    //     cy.url().should('contain','mingo.vn')
    //     cy.get('#myBtn').should('be.visible')
    // })

    it('try to open link in new tab',()=> {
        cy.visit('https://docnhanh.vn/')
        cy.get('.news_top_ct[style="display: block;"] .news_lst li:nth-child(2) a')
            .then(($element)=> {
                const url = $element.prop('href')

                cy.log(url);

                cy.window().then((win)=> {
                    const newTab = win.open();
                    cy.log(typeof(newTab))
                    
                    // newWindow.opener = null;
                    newTab.location = url;
                })
            }) 
        cy.puppeteer('switchToTabAndGetContent')
        .should('equal','')
    })
})