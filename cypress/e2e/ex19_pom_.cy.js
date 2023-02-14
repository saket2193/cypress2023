/// <reference types="Cypress"/>

import Homepage from "./pageObjects/Homepage.cy";
import Productshop from "./pageObjects/Productpage.cy";


describe('suite1',function(){

    before(function(){

        //cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
       
        })

    })

    it('Test 1',function(){

        const homepage=new Homepage()
        const shop=new Productshop()

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')   
        homepage.enterusername().type('rahulshettyacademy')
        homepage.enterpassword().type('learning')
        cy.wait(2000)
        homepage.selectradiobutton().click()
        homepage.enterrole().select('Teacher')
        homepage.terms().check().should('be.checked')
        homepage.submit().click()

        shop.addiphone().click()
        shop.addnokia().click()
        shop.checkoutclick().click()
        shop.checkoutpage().click()
        shop.deliverylocation().type('delhi')
        shop.checkbox().click({force:true})
        shop.purchase().click()

    
    })

