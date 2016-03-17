# Simple Vanilla-HMR Redux Boilerplate

*ATTRIBUTION* I borrowed heavily from tsaiDavid's excellent [boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate)

I created this project in response to Dan Abramov's medium [article](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.i8niskmoz) about react-transform hmr, and how it is not needed in projects with global state (Redux).

I followed the steps he suggests in his [pull-request](https://github.com/reactjs/redux/pull/1455) about how to use regular HMR with Redux.

***

### Overview

Designed to keep style/structure as un-opinionated as possible,  to offer you - the user - as much creativity and flexibility when it comes to your needs. As this is still a **work-in-progress**, do reach out if you have suggestions, fixes, etc!

This project features a super simple UI - just for you to see how everything is wired up, using the classic counter example.

### Features

##### Basic:
  - React + Redux
  - React Router
  - Babel 6 w/ basic presets and transform (*NO react-transform-hmre*)
  - Webpack w/ basic dev and prod configurations
  - Express development server; easily roll out a production enabled server of your own
  - Eslint w/ basic configs
  - Redux DevTools + Logger middleware - easily removable/replaceable based on your needs
  - *stock vanilla hot module reload*
  - *sass compilation*

### Requirements
  - `node 5.0.0` and higher!
    - [*you can use a version manager like `n`*](https://github.com/tj/n)

***

### FAQ

  - Why another React and Redux boilerplate?
  > Abramov's commentary on react-transform was relatively recent, so I incorporated this change into my favorite boilerplate. I was also setting up Redux for a project and needed somewhere to start.

  - Why not use WebpackDevServer?
  > The included `devServer.js` is a Node/Express server - mainly because most people will end up creating applications that rely on a Node server! Using the `webpack-dev-middleware` and `webpack-hot-middleware` allow us to get syntax errors displayed in an overlay, which using WebpackDevServer doesn't allow for.

### Usage

##### Getting Started:

To begin, fork this repo and then clone those contents down!

Ideally, fork this boilerplate, then clone.
```
$ git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/simple-redux-boilerplate.git
```

Install required dependencies.
(*Did you make sure you have the right version of Node?*)
```
npm install
```

Run development server, complete with DevTools and related configuration.
```
npm run dev
```

You're now ready to get working! *(enter command or visit via browser directly)*
```
open http://localhost:3005/
```

***

##### Next Steps & Other Notes:

Now that your development server is up and running, you will see that you have your Redux DevTools available for you to use. The keyboard shortcuts available follow the generally accepted config - but you're free to make changes to them here: `containers/DevTools.js`.

***To toggle the DevTool panel during development:***
<kbd>CTRL</kbd> + <kbd>H</kbd>

***Change the DevTool panel's position during development:***
<kbd>CTRL</kbd> + <kbd>Q</kbd>

***

### Style Guide

Code style can be a tricky subject - I've instead decided to rely on the ever trustworthy configurations that AirBnb follows!

This project relies on `eslint-config-airbnb`.
Learn more here: [AirBnb Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

***

### Credits

>This boilerplate is initially based on tsaiDavid's awesome [simple-redux-boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate).

This project supports [Babel 6](https://github.com/babel/babel)
