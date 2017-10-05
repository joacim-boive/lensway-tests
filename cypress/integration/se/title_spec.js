describe('Title', () => {
  it('Should load with the correct value', () => {
    cy.visit('https://www.lensway.se');

    cy.title().should('be', 'Linsvätska & tillbehör | LensWay');
  });
});
