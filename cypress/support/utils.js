const ROOT_URL = 'https://sheets.googleapis.com/v4/spreadsheets';
const SPREADSHEET_ID = '1OFArx_Ilp7QZxFnc23_lbMBYaihtY118n7qSZaJPfGo';
const API_KEY = 'AIzaSyDIpJedu-YW3-EVYAwfA4DLpUdvnSBFhlE';

export const getSheetData = (range) => {
  return fetch(`${ROOT_URL}/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`, {
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
      return data.values;
    })
    .catch(function(err) {
      console.error(err);
    });
};

export const testCanonical = (url, expectedCanonical, randString = '') => {
  let separator = '';

  if (randString !== '') {
    separator = url.indexOf('?') > -1 ? '&' : '?';
  }

  cy
    .visit(url + separator + randString)
    .get('link[rel="canonical"]')
    .should('have.length', 1)
    .and('have.attr', 'href', expectedCanonical)
    .and('not.match', /\/$/);
};
