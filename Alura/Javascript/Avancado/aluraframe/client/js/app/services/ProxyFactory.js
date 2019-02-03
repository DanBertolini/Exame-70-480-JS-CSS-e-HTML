"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _typeof, _createClass, ProxyFactory;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("ProxyFactory", ProxyFactory = function () {
                function ProxyFactory() {
                    _classCallCheck(this, ProxyFactory);
                }

                _createClass(ProxyFactory, null, [{
                    key: "create",
                    value: function create(obj, props, callback) {
                        return new Proxy(obj, {
                            get: function get(target, prop, receiver) {
                                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
                                    return function () {
                                        Reflect.apply(target[prop], target, arguments);
                                        return callback(target);
                                    };
                                }

                                return Reflect.get(target, prop, receiver);
                            },
                            set: function set(target, prop, value, receiver) {
                                var setter = Reflect.set(target, prop, value, receiver);
                                if (props.includes(prop)) {
                                    callback(target);
                                }
                                return setter;
                            }
                        });
                    }
                }, {
                    key: "_isFunction",
                    value: function _isFunction(obj) {
                        return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == (typeof Function === "undefined" ? "undefined" : _typeof(Function));
                    }
                }]);

                return ProxyFactory;
            }());

            _export("ProxyFactory", ProxyFactory);
        }
    };
});
//# sourceMappingURL=ProxyFactory.js.map