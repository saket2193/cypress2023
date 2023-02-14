/// <reference types="Cypress" />

import loginpage from "./pageObjects/loginpage.cy"

describe('suite1',function(){

    it('pom',function(){

        const login=new loginpage()
        cy.visit('https://the-internet.herokuapp.com/login')
        
        login.enteruser().type('tomsmith')
        login.enterpass().type('secetpasssdw')
        login.submit().click(
        
        )
    })
})