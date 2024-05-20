/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      waitWithStatusCode(alias: string, statusCode: number): Chainable<any>
    }
  }
  