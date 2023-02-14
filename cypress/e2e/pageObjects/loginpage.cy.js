class loginpage{

enteruser(){

    return cy.get('#username')
}
enterpass(){

    return cy.get('#password')
}
submit(){

    return cy.get('.radius')
}
}
export default loginpage