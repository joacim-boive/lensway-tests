import * as get from '../support/get';
import * as test from '../support/test';

let sheetData = [];

before(() => {
  return get.sheet('canonicals!A2:B500').then(data => {
    sheetData = data;
  });
});

describe('Verify Canonicals', () => {
  it('Should visit each URL in the list successfully and point to the correct canonical', () => {
    sheetData.forEach(([url, shouldPointTo]) => {
      test(url, shouldPointTo, `cid=${new Date().getTime()}`);
    });
  });
});
