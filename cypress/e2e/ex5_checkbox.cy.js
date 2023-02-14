/// <reference types="Cypress" />

describe('suite1',function(){

    it('checkbox',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('#checkBoxOption1').click()   //we can click on the checkbox to check it

        cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1') //check() method is used for checkbox 
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //selecting multiple checkbox at a time
        cy.get('input[type="checkbox"]').check()  
        cy.get('input[type="checkbox"]').uncheck()
         //second way for selecting multiple checkbox at a time by passing value of checkbox
         cy.get('input[type="checkbox"]').check(['option1','option3'])


    })
})