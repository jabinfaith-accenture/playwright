Feature: UiBank banking flows

  Scenario: Login and logout
    Given I am on the UiBank welcome page
    When I sign in with username "FebApiuser" and password "Eagle@123"
    And I accept the privacy policy
    Then I should be on the accounts page
    When I log out
    Then I should be on the welcome page

  Scenario: Create a new checking account and then logout
    Given I am on the UiBank welcome page
    When I sign in with username "FebApiuser" and password "Eagle@123"
    And I accept the privacy policy
    And I open the apply for new account page
    And I create a checking account with nickname "AutomationTest"
    Then I should see the congratulations message
    When I view my accounts
    And I log out
    Then I should be on the welcome page

  Scenario: Invalid login attempt
    Given I am on the UiBank welcome page
    When I sign in with username "wronguser" and password "wrongpass"
    Then I should remain on the welcome page

  Scenario: Invalid password format
    Given I am on the UiBank welcome page
    When I sign in with username "FebApiuser" and password "short"
    Then I should remain on the welcome page
