class UpdateProductPage {
    login() {
      return cy.request({
        method: 'POST',
        url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: {
          email: 'user_teste@teste.com.br',
          loginPassword: 'Teste@123',
          loginUser: 'user_teste',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.statusMessage.success).to.be.true;
  
        return response.body.statusMessage.token;
      });
    }
  
    uploadUserImage(bearerToken, imageFile) {
      cy.fixture(imageFile, 'binary').then((fileContent) => {
        const blob = Cypress.Blob.binaryStringToBlob(fileContent, 'image/jpeg');
        const formData = new FormData();
        formData.append('file', blob, imageFile);
  
        return cy.request({
          method: 'POST',
          url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/309165468/upload?product_id=15',
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
          body: formData,
          encoding: 'binary',
        }).then((response) => {
          const decodedBody = new TextDecoder('utf-8').decode(response.body);
          const responseBody = JSON.parse(decodedBody);
  
          expect(response.status).to.eq(200);
          expect(responseBody).to.have.property('success', true);
          expect(responseBody).to.have.property('id', 15);
  
          return responseBody.imageId;
        });
      });
    }
  
    verifyImageUpdate(imageId) {
      cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/15',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('images').and.to.be.an('array');
  
        const images = response.body.images;
        const imageIdExists = images.some((img) => img.includes(imageId));
  
        expect(imageIdExists).to.be.true;
        console.log('The imageId was found in product details:', imageId);
      });
    }
  }
  
  export default new UpdateProductPage();
  