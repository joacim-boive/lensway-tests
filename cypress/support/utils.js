export const testCanonical = (url, expectedCanonical, randString = '') => {
  cy
    .visit(url + (url.indexOf('?') > -1 ? '&' : '?') + randString)
    .get('link[rel="canonical"]')
    .should('have.length', 1)
    .and('have.attr', 'href', expectedCanonical)
    .and('not.match', /\/$/);
};
