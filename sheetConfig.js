/**
 * The details required to access the google sheet:
 * https://docs.google.com/spreadsheets/d/1OFArx_Ilp7QZxFnc23_lbMBYaihtY118n7qSZaJPfGo/edit#gid=0
 */

//Version of the Google Sheet API (V4)
const ROOT_URL = 'https://sheets.googleapis.com/v4/spreadsheets2';

//ID of the sheet to use
const SPREADSHEET_ID = '1OFArx_Ilp7QZxFnc23_lbMBYaihtY118n7qSZaJPfGo';

//API key to use to access the sheet
/**TODO
 *
 * Change this key to an "official" Lensway key and not the personal key of Joacim Boive
 */
const API_KEY = 'AIzaSyDIpJedu-YW3-EVYAwfA4DLpUdvnSBFhlE';

export default {
  URL: ROOT_URL,
  ID: SPREADSHEET_ID,
  KEY: API_KEY,
};
