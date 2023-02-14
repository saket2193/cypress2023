/// <reference types="Cypress" />

describe('suite1',function(){

    it('controls in cypress',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','https://www.rahulshettyacademy.com/')
        cy.go('back')                      //or cy.go(-1)
        cy.go('forward')                   //or cy.go(1)
       

    })
})