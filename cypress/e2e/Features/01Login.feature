Feature: Login LineUp
I will login app

Scenario: Successful Login
Given I visit url
When I enter my userEmail "demouser1@lineup.ai" and password "Demo123user" into the login form
And I click on login button
Then Dashboard is viewed

