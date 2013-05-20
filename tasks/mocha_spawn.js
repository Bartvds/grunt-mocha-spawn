/*
 * grunt-execute
 * https://github.com/Bartvds/grunt-execute
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	var path = require('path');
	var child_process = require('child_process');

	grunt.registerMultiTask('mocha_spawn', 'spawn mocha in node', function () {

		var options = this.options({
		});

		if (this.filesSrc.length === 0) {
			grunt.log.ok('zero tests specified');
			return;
		}
		//var self = this;
		var done = this.async();
		var timer = Date.now();

		var tests = [];
		grunt.util._.forEach(this.filesSrc, function (src, callback) {

			src = path.resolve(src);
			if (!src) {
				grunt.fail.warn('undefined src parameter');
				return;
			}
			if (!grunt.file.exists(src)) {
				grunt.fail.warn('file does not exist ' + src);
				return;
			}
			tests.push(src);
		});
		if (tests.length === 0) {
			grunt.log.ok('zero resolving tests specified');
			return;
		}

		var runner = path.join(__dirname, '..', 'lib', 'runner.js');
		if (!grunt.file.exists(runner)) {
			grunt.fail.warn('cannot locate runner ' + runner);
		}
		var result;
		var params = {
			tests: tests,
			options: options
		};

		var child = child_process.fork(runner, [JSON.stringify(params)], {cwd: '.'});
		if (!child) {
			grunt.fail.warn('cannot spawn ' + child);
			done();
			return;
		}

		child.on('message', function (data) {
			if (data.type === 'result') {
				result = data;
			}
		});
		child.on('exit', function (code) {
			if (code > 0) {
				grunt.fail.warn(('error ' + code).red);
			}
			else if (!result) {
				grunt.fail.warn('missing result ' + code);
			}
			else if (typeof result.errCount === 'undefined') {
				grunt.fail.warn('invalid result ' + code);
			}
			else if (result.errCount > 0) {
				grunt.fail.warn(('failed ' + result.errCount).red + ' (' + (Date.now() - timer) + 'ms)');
			}
			else {
				grunt.log.writeln('ok '.white + ' (' + (Date.now() - timer) + 'ms)');

				//hurray!
				done();
			}
		});

		child.on('error', function (data) {
			child.removeAllListeners();
			grunt.fail.warn(('error ' + data).red);
		});

	});
};