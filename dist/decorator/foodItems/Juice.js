"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FoodItem2 = require("../FoodItem");

var _FoodItem3 = _interopRequireDefault(_FoodItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Juice = function (_FoodItem) {
	_inherits(Juice, _FoodItem);

	function Juice(food) {
		_classCallCheck(this, Juice);

		var _this = _possibleConstructorReturn(this, (Juice.__proto__ || Object.getPrototypeOf(Juice)).call(this));

		_this.food = food;
		return _this;
	}

	_createClass(Juice, [{
		key: "getDescription",
		value: function getDescription() {
			return this.food.getDescription() + ', Juice';
		}
	}, {
		key: "getPrice",
		value: function getPrice() {
			return this.food.getPrice() + 5;
		}
	}]);

	return Juice;
}(_FoodItem3.default);

exports.default = Juice;