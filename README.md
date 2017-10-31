# Lensway Cypress Tests

Using [Cypress](https://www.cypress.io) to test the lensway websites by configuring a [Google Sheet](https://docs.google.com/spreadsheets/d/1OFArx_Ilp7QZxFnc23_lbMBYaihtY118n7qSZaJPfGo/edit?usp=sharing).


## Getting Started

Just run yarn in a terminal (or "npm i" if you're old school ;)
To just run the tests:
```
yarn test run
```

If you need to interact with the tests:
```
yarn test open
```

Read the rest of the details on how Cypress works over @ [Cypress](https://www.cypress.io)

![layout](https://user-images.githubusercontent.com/270235/31095085-c61289a0-a7b7-11e7-98c5-a64790c04a91.jpg)


### Background

The tests are intended to run on the CI server (Jenkins at the time of this writing).
Don't install Cypress globally, it's intended to be tied to a project so we can be sure that the test works with the running version.

Details for the implementation of Google Sheet is contained in the sheetConfig.js file.


### Installing

A step by step series of examples that tell you have to get a development env running

Firstly, we need to install our dependencies to be able to run the project:
```
In a terminal, from the project root:
yarn

```

Wait until the dependencies have finished installing then run:

```
In a terminal, from the project root:
yarn start

```

This will start the backend that provides the REST API to the demo application.

Finally, run:

```
In a NEW terminal, from the project root:
yarn dev

```

## Using

* [Cypress](https://www.cypress.io)
* [Cheerio](https://github.com/cheeriojs/cheerio) for HTML parsing
* [Prettier](https://github.com/prettier/prettier) for formatting source code
* [ESLint](https://eslint.org) for linting
* * [AirBnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) linting rules
* [Yarn](https://yarnpkg.com) for package management
* [Google Sheet](https://www.google.com/sheets/about/) for config

## Authors

* **Joacim Boive** - *Initial work* - [joacim-boive](https://github.com/joacim-boive)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## TODO

* Replace my private Google Sheet API key with a Lensway official one