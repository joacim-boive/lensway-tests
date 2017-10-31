const test = {};

/**
 * Loads an URL twice - using a GET request and checks the canonical link against the expected result.
 * Second time it appends a query string and validates the URL again against the canonical link.
 * @param url {string} The url to test against
 * @param expectedCanonicalUrl {string} The canonical should be this.
 * Ex;
 * Expecting: <link rel="canonical" href="https://www.lensway.se/kontaktlinser">
 * You provide the href-attribute: https://www.lensway.se/kontaktlinser
 * @param randString {string} A random string to append as a query parameter.
 */
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
