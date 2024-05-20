const invalidUsername = 'invalidUser';
const invalidPassword = 'invalidPassword'
const validUsername = 'CamiloCode';
const validPassword = '';
const validUsernameTwoFactor = 'CamiloCode';
const validPasswordTwoFactor = '';
const IDPUser = 'user_1234';

const login = (username, password) => {
  cy.visit('/login');
  cy.get('#login_field').type(username);
  cy.get('#password').type(password);
  cy.get('input[type="submit"]').click();
}

const validateText = (alias, text) => {
  cy.get(alias).should('be.visible');
  cy.get(alias).invoke('text').should('have.length.greaterThan', 0);
  cy.get(alias).contains(text);
}

describe('Github Login tests', () => {

  beforeEach(() => {
    cy.clearAllCookies();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    });
  })

  it('tries to login with invalid credentials', () => {
    login(invalidUsername, invalidPassword);
    cy.get('.flash-error').find('div[role="alert"]').as('errorInLogin');
    validateText('@errorInLogin', 'Incorrect username or password');
  });

  it('has the ability to log in with Identity provider', () => {
    cy.visit('/login');
    cy.get('#login_field').type(IDPUser);
    cy.get('#password').should('be.disabled');
    cy.get('input[type="submit"]').should('have.value', 'Sign in with your identity provider');
  });

  it.skip('logins with valid credentials and it has two-factor disabled', () => {
    cy.intercept('POST', '/session').as('session');
    login(validUsername, validPassword);
    cy.waitWithStatusCode('@session', 302);
    cy.get('h2[data-target="feed-container.feedTitle"]').as('homeTitle');
    validateText('@homeTitle', 'Home');
  });

  it.skip('logins with valid credentials and it has two-factor enabled', () => {
    cy.intercept('POST', '/session').as('session');
    login(validUsernameTwoFactor, validPasswordTwoFactor);
    cy.waitWithStatusCode('@session', 302);
    cy.get('#session-otp-input-label').as('otpLabel');
    validateText('@otpLabel', 'Authentication Code');
  });
})
