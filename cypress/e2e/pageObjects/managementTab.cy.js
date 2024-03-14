// require('cypress-xpath');

// Given("I select Management Option",()=> {
//   cy.get('a:contains("Management")').click();
//     })

// When("I choose Employee Management",()=>{
//         cy.find('nav').get('a:contains("Employees")').click();
//     })

// And("I add new Employee",()=>{
//     cy.get('button:contains("+ Add New")').click();
// })


// Then("I provide Employee Data {string}, {string}, {string}, {string}, {string}", (employeeName, employeeEmail, wage, country, employeePhone )=>{
//     cy.get('[data-testid="Employee Name* input"]').type(employeeName);
//     cy.get('[data-testid="Email Address* input"]').type(employeeEmail);
//     cy.get('[data-testid="Wage input"]').type(wage);
//     cy.get('select.PhoneInputCountrySelect').select(country);
//     cy.get('[data-testid="Phone Number input"]').type(employeePhone);
//    cy.get('tbody>tr>td:nth-child(3)>input[type="checkbox"]').check().should('be.checked');
//     cy.get('form').submit();
// })


// And("I search Employee {string}",(searchKeyword)=> {
//    cy.get('#search-bar-0').type(searchKeyword);

//     });


//   Then("I schedule Availability",()=>{
//     console.log(cy.url);
//   cy.visit('https://lineup-backend-2025-web.ci.lineup.ai/locations/72/management/employees/15023/edit')
//  cy.get('a:contains("Availability")').click();

//    //Add Time for Monday
//         cy.get('p.sc-IhgdQ.bnltmx:first').click();
//         cy.get('.form-group').eq(3).type('12:00 AM');
//         cy.get('.form-group').eq(4).type('02:00 AM');

//            // //N.A for Wednesday
//         cy.get('input#unavailable-2').check();
//        cy.get('button').contains('Update').click({ force: true });
//     });