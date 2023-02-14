class Homepage{
    
    enterusername()
    {
        return  cy.get('#username')
    }

    enterpassword()
    {
        return cy.get('#password')
    }
    
    selectradiobutton()
    {
        return cy.get('label:nth-of-type(1) > .checkmark')
    }

    enterrole()
    {
        return cy.get('select.form-control')
    }

    terms()
    {
        return cy.get('#terms')
    }

    submit()
    {
        return  cy.get('#signInBtn')
    }


}


export default Homepage;