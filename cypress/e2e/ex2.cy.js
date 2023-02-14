/// <reference types="Cypress" />

describe('test suite 2',function(){

    it('greenkart',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('tomato')
        cy.get('.search-button').click()

    })

    it('assertion',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)    //cypress used visible method to handle invisible elements


    })

})