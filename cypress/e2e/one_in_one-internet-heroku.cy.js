/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe('suite',function(){

    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })

    })

    it('all cases',function(){

        

        cy.visit(Cypress.env('url'))
        //fetching all the text by iteration

        cy.get('a').then(function(po){

            const m=po.text()
            cy.log(m)
        })

        cy.get('a').each(($el,index,$list)=>{

        const n=$el.text()
        cy.log(n)
        })
        cy.get(':nth-child(6) > a').click()
        cy.get('input[type="checkbox"]').check()    //checkbox
        cy.go('back')

        cy.get(':nth-child(11) > a').click()
        cy.get('select').select('Option 1').should('have.value',1) //static dropdown
        cy.go(-1)
        cy.get(':nth-child(25) > a').click()
        cy.get('.figcaption').invoke('show')  //mouse hover
        cy.go(-1)

        cy.get(':nth-child(29) > a').click()
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert',(str)=>{

            expect(str).to.be.equal('I am a JS Alert')

        })
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.be.equal('I am a JS Confirm')
        })
       
         cy.go(-1)
         cy.get(':nth-child(21) > a').click()
         cy.get('#username').type(this.data.username)
         cy.get('#password').type(this.data.pass)
         cy.get('.radius').click()
         cy.go('back')

         cy.loginpage('tomsmith','SuperSecretPassword')
         cy.visit('https://the-internet.herokuapp.com/')






    })
})