import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let bearerToken;
let imageId;

Given('I want to login with valid credentials', () => {
  cy.request({
    method: 'POST',
    url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
    headers: {
      'accept': '*/*',
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

    bearerToken = response.body.statusMessage.token;
  });
});

Then('I should receive a token', () => {
  expect(bearerToken).to.exist;
});

When('I update the image', () => {
  const bearerToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjozMDkxNjU0NjgsInN1YiI6InVzZXJfdGVzdGUiLCJyb2xlIjoiVVNFUiJ9.ECU1Z9kkWenblwFu7cylps2WfICjpygTyCC3pokeiK4";
  const imageFile = 'image_product.jpg';

  cy.fixture(imageFile, 'binary').then((fileContent) => {
    const blob = Cypress.Blob.binaryStringToBlob(fileContent, 'image/jpeg');

    const formData = new FormData();
    formData.append('file', blob, imageFile);

    cy.request({
      method: 'POST',
      url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/309165468/upload?product_id=15',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
      },
      body: formData,
      encoding: 'binary',
    }).then((response) => {
      const decodedBody = new TextDecoder('utf-8').decode(response.body);
      const responseBody = JSON.parse(decodedBody);

      expect(response.status).to.eq(200);
      expect(responseBody).to.have.property('success', true);
      expect(responseBody).to.have.property('id', 15);

      console.log(responseBody);
      imageId = responseBody.imageId;
      console.log('Image ID:', imageId);
    });
  });
});

Then('the image should be updated successfully', () => {
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
});
