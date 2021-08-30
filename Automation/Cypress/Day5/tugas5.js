describe('Belanja Demoblaze', function () {
    it('Login with valid user', function () {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername', {timeout: 5000}).type('dojo-mas',{force:true})
        cy.get('#loginpassword', {timeout: 5000}).type('dojo-mas')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('be.visible');

        cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#nava').click()
        cy.wait(3000)

        cy.get('#next2').click()
        cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.go('back')
        cy.go('back')
        cy.wait(3000)

        cy.get('#next2').click()
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()

        cy.get('#cartur').click()
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('dojo-mas',{force:true}).should('have.value', 'dojo-mas')
        cy.get('#city').type('Jakarta').should('have.value', 'Jakarta')
        cy.get('#card').type('123456789012345').should('have.value', '123456789012345')
        cy.get('#month').type('March').should('have.value', 'March')
        cy.get('#year').type('2026').should('have.value', '2026')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})
