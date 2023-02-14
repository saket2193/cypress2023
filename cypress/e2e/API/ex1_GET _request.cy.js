describe('api',function(){

    it('GET',function(){
        cy.request('GET','https://reqres.in/api/users?page=2').then(function(response){
            
        expect(response.status).to.be.eq(200)
        cy.log(response.body.page)
        })
        
    })
})