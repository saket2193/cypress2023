// <reference types="Cypress" />

describe("cypress", () => {
    it("Scroll ", () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('li:nth-of-type(44) > a').scrollIntoView() //scroll an element into view

   
    });
    it('drag drop',function(){
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.get('#column-a').trigger('mousedown',{which:1})
        cy.get('#column-b').trigger('mousemove').trigger('mouseup',{force:true})


    })

})