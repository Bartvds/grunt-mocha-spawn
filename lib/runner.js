var path = require('path');
var Mocha = require('mocha');

var params;
var options;

//safety check
var timeOut = setInterval(function () {
	console.log('timed out: no test send');
	process.exit(1);
}, 1000);

process.send({type: 'init'});

process.on('message', function (e) {
	if (e.type == 'tests') {
		clearTimeout(timeOut);

		if (!e.options) {
			console.log('missing options');
			process.exit(1);
		}
		if (!e.tests) {
			console.log('no tests specified');
			process.exit(1);
		}

		var mocha = new Mocha(e.options);

		if (typeof e.tests === 'string') {
			mocha.addFile(e.tests)
		}
		else {
			e.tests.forEach(mocha.addFile.bind(mocha));
		}
		mocha.run(function (errCount) {
			process.send({type: 'result', errCount: errCount});
			process.exit();
		});
	}
});
