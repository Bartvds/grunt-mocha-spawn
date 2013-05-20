/*
 * grunt-mocha-spawn
 * https://github.com/Bartvds/grunt-mocha-spawn
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'test/*/js',
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		clean: {
			tests: ['tmp']
		},
		mocha_spawn: {
			test: ['test/*.test.js'],
			options: {
				reporter: 'spec'
			}
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	//hehehehe
	grunt.registerTask('test', ['clean', 'mocha_spawn']);

	grunt.registerTask('default', ['jshint', 'test']);
};
