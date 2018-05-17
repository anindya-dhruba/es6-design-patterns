"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Newsletter = function () {
	function Newsletter() {
		_classCallCheck(this, Newsletter);

		this.subscribes = [];
	}

	_createClass(Newsletter, [{
		key: "add",
		value: function add(subscriber) {
			this.subscribes.push(subscriber);
		}
	}, {
		key: "remove",
		value: function remove(subscriber) {
			this.subscribes = this.subscribes.filter(function (item) {
				return item.email !== subscriber.email;
			});
		}
	}, {
		key: "send",
		value: function send() {
			this.subscribes.forEach(function (subscriber) {
				return subscriber.update();
			});
		}
	}, {
		key: "addBlogPost",
		value: function addBlogPost() {
			// ... add blog post
			this.send();
		}
	}]);

	return Newsletter;
}();

exports.default = Newsletter;