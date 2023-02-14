describe('api',function(){

    it('DELETE',function(){
        cy.request('DELETE','https://reqres.in/api/users/2').then(function(response){
            
        expect(response.status).to.be.eq(204)
        })
    })
})