(function () {

	var path = require('path');
	var Mocha = require('mocha');

	var args = process.argv;
	var params;
	var options;
	var tests;
	if (args.length < 3) {
		console.log('missing arguments');
		process.exit(1);
	}

	try {
		params = JSON.parse(args[2]);
	}
	catch (e) {
		console.log('cannot unserialise params');
		console.log(e);
	}

	if (!params) {
		console.log('missing params');
		process.exit(1);
	}

	options = params.options;
	tests = params.tests;

	if (!options) {
		console.log('missing options');
		process.exit(1);
	}

	if (!tests) {
		console.log('no tests specified');
		process.exit(1);
	}

	var mocha = new Mocha(options);

	if (typeof tests === 'string') {
		mocha.addFile(tests)
	}
	else {
		tests.forEach(mocha.addFile.bind(mocha));
	}
	
	mocha.run(function (errCount) {
		process.send({type: 'result', errCount: errCount});
		process.exit();
	});

})();