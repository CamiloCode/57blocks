Cypress.Commands.add('waitWithStatusCode', (alias, statusCode) => {
    cy.wait(alias).its('response.statusCode').should('eq', statusCode)
});
