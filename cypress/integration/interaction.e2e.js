import content from '../../src/helpers/content'

const section = {
  home: '[data-test="home"]',
  about: '[data-test="about"]',
  contact: '[data-test="contact"]',
}

const viewport = {
  w: 550,
  h: 750,
}

describe('Interaction Tests', () => {
  beforeEach(() => {
    cy.server().viewport(viewport.w, viewport.h)
  })

  it('should set proper heights based on viewport', () => {
    cy.visit('/')
    cy.scrollTo(0, viewport.h * 2)
      .get(section.about)
      .isInViewport()
    cy.scrollTo(0, viewport.h * 3)
      .get(section.contact)
      .isInViewport()

    // cy.scrollTo(0, 0)
    //   .get('[type="button"]')
    //   .click()
    //   .get(section.about)
    //   .isInViewport()
  })
})
