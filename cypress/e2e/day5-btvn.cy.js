describe('check food', () => {
    beforeEach(()=> {
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm');
    })
    it('check hot pizza', () => {
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
            cy.get('#menu div:nth-child(2) div').should('have.length', 3)
            cy.get('#menu div:nth-child(2) a:first-child div').then(($el) => {
                expect($el.text()).be.equal('Pizza')
            });
            cy.get('#menu div:nth-child(2) a:nth-child(2) div').then(($el) => {
                expect($el.text()).be.equal('Salads')
            });
            cy.get('#menu div:nth-child(2) a:last-child div').then(($el) => {
                expect($el.text()).be.equal('Starter')
            });
            //validate info when at pizza tabs
            cy.get('#menu div:nth-child(2) a:first-child div').should('have.css', 'background-color', 'rgb(244, 67, 54)')
            cy.get('#Pizza').should('be.visible');
            cy.get('#Pizza > *').then(($list) => {
                const listLength = $list.length;
                for (let n = 0; n < listLength; n += 3) {
                    if (n < listLength - 2) {
                        expect($list[n].tagName).be.equal('H1')
                        expect($list[n + 1].tagName).be.equal('P')
                        expect($list[n + 2].tagName).be.equal('HR')
                    } else {
                        expect($list[n].tagName).be.equal('H1')
                        expect($list[n + 1].tagName).be.equal('P')
                        expect($list[n + 2]).be.equal(undefined);
                    }
                }
            })
            //validate hot badge for pizza
            cy.get('#Pizza > h1').each(($h1)=> {
                const h1Text = $h1.text();
                if(h1Text.includes('Hot')){
                    cy.get($h1).within(()=> {
                        cy.get('span:nth-child(2)').should('have.css','background-color','rgb(244, 67, 54)')
                    })
                }  
            })
            //validate new badge for pizza
            cy.get('#Pizza > h1').each(($h1)=> {
                const h1Text = $h1.text();
                if(h1Text.includes('New')){
                    cy.get($h1).within(()=> {
                        cy.get('span:nth-child(2)').should('have.css','background-color','rgb(158, 158, 158)')
                    })
                }
            })
        //click to salads tab then check the element
        cy.get('#menu div:nth-child(2) a:nth-child(2) div')
            .click()
            .should('have.css', 'background-color', 'rgb(244, 67, 54)')
        //validate elements in Salads tab
        cy.get('#Pasta').should('be.visible')
        cy.get('#Pasta > *').then(($listPasta) => {
            const length = $listPasta.length;
            cy.log($listPasta[0].tagName)
            for (let i = 0; i < length; i+= 3) {
                if (i < length - 2) {
                    expect($listPasta[i].tagName).be.equal('H1')
                    expect($listPasta[i + 1].tagName).be.equal('P')
                    expect($listPasta[i + 2].tagName).be.equal('HR')
                } else {
                    expect($listPasta[i].tagName).be.equal('H1')
                    expect($listPasta[i + 1].tagName).be.equal('P')
                    expect($listPasta[i + 2]).be.equal(undefined)
                }
            }
        })
        //validate popular badge
        cy.get('#Pasta h1').each(($el)=> {
            const h1Text = $el.text();
            if(h1Text.includes('Popular')){
                cy.get($el).within(()=> {
                    cy.get('span:nth-child(2)').should('have.css','background-color','rgb(158, 158, 158)')
                })
            }
        })

        //click to starter tab then check the element
        cy.get('#menu div:nth-child(2) a:last-child div')
            .click()
            .should('have.css', 'background-color', 'rgb(244, 67, 54)')
        //validate elements in starter tab
        cy.get('#Starter').should('be.visible')
        cy.get('#Starter > *').then(($listElement)=> {
            const length = $listElement.length;
            for(let i = 0; i < length; i+=3){
                if(i < length-2) {
                    expect($listElement[i].tagName).be.equal('H1')
                    expect($listElement[i+1].tagName).be.equal('P')
                    expect($listElement[i+2].tagName).be.equal('HR')
                } else {
                    expect($listElement[i].tagName).be.equal('H1')
                    expect($listElement[i+1].tagName).be.equal('P')
                    expect($listElement[i+2]).be.equal(undefined)
                }
            }
        })
        //validate seasonal badge
        cy.get('#Starter h1').each(($element)=> {
            let h1Text = $element.text();
            if(h1Text.includes('Seasonal')){
                cy.get($element).within(()=>{
                    cy.get('span:nth-child(2)').should('have.css','background-color','rgb(158, 158, 158)')
                })
            }
        })
    })
})


