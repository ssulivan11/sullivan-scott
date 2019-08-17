const section = {
  home: '[data-test="home"]',
  about: '[data-test="about"]',
  contact: '[data-test="contact"]',
}

describe('a11y tests', () => {
  it('should test standard accessibility issues using axe-core', () => {
    cy.visit('/')
      .injectAxe()
      .checkA11y()
  })
})
