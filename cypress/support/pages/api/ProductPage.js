class ProductPage {
    checkAPIAvailability() {
      return cy.request('GET', 'https://www.advantageonlineshopping.com/catalog/api/v1/products')
        .its('status')
        .should('eq', 200);
    }
  
    fetchProductList() {
      return cy.request('GET', 'https://www.advantageonlineshopping.com/catalog/api/v1/products').as('productList');
    }
  
    validateProductList() {
      cy.get('@productList').then((response) => {
        const products = response.body.products || [];
        expect(products).to.be.an('array').that.is.not.empty;
      });
    }
  
    validateStatusCode(statusCode) {
      cy.get('@productList').its('status').should('eq', statusCode);
    }
  
    searchSpecificProduct(productName) {
      const query = encodeURIComponent(productName);
      return cy.request(
        `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${query}&quantityPerEachCategory=-1`
      ).as('productSearch');
    }
  
    validateSearchedProduct(productName) {
      cy.get('@productSearch').then((response) => {
        expect(response.status).to.eq(200);
  
        const products = response.body[0].products;
        expect(products).to.be.an('array').with.lengthOf(1);
        expect(products[0].productName).to.eq(productName);
      });
    }
  }
  
  export default new ProductPage();
  