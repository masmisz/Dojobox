describe('Belanja di Demoblaze', function () {
    it('Belanja Gadget', function () {
        // Login
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername', {timeout: 5000}).type('dojo-mas',{force:true})
        cy.get('#loginpassword', {timeout: 5000}).type('dojo-mas')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('be.visible');

        // Beli HTC One M9
        cy.contains('HTC One M9').click()
        cy.get('.col-sm-12 > .btn').should('be.visible').click()
        // cy.get('.active > .nav-link').click()
        cy.get('.active > .nav-link').should('be.visible').click()

        // Dell i7 8gb
        cy.contains('Laptops').click()
        cy.contains('Dell i7 8gb').click()
        cy.get('.col-sm-12 > .btn').should('be.visible').click()
        cy.get('.active > .nav-link').should('be.visible').click()

        // Apple monitor 24
        cy.contains('Monitors').click()
        cy.contains('Apple monitor 24').click()
        cy.get('.col-sm-12 > .btn').should('be.visible').click()

        // Pembayaran
        cy.get('#cartur').should('be.visible').click()
        cy.wait(3000)
        cy.get('.col-lg-1 > .btn').should('be.visible').click()
        cy.get('#name').type('dojo-mas',{force:true}).should('have.value', 'dojo-mas')
        cy.get('#country').type('Wakanda').should('have.value', 'Wakanda')        
        cy.get('#city').type('Paris').should('have.value', 'Paris')
        cy.get('#card').type('123456789012345').should('have.value', '123456789012345')
        cy.get('#month').type('March').should('have.value', 'March')
        cy.get('#year').type('2026').should('have.value', '2026')
        cy.wait(2000)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible').click()
        cy.wait(2000)
        cy.get('.confirm').click()
        cy.wait(3000)
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
