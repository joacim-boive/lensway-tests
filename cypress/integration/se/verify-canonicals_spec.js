import * as utils from '../../support/utils';

let sheetData = [];

before(() => {
  return utils.getSheetData('canonicals!A2:B500').then(data => {
    return (sheetData = data);
  });
});

describe('Verify Canonicals', () => {
  it('Should visit each URL in the list successfully and point to the correct canonical', () => {
    sheetData.forEach(([url, shouldPointTo]) => {
      utils.testCanonical(url, shouldPointTo, `cid=${new Date().getTime()}`);
    });
  });
});
