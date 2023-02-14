Feature: login to application

@Smoke
Scenario: login by driving data
    Given i open login page
    When i fill form 
    |user|pass|
    |saket|sam|
    Then i submit details and verify the error message for login