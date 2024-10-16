import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductPage from '../../pages/api/ProductPage';

let productName = '';

Given('the API is available', () => {
  ProductPage.checkAPIAvailability();
});

When('I send a request to fetch the products', () => {
  ProductPage.fetchProductList();
});

Then('the API should return a list of products', () => {
  ProductPage.validateProductList();
});

Then('the status code should be {int}', (statusCode) => {
  ProductPage.validateStatusCode(statusCode);
});

Given('I want to search for a specific product named {string}', (name) => {
  productName = name;
});

When('I send a request to fetch the product', () => {
  ProductPage.searchSpecificProduct(productName);
});

Then('the API should return only the searched product', () => {
  ProductPage.validateSearchedProduct(productName);
});
