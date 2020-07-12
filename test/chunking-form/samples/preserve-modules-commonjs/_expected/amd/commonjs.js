define(['exports', 'external', './other'], function (exports, external, other) { 'use strict';

	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex : { 'default': ex }; }

	var external__default = _interopDefault(external);

	const { value } = other.default;

	console.log(external__default.default, value);

	var commonjs = 42;

	exports.__moduleExports = commonjs;
	exports.default = commonjs;

	Object.defineProperty(exports, '__esModule', { value: true });

});
