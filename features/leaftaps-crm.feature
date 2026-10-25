Feature: Leaftaps CRM/SFA access

  Scenario: Sign in and open CRM/SFA
    Given I am on the Leaftaps login page
    When I log in to Leaftaps with username "Demosalesmanager" and password "crmsfa"
    And I open the CRM and SFA application
    Then I should be on the Leaftaps CRM home page
