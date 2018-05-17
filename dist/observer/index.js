'use strict';

var _Newsletter = require('./Newsletter');

var _Newsletter2 = _interopRequireDefault(_Newsletter);

var _Subscriber = require('./Subscriber');

var _Subscriber2 = _interopRequireDefault(_Subscriber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newsletter = new _Newsletter2.default();

var subscriber1 = new _Subscriber2.default('john@example.com');
var subscriber2 = new _Subscriber2.default('mark@example.com');
var subscriber3 = new _Subscriber2.default('andrew@example.com');

newsletter.add(subscriber1);
newsletter.add(subscriber2);
newsletter.add(subscriber3);
newsletter.remove(subscriber2);

newsletter.addBlogPost();