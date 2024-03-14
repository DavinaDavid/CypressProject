//const loginLoc = require("../../e2e/pageLocators/loginLoc");
const loginLoc = require("../../e2e/pageObjects/loginLoc");
const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

Given("I visit url",()=> {
    loginLoc.visiturl();
});

When("I enter my userEmail {string} and password {string} into the login form", (userEmail, password)=>{
loginLoc.enterEmail().type(userEmail);
loginLoc.enterPassword().type(password);
});


And("I click on login button", ()=>{
loginLoc.clickLoginBtn().click();

})

Then("Dashboard is viewed", () => {
    loginLoc.openDashboard();
  //  cy.url().should('include', '/locations/72/tracking');
  });
  
  
  And("I select Management Option",()=> {
    loginLoc.selectManagementTab().click();
    //  cy.get('a[href="/locations/72/management/requests"]').click();
      });
  
  And("I choose Employee Management",()=>{
        //  cy.get('a:contains("Employees")').click();
          loginLoc.selectEmployementTab().click();
  
      })
  