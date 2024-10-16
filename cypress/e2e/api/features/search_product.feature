Feature: Search products via API

  Background:
    Given the API is available

    Scenario: Successfully retrieve the product list
      When I send a request to fetch the products
      Then the API should return a list of products
      And the status code should be 200
    
    Scenario: Successfully fetch a specific product by name
      Given I want to search for a specific product named "Beats Studio 2 Over-Ear Matte Black Headphones"
      When I send a request to fetch the product
      Then the API should return only the searched product