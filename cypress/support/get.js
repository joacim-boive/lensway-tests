import { URL, ID, KEY } from '../../sheetConfig';

const get = {};

const sheet = (tabName, rows) => {
  const COL_A = 'A2';
  return fetch(`${URL}/${ID}/values/${tabName}!${COL_A}:B${rows}?key=${KEY}`, {
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
      // eslint-disable-next-line no-console
      console.error(err);
    });
};

get.sheet = sheet;

export default get;
