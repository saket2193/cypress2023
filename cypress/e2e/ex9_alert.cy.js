/// <reference types="Cypress" />

describe('suite1',function(){

    it('handling alerts in cypress',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //window:alert event is fired when an simple alert opens up
        cy.on('window:alert',(str) =>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge')


        })
        //window:confirm event is fired when a confirm alert comes
        cy.on('window:confirm',(str1)=>{

            expect(str1).to.equal('Hello , Are you sure you want to confirm?')
        }
        
        
        )


    })
})