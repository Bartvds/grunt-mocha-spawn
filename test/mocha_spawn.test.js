var expect = require('expect.js');

describe('async tests', function () {
	it('async passes', function (done) {
		setTimeout(function () {
			expect(true).to.equal(true);
			done();
		}, 10);
	});
	it('async fail:', function (done) {
		setTimeout(function () {
			expect(true).to.equal(false);
			done();
		}, 10);
	});
});
describe('kitteh', function () {
	describe('can', function () {
		it('meow', function () {
			expect(true, 'once').to.equal(true);
		});
		describe('has', function () {
			it('milk', function () {
				expect(true).to.equal(true);
			});
			it('cheeseburgers', function () {
				expect(true).to.equal(true);
				expect(true).to.equal(true);
				expect(true).to.equal(true);
			});
			describe('some', function () {
				it('yarn', function () {
					expect(2).to.equal(2);
				});
				it('hats', function () {
					expect('hat').to.equal('silly');
				});
			});
			describe('no', function () {
				it('dogs', function () {
					expect(true).to.equal(true);
					expect('dogs').to.equal('not here');
				});
			});
		});
	});
});
