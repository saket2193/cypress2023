Feature: login

    Scenario: login to account
        Given i open login page
        When i enter username
        And password
        Then i submit details and verify the error message for login