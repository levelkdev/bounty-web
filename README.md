# bounty-web

Bug bounty dapp web app

## Setup

`yarn install` - installs the right stuff

`yarn start` - runs it on http://localhost:8080

### IPFS Setup

[Install IPFS](https://ipfs.io/docs/install/)

`ipfs init` - to initialize IPFS node

Then configure IPFS to accept CORS requests

https://github.com/ipfs/js-ipfs-api#cors

```
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods "[\"GET\", \"POST\", \"PUT\", \"DELETE\"]"
```

## Development

### Stack

* [React](https://facebook.github.io/react/) v15.6 for UI
* [Mobx](https://mobx.js.org/) v3.2 for state management
* [Sass](http://sass-lang.com/) for styling
* [Font Awesome](http://fontawesome.io/) v4.7 for icons
* [react-intl](https://github.com/yahoo/react-intl) v2.3 for internationalization
* [dotenv](https://github.com/motdotla/dotenv) v4.0 for environment config

### Dev Stack

* [Webpack](https://webpack.js.org/) v3.4 for module bundling
* [standardJS](https://standardjs.com/) v10.0 for linting
* [jest](https://facebook.github.io/jest/) v20.0 for testing
* [enzyme](http://airbnb.io/enzyme/) v2.9 for component testing
* [sazerac](http://sazeracjs.com/) v0.4 for data driven testing

### Scripts

`yarn build` - builds `bundle.js` to `assets/`

`yarn test` - runs `jest` test runner

`yarn lint` - runs [standardjs](https://standardjs.com/) linter
