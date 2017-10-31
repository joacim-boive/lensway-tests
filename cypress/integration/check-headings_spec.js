import * as cheerio from 'cheerio';
import * as get from '../support/get';

let thisData = [];
let $ = {};

// eslint-disable-next-line no-return-assign
before(() => {
  return get.sheet('title', 500).then(sheetData => (thisData = sheetData));
});

describe('Headings for index page', () => {
  it('Should load without any of the keywords in the title', () => {
    thisData.forEach(data => {
      let [url, keyword] = data;

      cy.request(url).then(html => {
        let keywords = keyword
          .trim()
          .toLowerCase()
          .split(',');

        $ = cheerio.load(html.body);

        let title = $('head > title')
          .text()
          .toLowerCase();
        let h1 = $('h1')
          .text()
          .toLowerCase();
        let h2 = $('h2')
          .text()
          .toLowerCase();

        keywords.forEach(key => {
          expect(title).to.not.include(key);
          expect(h1).to.not.include(key);
          expect(h2).to.not.include(key);
        });
      });
    });
  });
});
