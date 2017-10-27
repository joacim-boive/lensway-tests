import * as utils from '../../support/utils';

const list = new Map();
const ROOT_URL = 'https://sheets.googleapis.com/v4/spreadsheets';
const SPREADSHEET_ID = '1OFArx_Ilp7QZxFnc23_lbMBYaihtY118n7qSZaJPfGo';
const API_KEY = 'AIzaSyDIpJedu-YW3-EVYAwfA4DLpUdvnSBFhlE';
const RANGE_CANONICALS = 'canonicals!A2:B500';

let sheetData = [];

before(function() {
  return fetch(`${ROOT_URL}/${SPREADSHEET_ID}/values/${RANGE_CANONICALS}?key=${API_KEY}`, {
    method: 'GET',
    mode: 'cors',
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('There was a problem with the request for Google Sheet data');
    })
    .then(data => {
      sheetData = data.values;
    })
    .catch(function(err) {
      console.error(err);
    });
});

describe('Verify Canonicals', () => {
  it('Should visit each URL in the list successfully and point to the correct canonical', () => {
    sheetData.forEach(([url, shouldPointTo]) => {
      utils.testCanonical(url, shouldPointTo, `cid=${new Date().getTime()}`);
    });
  });
});
