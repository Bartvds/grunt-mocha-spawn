# grunt-mocha-spawn

> run mocha tests in grunt using a node sub-process so async assertion failures won't crash grunt

This is temporary until regular mocha runners for grunt fix their async error bugs

Alternate to:

* [grunt-mocha-test](https://github.com/pghalliday/grunt-mocha-test)
* [grunt-simple-mocha](https://github.com/yaymukund/grunt-simple-mocha)
* [grunt-cafe-mocha](https://github.com/jdavis/grunt-cafe-mocha)
* [grunt-mocha-hack](https://github.com/gregrperkins/grunt-mocha-hack)

If you use `grunt` from inside your IDE and you have problems with the default `mocha` reporters' funky usage of terminal output commands then consider my basic [mocha-unfunk-reporter](https://github.com/Bartvds/mocha-unfunk-reporter) alterate that only uses plain console.logs().

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

* 0.1.0 - original release

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
