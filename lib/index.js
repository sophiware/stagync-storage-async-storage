'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StagyncAsyncStorage = function () {
  function StagyncAsyncStorage() {
    _classCallCheck(this, StagyncAsyncStorage);
  }

  _createClass(StagyncAsyncStorage, [{
    key: 'removeItem',
    value: function removeItem(item, callback) {
      _reactNative.AsyncStorage.removeItem(item, callback);
    }
  }, {
    key: 'getItem',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item, callback) {
        var result, value;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                result = null;
                _context.next = 4;
                return _reactNative.AsyncStorage.getItem(item);

              case 4:
                value = _context.sent;

                try {
                  result = JSON.parse(value);
                } catch (err) {
                  result = value;
                }

                callback(null, result);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

                callback(_context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function getItem(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getItem;
    }()
  }, {
    key: 'setItem',
    value: function setItem(item, value, callback) {
      var _value = null;

      try {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          _value = JSON.stringify(value);
        }
      } catch (e) {
        _value = value;
      }

      try {
        _reactNative.AsyncStorage.setItem(item, _value, callback);
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'mergeItem',
    value: function mergeItem(item, value, callback) {
      var _value = null;

      try {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          _value = JSON.stringify(value);
        }
      } catch (e) {
        _value = value;
      }

      try {
        _reactNative.AsyncStorage.mergeItem(item, _value, callback);
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'clear',
    value: function clear(callback) {
      _reactNative.AsyncStorage.clear(callback);
    }
  }]);

  return StagyncAsyncStorage;
}();

exports.default = StagyncAsyncStorage;