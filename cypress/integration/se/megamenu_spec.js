import * as utils from '../../support/utils';
//test
describe('Megamenu top links', () => {
  it('Should have ONE canonical link that points to the correct URL', () => {
    cy
      .visit('https://www.lensway.se/')
      .get('.header-large__nav-main a')
      .each(link => {
        utils.testCanonical(link[0].href, link[0].href);
        utils.testCanonical(link[0].href, link[0].href, `cid=${new Date().getTime()}`);
      });
  });
});
