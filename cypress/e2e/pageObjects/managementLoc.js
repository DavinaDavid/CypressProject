require('cypress-xpath');

class ManagementLoc{

//     selectManagementFromTop(){
//  return cy.get('a:contains("Management")');//.click();
//     }

    // selectEmployee(){
    //    return cy.find('nav').get('a:contains("Employees")');//.click();
    // }
 

 ClickAddNewEmployee(){
   return cy.get('button:contains("+ Add New")');//.click();
}


FillEmployeeData(employeeName,employeeEmail,wage,country,employeePhone){
    cy.get('[data-testid="Employee Name* input"]').type(employeeName);
    cy.get('[data-testid="Email Address* input"]').type(employeeEmail);
    cy.get('[data-testid="Wage input"]').type(wage);
    cy.get('select.PhoneInputCountrySelect').select(country);
    cy.get('[data-testid="Phone Number input"]').type(employeePhone);
    cy.get('tbody>tr>td:nth-child(3)>input[type="checkbox"]').check().should('be.checked');
    cy.get('form').submit();
}

    searchEmployee(searchKeyword){
   cy.get('#search-bar-0').type(searchKeyword);
    }


  scheduleAvailability(){
    console.log(cy.url);
    cy.visit('https://lineup-backend-2025-web.ci.lineup.ai/locations/72/management/employees/15023/edit')
    cy.get('a:contains("Availability")').click();

   //Add Time for Monday
        cy.get('p.sc-IhgdQ.bnltmx:first').click();
        cy.get('.form-group').eq(3).type('12:00 AM');
        cy.get('.form-group').eq(4).type('02:00 AM');

           // //N.A for Wednesday
        cy.get('input#unavailable-2').check();
       cy.get('button').contains('Update').click({ force: true });
    }
    
}
module.exports = new ManagementLoc;