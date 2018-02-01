# Project Structure

> A clear, opinionated guideline to support developers styling the Colab SPA..

## Install

This step by step procedure on how to run project-structure locally.

### Clone this repository
```sh
$ cd <favorite directory>
$ git clone git@github.com:Hawk94/project-structure.git
```

### How to make it work locally

This require the following to run this repository locally:
* node.js
* npm
* yarn

```sh
$ node -v # Check if installed, it will show the currrent version.
$ npm -v # Check if installed, it will show the currrent version.
$ yarn --version # Check if installed, it will show the currrent version
```
Inside that directory, you can run several commands:

Inside that directory, you can run several commands:

* `yarn start`
    * Starts the development server.

* `yarn build`
    * Bundles the app into static files for production.

* `yarn test`
    * Starts the test runner.

* `yarn eject`
    * Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

* `yarn lint`
    * Checks code for any violations of the prettier rules.

* `yarn lint-fix`
    * Fixes code violations automatically.


You begin by typing:
```sh
$ cd project-structure
$ yarn install
$ yarn start
```

## JS Code Guides

See more on [Colab JS style guide](https://github.com/Hawk94/project-structure/CSS_GUIDE.md)
