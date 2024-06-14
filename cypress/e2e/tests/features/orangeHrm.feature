Feature: Admin feature
    Scenario: Login, upload then download the uploaded file
    Given User wants to access OrangeHrm site
    When Connect to the url
    Then Page is loaded properly
    When input to username and password text field using provided username and password
    Then info is displayed accordingly
    When click on Login button
    Then Login successfully and switch to dashboard page
    When click on My Info option in left sidebar
    # Then my info page is loaded properly
    # When input data to personal details area then click save, input data to custom field area then click save
    # Then data is saved successfully

    

