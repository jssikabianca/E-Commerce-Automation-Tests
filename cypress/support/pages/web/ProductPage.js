class ProductPage {
    accessProductPage(productName) {
        cy.get(".productName").filter(`:contains('${productName}')`).click();
        cy.wait(5000);
      }

    addProductOnCart() {
        cy.get('button[name="save_to_cart"]').click();
    }

    verifyItemOnCart(itemCart) {
        cy.get('#shoppingCartLink').click();
        cy.get('#toolTipCart').should('contain.text', itemCart);
    }

    verifyDescriptionItem(item) {
        cy.get('#Description').should('contain.text', itemCart);
    }

    verifyButtonAddToCartDisable(){
        cy.get('button[name="save_to_cart"]').should('have.class', 'disable');
    }

    returnToHome() {
        cy.go('back');
    }

    accessShoppingCart() {
        cy.get('#shoppingCartLink').click()
    }
}

export default new ProductPage()