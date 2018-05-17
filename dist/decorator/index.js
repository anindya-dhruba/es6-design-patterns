'use strict';

var _Rice = require('./foodItems/Rice');

var _Rice2 = _interopRequireDefault(_Rice);

var _Fish = require('./foodItems/Fish');

var _Fish2 = _interopRequireDefault(_Fish);

var _Chicken = require('./foodItems/Chicken');

var _Chicken2 = _interopRequireDefault(_Chicken);

var _Juice = require('./foodItems/Juice');

var _Juice2 = _interopRequireDefault(_Juice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var food = new _Rice2.default();
food = new _Fish2.default(food);
food = new _Chicken2.default(food);
food = new _Juice2.default(food);

console.log('Items:', food.getDescription());
console.log('Price:', food.getPrice());