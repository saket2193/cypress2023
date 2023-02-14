/// <reference types="Cypress" />

describe('suite1',function(){

    it('static dropdown',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //using value
        cy.get('select').select('option3').should('have.value','option3')
        //using text
        cy.get('select').select('Option2')
    })
})