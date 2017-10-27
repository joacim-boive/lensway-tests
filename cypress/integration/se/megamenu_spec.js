import * as utils from '../../support/utils';

let sheetData = [];

before(() => {
  return utils.getSheetData('megamenu!A2:A500').then(data => {
    return (sheetData = data);
  });
});

describe('Megamenu top links', () => {
  it('Should have ONE canonical link that points to the correct URL', () => {
    sheetData.forEach(([url]) => {
      cy
        .visit(url)
        .get('.header-large__nav-main a')
        .each(link => {
          utils.testCanonical(link[0].href, link[0].href);
          utils.testCanonical(link[0].href, link[0].href, `cid=${new Date().getTime()}`);
        });
    });
  });
});
