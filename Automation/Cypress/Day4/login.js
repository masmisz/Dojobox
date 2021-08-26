describe('Login', function () {
    it('Login', function () {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').type('dojo-mas').should('have.value', 'dojo-mas')
        cy.get('#loginpassword').type('dojo-mas').should('have.value', 'dojo-mas')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('be.visible');
    })
})
