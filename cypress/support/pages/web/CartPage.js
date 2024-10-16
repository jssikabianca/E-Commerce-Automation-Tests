class CartPage {
    accessShoppingCart() {
        cy.get('#shoppingCartLink').click()
    };

    verifyItemOnPaymentScreen(item1, item2) {
        cy.get('tbody').should('contain.text', item1);
        cy.get('tbody').should('contain.text', item2);
    }

    verifyTotalAmount(value) {
        cy.get('span').should('contain.text', value);
    }
}

export default new CartPage();