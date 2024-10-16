import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../pages/web/ProductPage";
import HomePage from "../../pages/web/HomePage";

When("I select a {string} from the list", (nameItem) => {
    ProductPage.accessProductPage(nameItem);
})

When('I click "Add to Cart"', () => {
    ProductPage.addProductOnCart();
})

Then('the product {string} should be successfully added to the cart', (productName) => {
    ProductPage.verifyItemOnCart(productName);
})

Then('{string} should appear in the cart', (productQuantity) => {
    ProductPage.verifyItemOnCart(productQuantity);
})

When('I search for {string} and add one to the cart', (productName) => {
    HomePage.searchProduct(productName);
    ProductPage.accessProductPage(productName);
    ProductPage.addProductOnCart();
})

When('I perform a new search', () => {
    ProductPage.returnToHome();
})

Then('both products should appear in the cart', () => {
    ProductPage.verifyItemOnCart("HP ELITE X2 1011 G1 TABLET");
    ProductPage.verifyItemOnCart("HP ROAR WIRELESS SPEAKER");
})

When ('I add the {string} product twice', (productName) => {
    ProductPage.accessProductPage(productName);
    ProductPage.addProductOnCart();
    ProductPage.addProductOnCart();
})

Then ('I should see a message saying {string}', (item) => {
    ProductPage.verifyDescriptionItem(item);
})

Then('the product should not be added to the cart', () => {
    ProductPage.verifyButtonAddToCartDisable();
})
