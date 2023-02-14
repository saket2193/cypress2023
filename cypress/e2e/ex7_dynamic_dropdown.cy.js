/// <reference types="Cypress" />

describe('suite1',function(){

    it('dynamic dropdown',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')


        //In below cy.get,we need to find a single locator which is able to find all the dropdown values
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            
            if($el.text()=='India'){

                $el.click()

            }
            cy.get('#autocomplete').should('have.value','India')

        })
       
    })
})