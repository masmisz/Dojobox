describe('Registrasi', function () {
    it('Registrasi', function () {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#signin2').click()
        cy.get('#sign-username').type('dojo-mas').should('have.value', 'dojo-mas')
        cy.get('#sign-password').type('dojo-mas').should('have.value', 'dojo-mas')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
})
