import { section, viewport } from '../support/cypressHelpers'

describe('interaction tests', () => {
  beforeEach(() => {
    cy.server().viewport(viewport.w, viewport.h)
  })

  it('should set proper heights based on viewport', () => {
    cy.visit('/')
    cy.scrollTo(0, 0)
      .get(section.home)
      .isInViewport()

    cy.scrollTo(0, 0)
      .get('[type="button"]')
      .click()
      .get(section.about)
      .isInViewport()

    cy.scrollTo(0, viewport.h * 3)
      .wait(100)
      .get(section.contact)
      .isInViewport()
  })
})
