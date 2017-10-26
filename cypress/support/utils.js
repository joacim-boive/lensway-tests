export const testCanonical = (url, expectedCanonical, randString = '') => {
  let separator = '';

  if (randString !== '') {
    separator = url.indexOf('?') > -1 ? '&' : '?';
  }

  cy
    .visit(url + separator + randString)
    .get('link[rel="canonical"]')
    .should('have.length', 1)
    .and('have.attr', 'href', expectedCanonical)
    .and('not.match', /\/$/);
};
