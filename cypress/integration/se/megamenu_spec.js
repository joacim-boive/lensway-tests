import * as cheerio from 'cheerio';
import * as utils from '../../support/utils';

let $ = {};
let sheetData = [];

before(() => {
  return utils.getSheetData('megamenu!A2:A500').then(data => {
    sheetData = data;
  });
});

describe('Megamenu top links', () => {
  it('Should have ONE canonical link that points to the correct URL', () => {
    sheetData.forEach(([url]) => {
      cy.request('GET', url).then(html => {
        let thisUrl = html.allRequestResponses[0]['Request URL'];
        thisUrl = thisUrl.substr(0, thisUrl.length - 1);

        $ = cheerio.load(html.body);
        $('.header-large__nav-main a').each((index, link) => {
          utils.testCanonical(thisUrl + link.attribs.href, thisUrl + link.attribs.href);
          utils.testCanonical(thisUrl + link.attribs.href, thisUrl + link.attribs.href, `cid=${new Date().getTime()}`);
        });
      });
    });
  });
});
