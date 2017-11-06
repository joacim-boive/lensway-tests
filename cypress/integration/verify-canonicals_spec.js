import * as get from '../support/get';
import * as test from '../support/test';

let sheetData = [];

before(() => {
  debugger;
  return get.sheet('canonicals', 500).then(data => {
    sheetData = data;
  });
});

describe('Verify Canonicals', () => {
  it('Should visit each URL in the list successfully and point to the correct canonical', () => {
    sheetData.forEach(([url, shouldPointTo]) => {
      test.canonical(url, shouldPointTo, `cid=${new Date().getTime()}`);
    });
  });
});
