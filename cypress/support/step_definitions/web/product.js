import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/web/HomePage"; 

Given("I am on the homepage", () => {
  HomePage.accessHomePage();
});

When("I search for {string}", (productName) => {
  HomePage.searchProduct(productName);
});

When("I submit the search without entering any text", () => {
  HomePage.searchEmptyProduct();
})

Then("the product list should contain {string}", (productName) => {
  HomePage.verifyResultProducts(productName);
});

Then("I should see products like {string} in the results", (productName) => {
  HomePage.verifyResultProducts(productName);
});

Then("I should see a message saying {string}", (messagemError) => {
  HomePage.verifyMessage(messagemError);
});

Then("I see all the registered items.", (quantityItems) => {
  HomePage.checkQuantityOfItems('114 ITEMS');
});

Then("no critical error should occur", () => {
  HomePage.checkCriticalError();
})






