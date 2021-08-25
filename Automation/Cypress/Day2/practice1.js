describe('kumpulan test case', function () {
    it('tc-1', function () {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Mas')
        cy.get('#lastName').type('Misz')
        cy.get('#userEmail').type('m@mail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('0822118872')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#currentAddress').type('VDT Tangsel')
        cy.get('#submit').click()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
