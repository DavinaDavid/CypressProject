class loginLoc{

    visiturl(){
        cy.visit('https://lineup-backend-2025-web.ci.lineup.ai');
    }

    enterEmail(){
       return cy.get('input[type="email"]');
    
    }

    enterPassword(){
       return cy.get('input[type="password"]');
    }


    clickLoginBtn(){
       return cy.get('button[type="submit"]');
    }

    openDashboard(){
        cy.url().should('include', '/locations/72/tracking');
    }

    selectManagementTab(){
       return cy.get('a[href="/locations/72/management/requests"]');//.click();
    }

    selectEmployementTab(){
       return cy.get('a:contains("Employees")');
    }

}
module.exports = new loginLoc;

//export default loginLocator;