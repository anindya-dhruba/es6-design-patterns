'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GoogleStrategy = function () {
	function GoogleStrategy() {
		_classCallCheck(this, GoogleStrategy);

		this.loginSuccess = false;
	}

	_createClass(GoogleStrategy, [{
		key: 'login',
		value: function login() {
			var _this = this;

			console.log('REQUEST: logging in with google');

			return new Promise(function (resolve, reject) {
				return setTimeout(function () {

					if (_this.loginSuccess) {
						return resolve({
							id: 1,
							name: 'John Doe'
						});
					}

					return reject({
						email: 'Email is required'
					});
				}, 2000);
			});
		}
	}]);

	return GoogleStrategy;
}();

exports.default = GoogleStrategy;