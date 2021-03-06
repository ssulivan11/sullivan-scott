import { title, description, mainHeadingText, subHeadingText, bioHeading, bioText } from '../../src/helpers/content'

describe('base tests', () => {
  it('should set meta tags', () => {
    cy.visit('/')
      .title()
      .should('include', title)
    cy.get('meta[name="description"]').should('have.attr', 'content', description)
  })

  it('should set content', () => {
    cy.get('h1')
      .contains(mainHeadingText)
      .get('h2')
      .contains(subHeadingText)
    cy.get('h2[data-test="bio-heading"]')
      .contains(bioHeading)
      .get('p[data-test="bio-text"]')
      .contains(bioText)

    cy.get('footer')
      .contains(new Date().getFullYear())
      .contains('© Scott Sullivan')
  })

  it('should assert the canonical url', () => {
    cy.get('head link[rel="canonical"]').should('have.attr', 'href', 'https://ssullivan.info/')
  })
})
