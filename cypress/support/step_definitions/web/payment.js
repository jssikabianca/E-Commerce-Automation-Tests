import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../pages/web/ProductPage";
import HomePage from "../../pages/web/HomePage"; 
import CartPage from "../../pages/web/CartPage";

Given("I have added {string} and {string} to the cart", (product1, product2) => {
    HomePage.searchProduct(product1);
    ProductPage.accessProductPage(product1);
    ProductPage.addProductOnCart();
    ProductPage.returnToHome();
    HomePage.searchProduct(product2);
    ProductPage.accessProductPage(product2);
    ProductPage.addProductOnCart();
})

When("I proceed to the payment screen", () => {
    CartPage.accessShoppingCart();
})

Then("I should see both products listed correctly", () => {
    CartPage.verifyItemOnPaymentScreen("HP ROAR WIRELESS SPEAKER", "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES");
})

Then("the total amount should be the exact sum of the individual product prices", () => {
    CartPage.verifyTotalAmount("1,363.99");
})