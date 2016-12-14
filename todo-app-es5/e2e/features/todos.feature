Feature: Homepage
  As a user
  I want to manage my todo list
  So that i remember what todo

  Background: Visit Homepage
    Given I am on the homepage

  Scenario: View the todo list
    Then I should see the "Todo List"

  Scenario: Add a todo
    And I add "Sleep a little..." to the todo list
    Then i Should see "Sleep a little..." in the todo list

  @deletion
  Scenario: Remove all todos
    And I remove all todos
    Then The todo list should be empty
