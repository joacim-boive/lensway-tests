# Lensway Cypress Tests

Using [Cypress](https://www.cypress.io) to test the lensway websites by configuring a [Google Sheet](https://docs.google.com/spreadsheets/d/1OFArx_Ilp7QZxFnc23_lbMBYaihtY118n7qSZaJPfGo/edit?usp=sharing)


### Installing


Firstly, we need to install our dependencies to be able to run the project:
```
In a terminal, from the project root:
yarn

```


## Getting Started

Make a copy of this [Google Sheet](https://docs.google.com/spreadsheets/d/1OFArx_Ilp7QZxFnc23_lbMBYaihtY118n7qSZaJPfGo/edit?usp=sharing).
It must retain the format and tab names to work as we rely on these.

Get your own [Google Sheet API key](https://developers.google.com/sheets/api/guides/authorizing#APIKey) here.
Update [sheet-config.js](sheet-config.js) with your key and spreadsheet id.

Just run yarn in a terminal (or "npm run test run" if you're old school ;)
To just run the tests:
```
yarn test run
```

If you need to interact with the tests:
```
yarn test open
```

Read the rest of the details on how Cypress works over @ [Cypress](https://www.cypress.io)


### Background

The tests are intended to run on the CI server (Jenkins at the time of this writing).
Don't install Cypress globally, it's intended to be tied to a project so we can be sure that the test works with the running version.

Details for the implementation of Google Sheet is contained in the sheet-config.js file.


## Using

* [Cypress](https://www.cypress.io)
* [Cheerio](https://github.com/cheeriojs/cheerio) for HTML parsing
* [Prettier](https://github.com/prettier/prettier) for formatting source code
* [ESLint](https://eslint.org) for linting
  * [AirBnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) linting rules
* [Yarn](https://yarnpkg.com) for package management
* [Google Sheet](https://www.google.com/sheets/about/) for config

## TODO

* Replace my private Google Sheet API key with a Lensway official one

## Authors

* **Joacim Boive** - *Initial work* - [joacim-boive](https://github.com/joacim-boive)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details