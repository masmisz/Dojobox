// Tugas 5 (Cypress): Belajar Cypress
describe('automation-practice-form ', function () {
    it('automation-practice-form ', function () {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Mas')
        cy.get('#lastName').type('Misz')
        cy.get('#userEmail').type('m@mail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('0822118872')
        // cy.get('.subjects-auto-complete__value-container').type('Tets Complete')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#uploadPicture').attachFile('gmail.jpg')
        cy.get('#currentAddress').type('VDT Tangsel')
        cy.contains('Select State').click()

        // cy.get('select').select('user-1')
        cy.get('#submit').click()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
