/// <reference types="Cypress" />
const Neat=require('neat-csv')


describe('one',function(){
    
    it('parsing csv file using cypress',function(){

        cy.readFile('D:\pro_2\cypress\downloads\1.csv').then(function(text){

            const csv= Neat(text)
            console.log(csv)

        })


       

        })

       
       


        
        })
        
  
        
    
        
    