/// <reference types="Cypress" />

describe('suite1',function(){

    it('parent child get and find',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.search-button').click()
        cy.get('.products').find('.product').should('have.length',4)    //parent child chaining
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()    //eq is used to pass the index

        cy.get('.products').find('.product').each(($el, index, $list) => {
            
            const textweb= $el.find('h4.product-name').text()
            if(textweb.includes('Cashews')) {

                cy.wrap($e1).find('.button').click()
            }


        })

        


    })

})