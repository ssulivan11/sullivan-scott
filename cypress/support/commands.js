/* eslint-disable jest/valid-expect, no-unused-expressions , @typescript-eslint/explicit-function-return-type */
import '@percy/cypress'

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
