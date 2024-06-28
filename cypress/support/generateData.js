import {faker} from '@faker-js/faker'
const xlsx = require('xlsx')

Cypress.Commands.add('generate1User', ()=> {
    const userInfo = {
        customerList: faker.location.country(),
        customerSource: faker.lorem.word(5),
        email: faker.internet.email(),
        name: faker.person.fullName(),
        phone: "097" + faker.number.int({min:1000000, max:9999999})
    }
    cy.writeFile('cypress/fixtures/data_1_user.json',userInfo);
})

Cypress.Commands.add('generate5User', () => {
    const users = []
    for(let i=0; i < 5; i++){
        const userInfo = {
            ["Tên"]: faker.person.fullName(),
            email: faker.internet.email(),
            ["Ngày tạo"]: faker.date.past()
        };
        users.push(userInfo);
    }
    cy.writeFile('cypress/fixtures/data_5_users.json',users);
})

Cypress.Commands.add('convertToXLSX', ()=> {
    cy.fixture('data_5_users').then((data) => {
        const workbook = xlsx.utils.book_new()
        const worksheet = xlsx.utils.json_to_sheet(data)
        xlsx.utils.book_append_sheet(workbook,worksheet,'Sheet 1')
        xlsx.writeFile(workbook,'data_5_users.xlsx')
    })

})
