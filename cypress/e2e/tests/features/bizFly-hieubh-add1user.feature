Feature: Manage product on bizFly
    Scenario: User wants to add a new product
    Given user on the login page 1
    When user enters valid username then click continue 1
    Then page recognizes the exist user 1
    When user enters valid password and click continue 1
    Then user login successfully and redirect to main page 1
    When user click on selecting project dropdown then select hieubh
    Then click on BizEmail
    When click on khach hang on left tab
    Then click on them khach hang
    When user fill info