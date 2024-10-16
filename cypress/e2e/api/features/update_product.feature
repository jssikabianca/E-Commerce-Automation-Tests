Feature: Product Image Update

  Background:
    Given the API is available
    And if necessary, register a new user

  Scenario: User logs in and updates the image
    And I want to login with valid credentials
    Then I should receive a token
    When I update the image
    Then the image should be updated successfully
