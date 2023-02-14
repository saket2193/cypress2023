// <reference types="Cypress" />

describe('suite1',function(){

    before(function(){


        cy.fixture('example').then(function(data){


            this.data=data
            
        })

    })

    it('Test 1',function(){

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')   
        cy.get('#username').type(this.data.user)
        cy.get('#password').type(this.data.password)
        cy.wait(2000)
        cy.get('label:nth-of-type(1) > .checkmark').click()
        cy.get('select.form-control').select('Teacher')
        cy.get('#terms').check().should('be.checked')
        cy.get('#signInBtn').click()



    })
})
