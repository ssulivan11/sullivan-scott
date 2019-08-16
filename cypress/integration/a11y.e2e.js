const section = {
  home: '[data-test="home"]',
  about: '[data-test="about"]',
  contact: '[data-test="contact"]',
}

describe('a11y tests', () => {
  it('should test standards of contact section', () => {
    cy.visit('/').get(section.contact)
    // .injectAxe()
    // .checkA11y()
  })
})
