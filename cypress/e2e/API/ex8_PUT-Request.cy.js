describe('api',function(){

    it('PUT',function(){
        cy.request('PUT','https://reqres.in/api/users/2',{
            "name": "morpheus",
            "job": "zion resident"
        }).then(function(response){
            
        expect(response.status).to.be.eq(200)
        cy.log(response.body.email)
        })
    })
})