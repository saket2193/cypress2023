class Productshop{

    addiphone()
    {
        return cy.get(':nth-child(1) > .card > .card-footer > .btn')
    }

    addnokia()
    {
        return cy.get(':nth-child(3) > .card > .card-footer > .btn')
    }
    checkoutclick(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    checkoutpage()
    {
        return cy.get('.btn.btn-success')
    }
    deliverylocation()
    {
        return cy.get('input#country')
    }
    checkbox()
    {
        return cy.get('input#checkbox2')}
    purchase()
    {
        return cy.get('.btn.btn-lg.btn-success')
    }
}

export default Productshop;