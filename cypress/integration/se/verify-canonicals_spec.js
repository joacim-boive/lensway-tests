import * as utils from '../../support/utils';

const list = new Map();
const domain = 'https://www.lensway.se';

list.set(`${domain}/glasogon/glasogonlista`, `${domain}/glasogon`);
list.set(`${domain}/lenses`, `${domain}/kontaktlinser`);
list.set(`${domain}/lenses?allList=true`, `${domain}/kontaktlinser`);
list.set(`${domain}/kontaktlinser/linslista`, `${domain}/kontaktlinser`);
list.set(`${domain}/glasogon/glasogonlista?clearFilters`, `${domain}/glasogon`);
list.set(`${domain}/solglasogon?p_shape=Butterfly`, `${domain}/solglasogon`);
list.set(
  `${domain}/glasogon/glasogonlista/carrera?p_price=f496t995&sort=popularity&_page=1`,
  `${domain}/glasogon/glasogonlista/carrera`
);

describe('Verify Canonicals', () => {
  it('Should visit each URL in the list successfully and point to the correct canonical', () => {
    list.forEach((url, shouldPointTo) => {
      debugger;
      utils.testCanonical(shouldPointTo, url, `cid=${new Date().getTime()}`);
    });
  });
});
