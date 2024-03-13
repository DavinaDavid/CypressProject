Feature: Employee Management

Background: Admin Logins
Given I visit url
When I enter my userEmail "demouser1@lineup.ai" and password "Demo123user" into the login form
And I click on login button
Then Dashboard is viewed

Scenario: Employees are Added
Given I select Management Option
When I choose Employee Management
And I add new Employee
Then I provide Employee Data "Davina David", "davina.david@yopmail.com", "150000", "Pakistan", "3441111111"

Scenario: Employee is Searched and Edited
Given I select Management Option
When I choose Employee Management
And I search Employee "Larry" 
Then I schedule Availability