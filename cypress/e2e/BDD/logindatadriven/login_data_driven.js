<reference types="Cypress" />
import { Given,When,And,Then } from "@badeball/cypress-cucumber-preprocessor";


Given('i open login page',function(){

    cy.visit('https://the-internet.herokuapp.com/login')
})

When('i fill form',function(dataTable){

    cy.get('input#username').type(dataTable.rawTable[1][0])
    cy.get('input#password').type(dataTable.rawTable[1][1])
})


Then('i submit details and verify the error message for login',function(){
    cy.get('form#login > .radius').click()
    cy.get('div#flash').should('have.text','Your password is invalid!')

})