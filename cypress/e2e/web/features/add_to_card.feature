Feature: Add product to card

  Background:
    Given I am on the homepage

    Scenario: Successfully add a product to the cart
      When I search for "Headphones"
      And I select a "Beats Studio 2 Over-Ear Matte Black Headphones" from the list
      And I click "Add to Cart"
      Then the product "BEATS STUDIO 2 OVER-EAR MAT..." should be successfully added to the cart

    Scenario: Add multiple different products to the cart
      When I search for "HP Roar Wireless Speaker" and add one to the cart
      And I perform a new search
      And I search for "HP Elite x2 1011 G1 Tablet" and add one to the cart
      Then both products should appear in the cart

    Scenario: Add the same product more than once
      When I search for "Headphones"
      And I add the "Beats Studio 2 Over-Ear Matte Black Headphones" product twice
      Then "QTY: 2" should appear in the cart

    Scenario: Add a product that is out of stock
      When I search for "Headphones"
      And I select a "Bose SoundLink Around-ear Wireless Headphones II" from the list
      Then the product should not be added to the cart
