import content from '../../src/helpers/content'

const { title, mainHeadingText } = content

const section = {
  home: '[data-test="home"]',
  about: '[data-test="about"]',
  contact: '[data-test="contact"]',
}

const viewport = {
  w: 550,
  h: 750,
}

describe('Base test', () => {
  beforeEach(() => {
    cy.server().viewport(viewport.w, viewport.h)
  })

  describe('Meta & Page Information', () => {
    it('.should() - assert that meta title and 404 page are correct', () => {
      cy.visit('/')
        .title()
        .should('include', title)
        .get('h1')
        .contains(mainHeadingText)

      cy.scrollTo(0, viewport.h)
        .get(section.about)
        .isInViewport()
      cy.scrollTo(0, viewport.h * 2)
        .get(section.contact)
        .isInViewport()
    })
  })
})
