/// <reference types="Cypress" />

describe('suite1',function(){

    it('hover in cypress',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

        cy.contains('Reload').click()
        cy.url().should('include','Practice')
        
    })
})