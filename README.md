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

This project follows a rails style structure:

>Rails-style: separate folders for “actions”, “constants”, “reducers”, “containers”, and “components”

There are eight folders in the `/src` root:
  1. Actions - contains all actions (string constants) and action creators.
  2. Assets - all static assets and icons served by the app.
  2. Components - presentational components as outlined below.
  3. Configs - App initialisation and setup config
  4. Containers - container components as outlined below
  5. Helpers - a top level location for any helper functions used in multiple locations through the project
  6. Reducers - contains all the projects reducers including the root reducer loaded into the redux store. Reducers specify how the applications state changes in response to actions.
  7. Sagas - contains all sagas that handle asynchronous side effects such as data fetching.

### Components
Components are split into presentational components and container components. These two component types can be found in their respective folders.

#### Presentational Components:
  - Concerned with how things look
  - Allow containment via `this.props.children`
  ```
  <PresentationalComponent>
    <ChildComponent />
    <ChildComponent />
  </Presentational Component>
  ```
  - Are written as functional components unless they need state, lifecycle hooks or performance optimisations.

#### Container Components:
  - Are concerned with how things work
  - May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
  - Provide the data and behaviour to presentational or other container components.
  - Are often stateful, as they tend to serve as data sources.
  - Usually generated using higher order components such as connect()

* (See this gist)[https://gist.github.com/chantastic/fc9e3853464dffdb1e3c]
* (And this article)[https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0]
