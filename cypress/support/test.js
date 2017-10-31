const test = {};

const canonical = (url, expectedCanonicalUrl, randString = '') => {
  let separator = '';

  if (randString !== '') {
    separator = url.indexOf('?') > -1 ? '&' : '?';
  }

  cy
    .request(url + separator + randString)
    .its('body')
    .should('contain', `<link rel="canonical" href="${expectedCanonicalUrl}">`);
};

test.canonical = canonical;

export default test;
