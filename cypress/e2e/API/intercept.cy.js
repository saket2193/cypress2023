/// <reference types="Cypress" />

describe('one',function(){
    
    it('intercept method cypress',function(){

        cy.visit('https://dummy.restapiexample.com/')
        cy.get('tr:nth-of-type(1) > td:nth-of-type(4) > .link-red').click()
        cy.intercept({method:'get',url:'https://dummy.restapiexample.com/api/v1/employees'},
        {statusCode:200,
        body:[{"id":1,"employee_name":"Tiger Nixon","employee_salary":320800,"employee_age":61,"profile_image":""}]}).as('employereceived')
        cy.log('response.body')
        cy.log('response.body.length')
        cy.log('response.statusCode')
        cy.log('response.url')
        
        
        
        cy.wait('@employereceived').should(({request,response}) =>{

            v=response.body.length
            cy.log(v)
        })
    })
})