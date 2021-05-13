webpackHotUpdate("main",{

/***/ "./src/tutorial_step.js":
/*!******************************!*\
  !*** ./src/tutorial_step.js ***!
  \******************************/
/*! exports provided: TutorialStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TutorialStep\", function() { return TutorialStep; });\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A single step in the tutorial.\n */\n\n/**\n * A step in the tutorial.\n */\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TutorialStep = /*#__PURE__*/function () {\n  /**\n   * Class for a single step in the tutorial.\n   * @param {string} text The text to show on the modal.\n   * @param {Function} doneCb The function to call when the step is completed\n   *     by the user.\n   * @constructor\n   */\n  function TutorialStep(text, doneCb) {\n    _classCallCheck(this, TutorialStep);\n\n    this.text = text;\n    this.goal = null;\n    this.textId = 'tutorialModalText';\n    this.doneCb = doneCb;\n  }\n\n  _createClass(TutorialStep, [{\n    key: \"show\",\n    value: function show() {\n      document.getElementById(this.textId).innerHTML = this.text;\n    }\n  }]);\n\n  return TutorialStep;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWxfc3RlcC5qcz8wODg1Il0sIm5hbWVzIjpbIlR1dG9yaWFsU3RlcCIsInRleHQiLCJkb25lQ2IiLCJnb2FsIiwidGV4dElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2E7QUFFYjtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ08sSUFBTUEsWUFBYjtBQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Usd0JBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtFLElBQUwsR0FBWSxJQUFaO0FBRUEsU0FBS0MsTUFBTCxHQUFjLG1CQUFkO0FBQ0EsU0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7O0FBZEg7QUFBQTtBQUFBLDJCQWdCUztBQUNMRyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBS0YsTUFBN0IsRUFBcUNHLFNBQXJDLEdBQWlELEtBQUtOLElBQXREO0FBQ0Q7QUFsQkg7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy90dXRvcmlhbF9zdGVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBzaW5nbGUgc3RlcCBpbiB0aGUgdHV0b3JpYWwuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIHN0ZXAgaW4gdGhlIHR1dG9yaWFsLlxuICovXG5leHBvcnQgY2xhc3MgVHV0b3JpYWxTdGVwIHtcbiAgLyoqXG4gICAqIENsYXNzIGZvciBhIHNpbmdsZSBzdGVwIGluIHRoZSB0dXRvcmlhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHRleHQgdG8gc2hvdyBvbiB0aGUgbW9kYWwuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVDYiBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBzdGVwIGlzIGNvbXBsZXRlZFxuICAgKiAgICAgYnkgdGhlIHVzZXIuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IodGV4dCwgZG9uZUNiKSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmdvYWwgPSBudWxsO1xuXG4gICAgdGhpcy50ZXh0SWQgPSAndHV0b3JpYWxNb2RhbFRleHQnO1xuICAgIHRoaXMuZG9uZUNiID0gZG9uZUNiO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnRleHRJZCkuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tutorial_step.js\n");

/***/ })

})