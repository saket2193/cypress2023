/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'


describe('my test suite',function(){

    it('test case',function(){


        Cypress.config('defaultCommandTimeout',9000)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="radio"]').check().should('have.length',3).should('be.checked') //radio button
        cy.get('input[type="checkbox"]').check().should('have.length',3).should('be.checked') //checkbox
        cy.get('#checkBoxOption1').check(['option1','option3']) //checkbox
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2') //static dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{            //dynamic dropdown

            
            if($el.text()=='India') {
                $el.click()
            }

            cy.get('#autocomplete').should('have.value','India')

        })

        cy.get('#opentab').invoke('removeAttr','target').click() //child tab
        cy.url().should('includes','https://www.rahulshettyacademy.com/')
        cy.go('back')
        cy.get('#opentab').then(function($valu){           //child window 
  
            const e2=$valu.prop('href')
            cy.visit(e2)
            
        }
        )
        cy.go('back')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{          //window alert
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')

        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str1)=>{     //confirm alert    

            expect(str1).to.be.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('.mouse-hover-content').invoke('show') //mouse hover
        cy.contains('Top').click()
        cy.url().should('include','top')

        cy.contains('Reload').click()
        cy.url().should('include','rahul')

        cy.frameLoaded('#courses-iframe')          // iframe
        cy.iframe().find('.top-left li').then(function(t){
            const frmtxt = t.text()
            //assertion to verify text
            expect(frmtxt).to.contains('contact@rahulshettyacademy.com');
            cy.log(frmtxt);

        })
        cy.get('h1').each(($el,index,$list)=>{   //1st way to get text

            const sole=$el.text()
            cy.log(sole)


        })
        cy.get('h1').then(function(p){         //2nd way to get text
        
            const mo=p.text()
            cy.log(mo)


        })

        

        


    })

})