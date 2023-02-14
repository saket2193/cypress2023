/// <reference types="Cypress" />

describe('suite1',function(){

    before(function(){

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
    })

    beforeEach(function(){

        cy.log('before each hook')

    })

    after(function(){

        cy.log('after hooks')
    })

    afterEach(function(){

        cy.log('after each hook')
    })

    it('Test 1',function(){

        
        cy.get('#username').type('rahulshettyacademy')
        cy.get('#password').type('learning')
        cy.wait(2000)
        cy.get('label:nth-of-type(1) > .checkmark').click()
        cy.get('select.form-control').select('Teacher')
        cy.get('#terms').check().should('be.checked')
        cy.get('#signInBtn').click()



    })
})
