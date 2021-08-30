describe('Login Demoblaze', function () {
    it('Login with valid user', function () {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('dojo-mas').should('have.value', 'dojo-mas')
        cy.get('#loginpassword').type('dojo-mas').should('have.value', 'dojo-mas')
        cy.get('button').contains('Log in').click()
    })

    it('Beli HTC One M9', function () {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        // cy.get('.active > .nav-link').click()
        cy.go('back')
        cy.go('back')
        cy.wait(5000)
    })

    it('Beli Dell i7 8gb', function () {
        cy.get('#next2').click()
        cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.go('back')
        cy.go('back')
        // cy.get('.active > .nav-link').click()  
        cy.wait(5000)
    })

    it('Beli Apple Monitor 24', function () {
        cy.get('#next2').click()
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        // cy.get('.active > .nav-link').click()  
        cy.wait(5000)
    })


    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('dojo-mas').should('have.value', 'dojo-mas')
    cy.get('#city').type('Jakarta').should('have.value', 'Jakarta')
    cy.get('#card').type('123456789012345').should('have.value', '123456789012345')
    cy.get('#month').type('March').should('have.value', 'March')
    cy.get('#year').type('2026').should('have.value', '2026')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})
