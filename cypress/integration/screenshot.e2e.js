import { viewport } from '../support/cypressHelpers'

describe('Integration test with visual testing', () => {
  it('loads intial page', () => {
    cy.server()
      .viewport(viewport.w, viewport.h)
      .visit('/')
      .wait(2000)
      .percySnapshot()
  })
})
