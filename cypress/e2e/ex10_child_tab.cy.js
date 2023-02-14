/// <reference types="Cypress" />

describe('suite1',function(){

    it('child tab in cypress',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
       

    })
})