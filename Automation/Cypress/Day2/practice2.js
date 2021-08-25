describe('Tugas 2 (Cypress)', function () {
    it('email me', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/ ')
        cy.get('#et_pb_contact_name_0').type('miswanto')
        cy.get('#et_pb_contact_email_0').type('m@m.com')
        cy.get('.et_pb_contact_submit').click()
    })

    it('radio button', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/ ')
        cy.get('[value = "male"]').check().should('be.checked')
    })

    it('checkboxes', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/ ')
        // cy.get('input[type = "checkbox"]').check().should('be.checked').and('have.value', 'Bike')
        // cy.get('input[type = "checkbox"]').uncheck().should('not.be.checked').and('have.value', 'Bike')
        cy.get('input[type = "checkbox"]').check('Bike')
        cy.get('input[type = "checkbox"]').check('Car')
    })

    it('dropdown', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/ ')
        cy.get('select').select('audi').should('have.value', 'audi')
    })

    it('click me', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/ ')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})
