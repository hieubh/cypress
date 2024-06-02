describe('check food', () => {
    it('check hot pizza', () => {
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm');
        cy.get('#Pizza h1').each(($h1) => {
            let elementText = $h1.text();
            if (elementText.includes('Hot')) {
                cy.log(elementText);
                cy.log(typeof ($h1))
            }
        })
        cy.get('#Pizza h1').each(($h1) => {
            if ($h1.text().includes('Hot')) {
                const elementText = $h1.next('p').text();
                cy.log(elementText)
            }
        })
    })

    it('check popular salad', () => {
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm');
        cy.xpath('//div[text()="Salads"]').click();
        cy.get('#Pasta h1').each(($h1) => {
            const saladText = $h1.text();
            if (saladText.includes('Popular')) {
                const popularSaladRecipe = $h1.next('p').text();
                cy.log(popularSaladRecipe);
            }
        })
    })

    it('check seasonal starter', () => {
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm');
        cy.xpath('//div[text()="Starter"]').click();
        cy.get('#Starter h1').each(($h1) => {
            const starterText = $h1.text();
            if (starterText.includes('Seasonal')) {
                const seasonalStarterRecipe = $h1.next('p').text();
                cy.log(seasonalStarterRecipe);
            }
        })
    })

    it('validate webpage navigation bar', () => {
        //access the website
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm')
        //validate nav bar, make sure all element is clickable and have proper href attribute
        cy.get('#myNavbar').should('be.visible');
        cy.get('#myNavbar a').should('have.length', 4);
        cy.get('#myNavbar a').should('have.attr', 'href');
        //validate name of each element in navbar
        cy.get('#myNavbar a:first-child').then((el) => {
            let elText = el.text();
            expect(elText).be.equal('HOME')
        })
        cy.get('#myNavbar a:nth-child(2)').then((el) => {
            let elText = el.text();
            expect(elText).be.equal('MENU')
        })
        cy.get('#myNavbar a:nth-child(3)').then((el) => {
            let elText = el.text();
            expect(elText).be.equal('ABOUT')
        })
        cy.get('#myNavbar a:last-child').then((el) => {
            let elText = el.text();
            expect(elText).be.equal('CONTACT')
        })
    })

    it('validate home area', () => {
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm')
        //validate background
        cy.get('#home').should('be.visible')
            .and('have.css', 'background-image', 'url("https://www.w3schools.com/w3images/pizza.jpg")')
            .then(($el) => {
                let backgroundImgUrl = $el.css('background-image');
                const regexFormat = /^url\("(.+)"\)$/;
                let url = backgroundImgUrl.replace(regexFormat, '$1');
                cy.request(url).its('status').should('eq', 200)
            })

        //validate open hour text on the bottom left
        cy.get('#home div:first-child').should('be.visible')
            .then(() => {
                cy.get('#home div:first-child span').should('have.text', 'Open from 10am to 12pm')
                    .and('have.css', 'font-size', '24px')
                    .and('have.css', 'color', 'rgb(255, 255, 255)')
                    .and('have.css', 'background-color', 'rgb(0, 0, 0)')
            })
        //validate text in the center
        cy.get('#home div:last-child span:first-child').should('be.visible')
            .and('have.attr', 'style', 'font-size:100px')
            .and('have.css', 'text-align', 'center')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
        //validate button under text in the center
        cy.get('#home div:last-child p').should('be.visible')
            .then(() => {
                cy.get('#home div:last-child p a').should('have.text', 'Let me see the menu')
                    .and('have.attr', 'href', '#menu')
                    .and('have.css', 'color', 'rgb(255, 255, 255)')
                    .and('have.css', 'background-color', 'rgb(0, 0, 0)')
                    .click()
            })
    })

    it(('validate menu'), () => {
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm')
        cy.get('#home div:last-child p').click();
        cy.get('#menu').should('be.visible');
        //validate header
        cy.get('#menu>div:first-child>h1').should('be.visible')
            .and('have.text', 'THE MENU')
            .and('have.css', 'text-align', 'center')
            .and('have.css', 'font-size', '64px')
        //validate menu tabs
        cy.get('#menu div:nth-child(2)').should('be.visible')
        cy.get('#menu div:nth-child(2) div').should('have.length',3)
        cy.get('#menu div:nth-child(2) a:first-child div').then(($el)=> {
            expect($el.text()).be.equal('Pizza')
        });
        cy.get('#menu div:nth-child(2) a:nth-child(2) div').then(($el)=> {
            expect($el.text()).be.equal('Salads')
        });
        cy.get('#menu div:nth-child(2) a:last-child div').then(($el)=> {
            expect($el.text()).be.equal('Starter')
        });
        //validate info when at pizza tabs
        cy.get('#Pizza').should('be.visible')

    })


})


