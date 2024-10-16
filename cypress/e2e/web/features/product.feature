Feature: Product Management

  Background:
    Given I am on the homepage

  Scenario: Search for an existing product
    When I search for "Headphones"
    Then the product list should contain "Headphones"

  Scenario: Search using a part of the product name
    When I search for "Head"
    Then I should see products like "Headphones" in the results
  
  Scenario: Search for a non-existent product
    When I search for "Laptop HP"
    Then I should see a message saying 'No results for "Laptop HP"'

  Scenario: Submit a search with an empty field
    When I submit the search without entering any text
    Then I see all the registered items.

  Scenario: Insert special characters in the search
    When I search for "@@@###***"
    Then I should see a message saying 'No results for "@@@###***"'
    And no critical error should occur

  Scenario: Search using a very long string
    When I search for "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    Then I should see a message saying 'No results'
    And no critical error should occur
