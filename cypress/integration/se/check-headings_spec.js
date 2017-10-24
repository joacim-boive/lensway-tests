const notTheseKeywords = ['linser', 'kontaktlinser', 'endagarslinser', 'lins', 'glasögon', 'solglasögon'];

describe('Headings for index page', () => {
  it('Should load without any of the keywords in the title', () => {
    cy.visit('https://www.lensway.se');

    notTheseKeywords.forEach(key => {
      cy.title().should('not.include', key);
    });

    notTheseKeywords.forEach(key => {
      cy.get('h1').should('not.contain', key);
    });

    notTheseKeywords.forEach(key => {
      cy.get('h2').should('not.contain', key);
    });
  });
});

describe('Headings for kontaktlinser', () => {
  it('Should load with these values in the heading', () => {
    cy.visit('https://www.lensway.se/kontaktlinser');

    cy.title().should('be', 'Linser från välkända linsmärken | LensWay');
    cy.get('h1').should('be', 'Linser');
  });
});
