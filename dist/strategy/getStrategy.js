"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _FacebookStrategy = require("./strategies/FacebookStrategy");

var _FacebookStrategy2 = _interopRequireDefault(_FacebookStrategy);

var _GoogleStrategy = require("./strategies/GoogleStrategy");

var _GoogleStrategy2 = _interopRequireDefault(_GoogleStrategy);

var _TwitterStrategy = require("./strategies/TwitterStrategy");

var _TwitterStrategy2 = _interopRequireDefault(_TwitterStrategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (media) {
	switch (media) {
		case 'facebook':
			return new _FacebookStrategy2.default();
		case 'google':
			return new _GoogleStrategy2.default();
		case 'twitter':
			return new _TwitterStrategy2.default();
		default:
			throw new Error("Media " + media + " not found");
	}
};