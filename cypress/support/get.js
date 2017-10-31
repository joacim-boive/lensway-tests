import { URL, ID, KEY } from '../../sheetConfig';

const get = {};

/**
 * Fetch data from a configured Google Sheet tab
 * @param tabName {string} The name of the tab to get data from: canonicals, megamenu, title
 * @param rows {number} The number of rows to return (Truncates to the last row containing data)
 */
const sheet = (tabName, rows) => {
  const COL_A = 'A2';
  return fetch(`${URL}/${ID}/values/${tabName}!${COL_A}:B${rows.toString()}?key=${KEY}`, {
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
      // eslint-disable-next-line no-undef
      assert.fail('', '', 'Failed to get data from Google Sheet - is sheetConfig.js properly configured?');
      // eslint-disable-next-line no-console
      console.error(err);
    });
};

get.sheet = sheet;

export default get;
