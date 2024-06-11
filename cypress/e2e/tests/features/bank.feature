Feature: Bank Manager Login
    Scenario: Add new customer
    Given Access to Bank Manager Login
    When Click on button "Bank Manger Login"
    Then Bank Manager Page loaded
    When Click on button "Add Customer"
    Then Add Customer related fields are displayed
    When Type in needed information: first name is "<firstName>", last name is "<lastName>" and postal code is "<postalCode>"
    Then Info is displayed in the input field accordingly: first name is "<firstName>", last name is "<lastName>" and postal code is "<postalCode>"
    When Click on "Add Customer" button
    Then Create new user successfully

    Examples:
        | firstName | lastName | postalCode|
        | Hieu      | Bui      | 10000     |
        | Haha      | Hehe     | 15000     |