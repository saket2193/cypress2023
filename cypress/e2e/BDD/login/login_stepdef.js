
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";


Given('i open login page',function(){

    cy.visit('https://the-internet.herokuapp.com/login')
})

When('i enter username',function(){

    cy.get('input#username').type('tomsmith')
})

And('password',function(){

    cy.get('input#password').type('supersecretpassword')
})
Then('i submit details and verify the error message for login',function(){
    cy.get('form#login > .radius').click()
    cy.get('div#flash').should('have.text','Your password is invalid!')

})