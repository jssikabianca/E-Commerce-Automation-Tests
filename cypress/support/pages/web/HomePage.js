class HomePage {
    accessHomePage() {
      cy.visit('/');
      cy.get('h3').should('be.visible', 'SPECIAL OFFER');
    }

    searchProduct(productName) {
      cy.get('input[name="mobile_search"]').type(`${productName}{enter}`);
    }

    searchEmptyProduct() {
      cy.get('input[name="mobile_search"]').type('{enter}');
    }

    verifyResultProducts(productName) {
      cy.get(".productName").filter(`:contains('${productName}')`).should("exist");
    }

    verifyMessage(messageProduct) {
      cy.get('button[name="save_to_cart"]').should('be.visible');
      cy.get('#searchPage').should('contain.text', messageProduct);
    }

    checkCriticalError() {
      cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('expected error message');
        return false;
      });
    }

    checkQuantityOfItems(quantityItems) {
      cy.get('a').filter(`:contains('${quantityItems}')`).should("exist");
    }
  }
  
  export default new HomePage();