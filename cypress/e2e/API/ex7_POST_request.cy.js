describe('api',function(){

    it('POST',function(){
        cy.request('POST','https://reqres.in/api/users',{
            "name": "morpheus",
            "job": "leader"
        }).then(function(response){
            
        expect(response.status).to.be.eq(201)
        cy.log(response.body.name)
        cy.log(response.body.leader)
        })
    })
})