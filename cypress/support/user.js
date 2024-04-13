Cypress.Commands.add ('acc',(Username)=>{
    cy.get('#customer_menu_top > li > a').click();
    cy.get('#loginFrm_loginname').type('sida1');
    cy.get('#loginFrm_password').type('test123466');
    cy.get('#loginFrm > fieldset > .btn').click();
})