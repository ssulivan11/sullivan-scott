/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Command
Cypress.Commands.add('isInViewport', { prevSubject: true }, (subject) => {
  const cypressState = Cypress.$(cy.state('window'))
  const windowHeight = cypressState.height()
  const rect = subject[0].getBoundingClientRect()

  const isInViewport = () => {
    const inView = {}
    inView.top = rect.top <= 0
    inView.bottom = rect.bottom >= windowHeight
    inView.any = inView.top || inView.bottom
    return inView
  }

  expect(isInViewport().any).to.be.true

  return subject
})
