# grunt-mocha-spawn

[![Dependency Status](https://gemnasium.com/Bartvds/grunt-mocha-spawn.png)](https://gemnasium.com/Bartvds/grunt-mocha-spawn) [![NPM version](https://badge.fury.io/js/grunt-mocha-spawn.png)](http://badge.fury.io/js/grunt-mocha-spawn)

> Run mocha tests in grunt using a node sub-process so async assertion failures won't crash grunt

**Deprecated!** This was a temporary module to bypass a bug in the regular grunt + mocha runners who all suffered a nasty bug that is solved by now.

You probably want to use the fully featured and tested [grunt-mocha-test](https://github.com/pghalliday/grunt-mocha-test) instead, unless you have specific reasons not to.

Alternates:

* [grunt-mocha-test](https://github.com/pghalliday/grunt-mocha-test) (solid with test and features)
* [grunt-simple-mocha](https://github.com/yaymukund/grunt-simple-mocha) (simple)
* [grunt-cafe-mocha](https://github.com/jdavis/grunt-cafe-mocha) (buggy)
* [grunt-mocha-hack](https://github.com/gregrperkins/grunt-mocha-hack) (fixed bug with hack)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mocha-spawn --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

````js
grunt.loadNpmTasks('grunt-mocha-spawn');
````

## The "mocha_spawn" task

### Overview
In your project's Gruntfile, add a section named `mocha_spawn` to the data object passed into `grunt.initConfig()`.

````js
grunt.initConfig({
  mocha_spawn: {
    options: {
      reporter: 'spec'
    },
    your_target: ['test/*.test.js']
  }
})
````

The options are passed as-is to the `mocha` module:

````js
grunt.initConfig({
  mocha_spawn: {
    options: {
      globals: ['should'],
      timeout: 3000,
      ignoreLeaks: false,
      grep: '*-test',
      ui: 'bdd',
      reporter: 'tap'
    },
    your_target: ['test/*.test.js']
  }
})
````

## Versions

* 0.1.2 - recommend grunt-mocha-test
* 0.1.1 - pass options through process/child channel instead of pushing JSON through cli
* 0.1.0 - original release

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
