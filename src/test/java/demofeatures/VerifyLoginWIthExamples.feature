
Feature: Verify Login functionality with example

  @examples @demo
  Scenario Outline: Verify Login with Valid User
    Given User is on Login page
    When User enters "<username>" into username field
    And User enter "<password>" into password field
    And Click on Login button
    Then User is navigated to home page

    Examples: 
      | username   | password |
      | iteration1 |     1234 |
      | iteration2 | abcd     |
      |iteration3|5678|
