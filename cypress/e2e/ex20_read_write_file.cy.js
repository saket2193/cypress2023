
describe('files',function(){

    
        it('file upload',function(){
            cy.visit('https://the-internet.herokuapp.com/upload')
            cy.get('#file-upload').selectFile('cypress/fixtures/images/evening.png')
            cy.get('#file-submit').click()
            cy.get('#uploaded-files').contains('evening.png')
    })

    it('file download',function(){

        cy.downloadFile('http://autopract.com/selenium/image.jpeg?','cypress/downloads','file.jpg') 


    })
    })