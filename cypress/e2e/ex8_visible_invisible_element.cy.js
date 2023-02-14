/// <reference types="Cypress" />

describe('suite1',function(){

    it('visible invisible elements using assertions',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')  
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible') 
        
       
    })

    it('radio button',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.radioButton').check()
        cy.get('.radioButton').check(['radio1','radio3'])
      
            
})

})
