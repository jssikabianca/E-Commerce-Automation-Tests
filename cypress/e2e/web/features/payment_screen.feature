Feature: Complete payment

  Background:
    Given I am on the homepage

    Scenario: View all products added on the payment screen
      And I have added "Beats Studio 2" and "HP Roar Wireless" to the cart
      When I proceed to the payment screen
      Then I should see both products listed correctly

    Scenario: View the correct total amount
      When I search for "HP Roar Wireless Speaker" and add one to the cart
      And I perform a new search
      And I search for "HP Elite x2 1011 G1 Tablet" and add one to the cart
      And I proceed to the payment screen
      Then the total amount should be the exact sum of the individual product prices



