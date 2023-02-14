/// <reference types="Cypress" />

describe('suite1',function(){

    it('child window in cypress',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(e1){

            const url=e1.prop('href')
            cy.visit(url)


        })

       
    })
})