describe('Megamenu top links', () => {
  it('Should have ONE canonical link that points to the correct URL', () => {
    cy
      .visit('https://www.lensway.se/')
      .get('.header-large__nav-main a')
      .each(link => {
        cy
          .visit(link[0].href)
          .get('link[rel="canonical"]')
          .should('have.length', 1)
          .and('have.attr', 'href', link[0].href)
          .and('not.match', /\/$/);
      });
  });
});
