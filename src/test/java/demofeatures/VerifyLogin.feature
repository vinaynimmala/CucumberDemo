
Feature: Verify Login functionality

  @demo @scenario1 @lgnmodule
  Scenario: Verify Login with Valid User
    Given User is on Login page
    When User enters "vinay" into username field
    And User enter "12345" into password field
    And Click on Login button
    Then User is navigated to home page



  @demo @scenario2 @ordermodule
  Scenario: Verify Login with In-Valid User
    Given User is on Login page
    When User enter username into username field
    And User enter password into password field
    And Click on Login button
    Then User access is denied and a message is displayed
