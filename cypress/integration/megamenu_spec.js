import * as cheerio from 'cheerio';
import * as test from '../support/test';
import * as get from '../support/get';

let $ = {};
let sheetData = [];

before(() => {
  return get.sheet('megamenu', 500).then(data => {
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
          test.canonical(thisUrl + link.attribs.href, thisUrl + link.attribs.href);
          test.canonical(thisUrl + link.attribs.href, thisUrl + link.attribs.href, `cid=${new Date().getTime()}`);
        });
      });
    });
  });
});
