import {faker} from '@faker-js/faker'

Cypress.Commands.add('generateData', ()=> {
    const userInfo = {
        customerList: faker.location.country(),
        customerSource: faker.lorem.word(5),
        email: faker.internet.email(),
        name: faker.person.fullName(),
        phone: "097" + faker.number.int({min:1000000, max:9999999})
    }
    cy.writeFile('cypress/fixtures/data.json',userInfo);
})