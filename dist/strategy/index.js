'use strict';

var _getStrategy = require('./getStrategy');

var _getStrategy2 = _interopRequireDefault(_getStrategy);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginRequest = function loginRequest(media) {
	try {
		var strategy = (0, _getStrategy2.default)(media);

		new _Login2.default(strategy).login().then(loginSuccess).catch(loginFailure);
	} catch (e) {
		console.log(e.message);
	}
};

var loginSuccess = function loginSuccess(data) {
	console.log('SUCCESS: log in completed');
	console.log('DATA:', data);
};

var loginFailure = function loginFailure(err) {
	console.log('FAILURE: could not login');
	console.log('MESSAGE:', err);
};

// facebook/google/twitter
loginRequest('facebook');