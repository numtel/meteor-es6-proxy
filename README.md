# numtel:es6-proxy [![Build Status](https://travis-ci.org/numtel/meteor-es6-proxy.svg?branch=master)](https://travis-ci.org/numtel/meteor-es6-proxy)

Iron:Router Plugin for rendering transpiled ES6 -> ES5 to the client.

## Installation

This package has been removed from Atmosphere and has been succeeded by other packages:

* [`numtel:privatesources` package](https://github.com/numtel/meteor-privatesources) - Create bundles for lazy-loading components, with authentication
* [`numtel:publicsources` package](https://github.com/numtel/meteor-publicsources) - Same except without authentication

If you really must use this, clone the repo.

Activate the plugin on the server-side of your application:
```javascript
Router.plugin('es6Proxy', {
  path: 'components' // Corresponds to private/components in your app directory
  debug: true // Console.log path and syntax errors
});
```

ES6 source files are loaded from the `private` directory of your application. Specifying the `path` option is very important to prevent exposing the entire `private` directory to the client.

You may then load files (most-likely, using AJAX) from that directory using the following route:
```
/_6to5?path=<filename>
```

## TODO

* `allow()` function for setting permissions on individual files/paths
* Option to configure route URL (currently `_6to5`)
* Minify output on production
* Cache processed results for between clients
* Hot code push?

## Resources

* [On-Demand Template Example](https://github.com/numtel/meteor-component-example) - Use this package to load templates on-demand with `iron:router`.
* [sharlon:6to5](https://github.com/sbalbalosa/meteor-6to5) - Use ES6 in your main application source files
* [6to5.org](http://6to5.org) - Core package powering ES6 -> ES5 transpiling

## License

MIT
