Feature: Bank Manager Login
    Scenario: Add new customer
    Given Access to Bank Manager Login
    When Click on button "Bank Manger Login"
    Then Bank Manager Page loaded
    When Click on button "Add Customer"
    Then Add Customer related fields are displayed
    When Type in needed information
    Then Info is displayed in the input field accordingly
    When Click on "Add Customer" button
    Then Create new user successfully