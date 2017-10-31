# Lensway Cypress Tests

Using Cypress.io to test the lensway websites by configuring a Google Sheet.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

![layout](https://user-images.githubusercontent.com/270235/31095085-c61289a0-a7b7-11e7-98c5-a64790c04a91.jpg)

It should work in any modern browser (meaning not IE11). But Edge, FireFox, Safari and Chrome.

### Background

I choose to host the site using webpack dev server - simply for matter of taste. I prefer to keep the REST API and DEV Environment separate.
I probably wouldn't have chosen dropdowns to select the different types of graphs - as dropdowns should be kept to a minimum for UX reasons.
If the specification didn't demand it I would have opted for checkboxes instead, and then I didn't "have to" to the filtering of the dropowns-
where you never can have two of the same values selected at the same time.

The performance was so good I didn't see a reason not to being able to show all the graphs even do we're selecting the entire dataset.
That's why I didn't enforce selecting what graphs to show initially, but rather filter them later if needed.

PRO Tip! To sort two columns of the table, press SHIFT and click on a column.


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

Now the demo application should be available by [clicking here http://localhost:8080](http://localhost:8080).

To build the production release:

```
In a terminal, from the project root:
yarn build

```

## Authors

* **Joacim Boive** - *Initial work* - [joacim-boive](https://github.com/joacim-boive)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## TODO

* Structure the application better
  * The majority of the JavaScript should live in separate files and be imported - now it's a bit messy.
  * Remove 
* Implement server-side-rendering on initial load using NEXT.js
  * It's prepared for it but didn't have time to implement.
* Remove reactstrap
  * This was more of a test - the benefit was questionable. Didn't have support for Flex grid for instance...
* Webpack
  * Implement
    * PurifyCSS
      * A lot of CSS from Bootstrap is now not used.
    * CommonsChunkPlugin
      * The Webpack build is now pretty slow because of this.
    
