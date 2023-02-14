/// <reference types="Cypress" />

describe('one',function(){
    
    it('login by jwt session token using cypress',function(){

        cy.visit('https://rahulshettyacademy.com/client',{
            
            onBeforeLoad:function(window){
                window.localStorage.setItem('token',Cypress.env('token'))
            }

        })

        cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login" , {userEmail: "saket2193@gmail.com", userPassword: "Saket@2193"}).then(function(response){

        expect(response.status).to.be.eq(200)
        Cypress.env('token',response.body.token)

        })
       


        
        })
        
  
        
        })
        
    