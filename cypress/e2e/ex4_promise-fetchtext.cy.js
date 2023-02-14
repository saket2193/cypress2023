/// <reference types="Cypress" />

describe('suite1',function(){


    it('parent child get and find',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.products > :nth-child(1) > .product-name').then(function(element){

            cy.log(element.text())
        


        })
        console.log('saket')
        cy.log('saket1')

    })

})