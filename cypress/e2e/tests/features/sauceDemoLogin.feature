Feature: Login
    Scenario: Login with standard_user
    Given Access to Page 
    Then Page is loaded properly
    When user input standard account information
    Then info is displayed properly on user name and password field
    When user click on login button
    Then Login successfully and switch to other Page

