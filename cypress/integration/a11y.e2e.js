describe('a11y tests', () => {
  it('should do things', () => {
    cy.visit('/')
      .injectAxe()
      .checkA11y()
  })
})
