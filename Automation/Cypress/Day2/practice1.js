// Buka link https://demoqa.com/automation-practice-form 
// 1. Input nama awal dan nama akhir.
// 2. Input email.
// 3. Check gender.
// 4. Input mobile number.
// 5. Check hobbies.
// 6. Isi current address.
// 7. Click button submit.

// Parameter kelolosan kode:
// 1. Tidak ada error pada automation test.


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
