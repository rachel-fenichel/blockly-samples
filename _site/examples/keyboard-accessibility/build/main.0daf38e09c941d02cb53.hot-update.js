webpackHotUpdate("main",{

/***/ "./src/tutorial.js":
/*!*************************!*\
  !*** ./src/tutorial.js ***!
  \*************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\n/* harmony import */ var _tutorial_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial_step */ \"./src/tutorial_step.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromodal */ \"./node_modules/micromodal/dist/micromodal.es.js\");\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Multi-step tutorial using modals.\n */\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n/**\n * A multi-step tutorial for the accessible music game.\n */\n\nvar Tutorial = /*#__PURE__*/function () {\n  /**\n   * Class for a tutorial.\n   * @param {Blockly.WorkspaceSvg} workspace The workspace the user\n   *     will interact with.\n   * @constructor\n   */\n  function Tutorial(workspace) {\n    var _this = this;\n\n    _classCallCheck(this, Tutorial);\n\n    /**\n     * The id of the modal.\n     * @type {string}\n     */\n    this.modalId = 'tutorialModal';\n    /**\n     * The id of the tutorial text.\n     * @type {string}\n     */\n\n    this.stepTextId = this.modalId + 'Text';\n    /**\n     * The id of the next step button.\n     * @type {string}\n     */\n\n    this.stepButtonId = this.modalId + 'StepBtn';\n    /**\n     * The id of the hide modal button.\n     * @type {string}\n     */\n\n    this.hideButtonId = this.modalId + 'HideBtn';\n    /**\n     * An array of steps in the tutorial.\n     * @type {Array<!TutorialStep>}\n     */\n\n    this.steps = Tutorial.STEP_OBJECTS.map(function (obj) {\n      return new _tutorial_step__WEBPACK_IMPORTED_MODULE_0__[\"TutorialStep\"](obj.text, _this.stepTextId, _this.nextStep);\n    });\n    /**\n     * The index of the currently active step.\n     * @type {number}\n     */\n\n    this.curStepIndex = 0;\n    /**\n     * The currently active step.\n     * @type {TutorialStep}\n     */\n\n    this.curStep = this.steps[this.curStepIndex];\n    /**\n     * The Blockly workspace the user will interact with.\n     * @type {Blockly.WorkspaceSvg}\n     */\n\n    this.workspace = workspace;\n    this.curNode = null;\n  }\n  /**\n   * Initialize DOM and show.\n   */\n\n\n  _createClass(Tutorial, [{\n    key: \"init\",\n    value: function init() {\n      this.createDom();\n      this.addCallbacks();\n      micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show(this.modalId);\n      this.curStep.show();\n    }\n    /**\n     * Display the next step, or end the tutorial if there are no more steps.\n     */\n\n  }, {\n    key: \"nextStep\",\n    value: function nextStep() {\n      this.curStepIndex++;\n\n      if (this.curStepIndex < this.steps.length) {\n        this.curStep = this.steps[this.curStepIndex];\n        micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].show(this.modalId);\n        this.curStep.show();\n        this.stashCursor();\n      } else {\n        this.done();\n      }\n    }\n    /**\n     * End the tutorial.\n     */\n\n  }, {\n    key: \"done\",\n    value: function done() {\n      micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close(this.modalId);\n    }\n  }, {\n    key: \"stashCursor\",\n    value: function stashCursor() {\n      this.curNode = this.workspace.getCursor().getCurNode();\n      blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.disableKeyboardAccessibility();\n    }\n  }, {\n    key: \"popCursor\",\n    value: function popCursor() {\n      blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.enableKeyboardAccessibility();\n\n      if (this.curNode) {\n        this.workspace.getCursor().setCurNode(this.curNode);\n        _speaker__WEBPACK_IMPORTED_MODULE_3__[\"speaker\"].cancel();\n      }\n    }\n    /**\n     * Add necessary handlers for any buttons on the modal.\n     */\n\n  }, {\n    key: \"addCallbacks\",\n    value: function addCallbacks() {\n      var _this2 = this;\n\n      document.getElementById(this.stepButtonId).addEventListener('click', function () {\n        _this2.nextStep();\n      });\n      document.getElementById(this.hideButtonId).addEventListener('click', function (e) {\n        micromodal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].close(_this2.modalId);\n\n        _this2.popCursor();\n\n        Tutorial.STEP_OBJECTS[_this2.curStepIndex].onStart(_this2);\n\n        e.stopPropagation();\n        e.preventDefault();\n      });\n    }\n    /**\n     * Create the dom for the modal.\n     */\n\n  }, {\n    key: \"createDom\",\n    value: function createDom() {\n      document.getElementById(this.modalId).innerHTML = \"\\n     <div class=\\\"modal__overlay\\\" tabindex=\\\"-1\\\" data-micromodal-close>\\n      <div class=\\\"modal__container\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\"\\n        aria-labelledby=\\\"modal-1-title\\\">\\n        <header class=\\\"modal__header\\\">\\n          <button class=\\\"modal__close\\\" aria-label=\\\"Close modal\\\"\\n            id=\\\"tutorialCloseBtn\\\" data-micromodal-close></button>\\n        </header>\\n        <main class=\\\"modal__content\\\" id=\\\"modal-1-content\\\">\\n          <h2 class=\\\"modal__title\\\" id=\\\"\".concat(this.stepTextId, \"\\\"></h2>\\n        </main>\\n        <footer class=\\\"modal__footer\\\">\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Hide modal\\\"\\n            id=\\\"\").concat(this.hideButtonId, \"\\\">Hide modal</button>\\n          <button class=\\\"modal__btn modal__btn-primary\\\" aria-label=\\\"Next step\\\"\\n            id=\\\"\").concat(this.stepButtonId, \"\\\">Next step</button>\\n        </footer>\\n      </div>\\n    </div>\");\n    }\n  }]);\n\n  return Tutorial;\n}();\nTutorial.STEPS_TEXT = ['Enable keyboard nav by pressing Cmd+Shift+K', 'Press X to navigate to the first stack of blocks', 'Press Y to navigate to the first block', 'Press enter to mark the first block'];\nTutorial.STEP_OBJECTS = [{\n  text: 'Hit enter to go to the workspace and hear a description of the first block.',\n  onStart: function onStart(tutorial) {\n    window.setTimeout(function () {\n      tutorial.nextStep();\n    }, 2000);\n  }\n}, {\n  text: 'Press the down arrow key to go to the first connection on the block.',\n  onStart: function onStart(tutorial) {\n    var workspace = tutorial.workspace;\n\n    var listener = function listener(event) {\n      if (event.type === blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Events.MARKER_MOVE) {\n        var curNode = event.newNode;\n        var correctLocation = workspace.getTopBlocks()[0].inputList[0];\n\n        if (curNode) {\n          var location = curNode.getLocation();\n\n          if (location === correctLocation) {\n            // DO ALL THE THINGS\n            console.log('success!');\n            workspace.removeChangeListener(wrapper);\n            tutorial.nextStep();\n          }\n        }\n      }\n    }; // Add a shortcut in place of the down arrow shortcut.\n\n\n    var wrapper = workspace.addChangeListener(listener);\n  }\n}, {\n  text: 'Last step',\n  onStart: function onStart(tutorial) {}\n}]; // Blockly.navigation.registerToggleKeyboardNav = function () {\n//   /** @type {!Blockly.ShortcutRegistry.KeyboardShortcut} */\n//   var toggleKeyboardNavShortcut = {\n//     name: Blockly.navigation.actionNames.TOGGLE_KEYBOARD_NAV,\n//     callback: function (workspace) {\n//       if (workspace.keyboardAccessibilityMode) {\n//         Blockly.navigation.disableKeyboardAccessibility();\n//       } else {\n//         Blockly.navigation.enableKeyboardAccessibility();\n//       }\n//       return true;\n//     }\n//   };\n//   let shortcutName = Blockly.navigation.actionNames.TOGGLE_KEYBOARD_NAV;\n//   Blockly.ShortcutRegistry.registry.register(toggleKeyboardNavShortcut);\n//   var ctrlShiftK = Blockly.ShortcutRegistry.registry.createSerializedKey(\n//     Blockly.utils.KeyCodes.K,\n//     [Blockly.utils.KeyCodes.CTRL, Blockly.utils.KeyCodes.SHIFT]);\n//   Blockly.ShortcutRegistry.registry.removeKeyMapping(\n//     ctrlShiftK, shortcutName);\n// };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHV0b3JpYWwuanM/MjQzOCJdLCJuYW1lcyI6WyJUdXRvcmlhbCIsIndvcmtzcGFjZSIsIm1vZGFsSWQiLCJzdGVwVGV4dElkIiwic3RlcEJ1dHRvbklkIiwiaGlkZUJ1dHRvbklkIiwic3RlcHMiLCJTVEVQX09CSkVDVFMiLCJtYXAiLCJvYmoiLCJUdXRvcmlhbFN0ZXAiLCJ0ZXh0IiwibmV4dFN0ZXAiLCJjdXJTdGVwSW5kZXgiLCJjdXJTdGVwIiwiY3VyTm9kZSIsImNyZWF0ZURvbSIsImFkZENhbGxiYWNrcyIsIk1pY3JvTW9kYWwiLCJzaG93IiwibGVuZ3RoIiwic3Rhc2hDdXJzb3IiLCJkb25lIiwiY2xvc2UiLCJnZXRDdXJzb3IiLCJnZXRDdXJOb2RlIiwiQmxvY2tseSIsIm5hdmlnYXRpb24iLCJkaXNhYmxlS2V5Ym9hcmRBY2Nlc3NpYmlsaXR5IiwiZW5hYmxlS2V5Ym9hcmRBY2Nlc3NpYmlsaXR5Iiwic2V0Q3VyTm9kZSIsInNwZWFrZXIiLCJjYW5jZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwb3BDdXJzb3IiLCJvblN0YXJ0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJpbm5lckhUTUwiLCJTVEVQU19URVhUIiwidHV0b3JpYWwiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibGlzdGVuZXIiLCJldmVudCIsInR5cGUiLCJFdmVudHMiLCJNQVJLRVJfTU9WRSIsIm5ld05vZGUiLCJjb3JyZWN0TG9jYXRpb24iLCJnZXRUb3BCbG9ja3MiLCJpbnB1dExpc3QiLCJsb2NhdGlvbiIsImdldExvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUNoYW5nZUxpc3RlbmVyIiwid3JhcHBlciIsImFkZENoYW5nZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFD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LFVBQUlBLEtBQUssQ0FBQ0MsSUFBTixLQUFldEIsbURBQU8sQ0FBQ3VCLE1BQVIsQ0FBZUMsV0FBbEMsRUFBK0M7QUFDN0MsWUFBTW5DLE9BQU8sR0FBR2dDLEtBQUssQ0FBQ0ksT0FBdEI7QUFDQSxZQUFNQyxlQUFlLEdBQUduRCxTQUFTLENBQUNvRCxZQUFWLEdBQXlCLENBQXpCLEVBQTRCQyxTQUE1QixDQUFzQyxDQUF0QyxDQUF4Qjs7QUFDQSxZQUFJdkMsT0FBSixFQUFhO0FBQ1gsY0FBTXdDLFFBQVEsR0FBR3hDLE9BQU8sQ0FBQ3lDLFdBQVIsRUFBakI7O0FBQ0EsY0FBSUQsUUFBUSxLQUFLSCxlQUFqQixFQUFrQztBQUNoQztBQUNBSyxtQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBekQscUJBQVMsQ0FBQzBELG9CQUFWLENBQStCQyxPQUEvQjtBQUNBakIsb0JBQVEsQ0FBQy9CLFFBQVQ7QUFDRDtBQUNGO0FBQ0Y7QUFDRixLQWRELENBSDJCLENBbUIzQjs7O0FBQ0EsUUFBTWdELE9BQU8sR0FBRzNELFNBQVMsQ0FBQzRELGlCQUFWLENBQTRCZixRQUE1QixDQUFoQjtBQUNEO0FBeEJILENBVnNCLEVBb0N0QjtBQUNFbkMsTUFBSSxFQUFFLFdBRFI7QUFFRTJCLFNBQU8sRUFBRSxpQkFBVUssUUFBVixFQUFvQixDQUM1QjtBQUhILENBcENzQixDQUF4QixDLENBNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy90dXRvcmlhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE11bHRpLXN0ZXAgdHV0b3JpYWwgdXNpbmcgbW9kYWxzLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7VHV0b3JpYWxTdGVwfSBmcm9tICcuL3R1dG9yaWFsX3N0ZXAnO1xuaW1wb3J0IEJsb2NrbHkgZnJvbSAnYmxvY2tseS9jb3JlJztcbmltcG9ydCBNaWNyb01vZGFsIGZyb20gJ21pY3JvbW9kYWwnO1xuaW1wb3J0IHsgc3BlYWtlciB9IGZyb20gJy4vc3BlYWtlcic7XG5cbi8qKlxuICogQSBtdWx0aS1zdGVwIHR1dG9yaWFsIGZvciB0aGUgYWNjZXNzaWJsZSBtdXNpYyBnYW1lLlxuICovXG5leHBvcnQgY2xhc3MgVHV0b3JpYWwge1xuICAvKipcbiAgICogQ2xhc3MgZm9yIGEgdHV0b3JpYWwuXG4gICAqIEBwYXJhbSB7QmxvY2tseS5Xb3Jrc3BhY2VTdmd9IHdvcmtzcGFjZSBUaGUgd29ya3NwYWNlIHRoZSB1c2VyXG4gICAqICAgICB3aWxsIGludGVyYWN0IHdpdGguXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3Iod29ya3NwYWNlKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBtb2RhbC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kYWxJZCA9ICd0dXRvcmlhbE1vZGFsJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgdHV0b3JpYWwgdGV4dC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RlcFRleHRJZCA9IHRoaXMubW9kYWxJZCArICdUZXh0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgbmV4dCBzdGVwIGJ1dHRvbi5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RlcEJ1dHRvbklkID0gdGhpcy5tb2RhbElkICsgJ1N0ZXBCdG4nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBoaWRlIG1vZGFsIGJ1dHRvbi5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaGlkZUJ1dHRvbklkID0gdGhpcy5tb2RhbElkICsgJ0hpZGVCdG4nO1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2Ygc3RlcHMgaW4gdGhlIHR1dG9yaWFsLlxuICAgICAqIEB0eXBlIHtBcnJheTwhVHV0b3JpYWxTdGVwPn1cbiAgICAgKi9cbiAgICB0aGlzLnN0ZXBzID0gVHV0b3JpYWwuU1RFUF9PQkpFQ1RTLm1hcChcbiAgICAgICAgKG9iaikgPT4gbmV3IFR1dG9yaWFsU3RlcChvYmoudGV4dCwgdGhpcy5zdGVwVGV4dElkLCB0aGlzLm5leHRTdGVwKVxuICAgICk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgc3RlcC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuY3VyU3RlcEluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIHN0ZXAuXG4gICAgICogQHR5cGUge1R1dG9yaWFsU3RlcH1cbiAgICAgKi9cbiAgICB0aGlzLmN1clN0ZXAgPSB0aGlzLnN0ZXBzW3RoaXMuY3VyU3RlcEluZGV4XTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBCbG9ja2x5IHdvcmtzcGFjZSB0aGUgdXNlciB3aWxsIGludGVyYWN0IHdpdGguXG4gICAgICogQHR5cGUge0Jsb2NrbHkuV29ya3NwYWNlU3ZnfVxuICAgICAqL1xuICAgIHRoaXMud29ya3NwYWNlID0gd29ya3NwYWNlO1xuXG4gICAgdGhpcy5jdXJOb2RlID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIERPTSBhbmQgc2hvdy5cbiAgICovXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVEb20oKTtcbiAgICB0aGlzLmFkZENhbGxiYWNrcygpO1xuICAgIE1pY3JvTW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGxheSB0aGUgbmV4dCBzdGVwLCBvciBlbmQgdGhlIHR1dG9yaWFsIGlmIHRoZXJlIGFyZSBubyBtb3JlIHN0ZXBzLlxuICAgKi9cbiAgbmV4dFN0ZXAoKSB7XG4gICAgdGhpcy5jdXJTdGVwSW5kZXgrKztcbiAgICBpZiAodGhpcy5jdXJTdGVwSW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJTdGVwID0gdGhpcy5zdGVwc1t0aGlzLmN1clN0ZXBJbmRleF07XG4gICAgICBNaWNyb01vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICAgIHRoaXMuY3VyU3RlcC5zaG93KCk7XG4gICAgICB0aGlzLnN0YXNoQ3Vyc29yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmQgdGhlIHR1dG9yaWFsLlxuICAgKi9cbiAgZG9uZSgpIHtcbiAgICBNaWNyb01vZGFsLmNsb3NlKHRoaXMubW9kYWxJZCk7XG4gIH1cblxuICBzdGFzaEN1cnNvcigpIHtcbiAgICB0aGlzLmN1ck5vZGUgPSB0aGlzLndvcmtzcGFjZS5nZXRDdXJzb3IoKS5nZXRDdXJOb2RlKCk7XG4gICAgQmxvY2tseS5uYXZpZ2F0aW9uLmRpc2FibGVLZXlib2FyZEFjY2Vzc2liaWxpdHkoKTtcbiAgfVxuXG4gIHBvcEN1cnNvcigpIHtcbiAgICBCbG9ja2x5Lm5hdmlnYXRpb24uZW5hYmxlS2V5Ym9hcmRBY2Nlc3NpYmlsaXR5KCk7XG4gICAgaWYgKHRoaXMuY3VyTm9kZSkge1xuICAgICAgdGhpcy53b3Jrc3BhY2UuZ2V0Q3Vyc29yKCkuc2V0Q3VyTm9kZSh0aGlzLmN1ck5vZGUpO1xuICAgICAgc3BlYWtlci5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5lY2Vzc2FyeSBoYW5kbGVycyBmb3IgYW55IGJ1dHRvbnMgb24gdGhlIG1vZGFsLlxuICAgKi9cbiAgYWRkQ2FsbGJhY2tzKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc3RlcEJ1dHRvbklkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLm5leHRTdGVwKCk7XG4gICAgICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaGlkZUJ1dHRvbklkKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgTWljcm9Nb2RhbC5jbG9zZSh0aGlzLm1vZGFsSWQpO1xuICAgICAgICAgIHRoaXMucG9wQ3Vyc29yKCk7XG4gICAgICAgICAgVHV0b3JpYWwuU1RFUF9PQkpFQ1RTW3RoaXMuY3VyU3RlcEluZGV4XS5vblN0YXJ0KHRoaXMpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGRvbSBmb3IgdGhlIG1vZGFsLlxuICAgKi9cbiAgY3JlYXRlRG9tKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubW9kYWxJZCkuaW5uZXJIVE1MID0gYFxuICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX292ZXJsYXlcIiB0YWJpbmRleD1cIi0xXCIgZGF0YS1taWNyb21vZGFsLWNsb3NlPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19jb250YWluZXJcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIlxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC0xLXRpdGxlXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZSBtb2RhbFwiXG4gICAgICAgICAgICBpZD1cInR1dG9yaWFsQ2xvc2VCdG5cIiBkYXRhLW1pY3JvbW9kYWwtY2xvc2U+PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBjbGFzcz1cIm1vZGFsX19jb250ZW50XCIgaWQ9XCJtb2RhbC0xLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbF9fdGl0bGVcIiBpZD1cIiR7dGhpcy5zdGVwVGV4dElkfVwiPjwvaDI+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cIm1vZGFsX19mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2J0biBtb2RhbF9fYnRuLXByaW1hcnlcIiBhcmlhLWxhYmVsPVwiSGlkZSBtb2RhbFwiXG4gICAgICAgICAgICBpZD1cIiR7dGhpcy5oaWRlQnV0dG9uSWR9XCI+SGlkZSBtb2RhbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fYnRuIG1vZGFsX19idG4tcHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJOZXh0IHN0ZXBcIlxuICAgICAgICAgICAgaWQ9XCIke3RoaXMuc3RlcEJ1dHRvbklkfVwiPk5leHQgc3RlcDwvYnV0dG9uPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIH1cbn1cblxuVHV0b3JpYWwuU1RFUFNfVEVYVCA9IFtcbiAgJ0VuYWJsZSBrZXlib2FyZCBuYXYgYnkgcHJlc3NpbmcgQ21kK1NoaWZ0K0snLFxuICAnUHJlc3MgWCB0byBuYXZpZ2F0ZSB0byB0aGUgZmlyc3Qgc3RhY2sgb2YgYmxvY2tzJyxcbiAgJ1ByZXNzIFkgdG8gbmF2aWdhdGUgdG8gdGhlIGZpcnN0IGJsb2NrJyxcbiAgJ1ByZXNzIGVudGVyIHRvIG1hcmsgdGhlIGZpcnN0IGJsb2NrJyxcbl07XG5cblR1dG9yaWFsLlNURVBfT0JKRUNUUyA9IFtcbiAge1xuICAgIHRleHQ6XG4gICAgICAnSGl0IGVudGVyIHRvIGdvIHRvIHRoZSB3b3Jrc3BhY2UgYW5kIGhlYXIgYSBkZXNjcmlwdGlvbiBvZiB0aGUgZmlyc3QgYmxvY2suJyxcbiAgICBvblN0YXJ0OiBmdW5jdGlvbih0dXRvcmlhbCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0dXRvcmlhbC5uZXh0U3RlcCgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRleHQ6XG4gICAgICAnUHJlc3MgdGhlIGRvd24gYXJyb3cga2V5IHRvIGdvIHRvIHRoZSBmaXJzdCBjb25uZWN0aW9uIG9uIHRoZSBibG9jay4nLFxuICAgIG9uU3RhcnQ6IGZ1bmN0aW9uICh0dXRvcmlhbCkge1xuICAgICAgY29uc3Qgd29ya3NwYWNlID0gdHV0b3JpYWwud29ya3NwYWNlO1xuXG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBCbG9ja2x5LkV2ZW50cy5NQVJLRVJfTU9WRSkge1xuICAgICAgICAgIGNvbnN0IGN1ck5vZGUgPSBldmVudC5uZXdOb2RlO1xuICAgICAgICAgIGNvbnN0IGNvcnJlY3RMb2NhdGlvbiA9IHdvcmtzcGFjZS5nZXRUb3BCbG9ja3MoKVswXS5pbnB1dExpc3RbMF07XG4gICAgICAgICAgaWYgKGN1ck5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gY3VyTm9kZS5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09PSBjb3JyZWN0TG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgLy8gRE8gQUxMIFRIRSBUSElOR1NcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MhJyk7XG4gICAgICAgICAgICAgIHdvcmtzcGFjZS5yZW1vdmVDaGFuZ2VMaXN0ZW5lcih3cmFwcGVyKTtcbiAgICAgICAgICAgICAgdHV0b3JpYWwubmV4dFN0ZXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGEgc2hvcnRjdXQgaW4gcGxhY2Ugb2YgdGhlIGRvd24gYXJyb3cgc2hvcnRjdXQuXG4gICAgICBjb25zdCB3cmFwcGVyID0gd29ya3NwYWNlLmFkZENoYW5nZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGV4dDogJ0xhc3Qgc3RlcCcsXG4gICAgb25TdGFydDogZnVuY3Rpb24gKHR1dG9yaWFsKSB7XG4gICAgfSxcbiAgfSxcbl1cblxuXG4vLyBCbG9ja2x5Lm5hdmlnYXRpb24ucmVnaXN0ZXJUb2dnbGVLZXlib2FyZE5hdiA9IGZ1bmN0aW9uICgpIHtcbi8vICAgLyoqIEB0eXBlIHshQmxvY2tseS5TaG9ydGN1dFJlZ2lzdHJ5LktleWJvYXJkU2hvcnRjdXR9ICovXG4vLyAgIHZhciB0b2dnbGVLZXlib2FyZE5hdlNob3J0Y3V0ID0ge1xuLy8gICAgIG5hbWU6IEJsb2NrbHkubmF2aWdhdGlvbi5hY3Rpb25OYW1lcy5UT0dHTEVfS0VZQk9BUkRfTkFWLFxuLy8gICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAod29ya3NwYWNlKSB7XG4vLyAgICAgICBpZiAod29ya3NwYWNlLmtleWJvYXJkQWNjZXNzaWJpbGl0eU1vZGUpIHtcbi8vICAgICAgICAgQmxvY2tseS5uYXZpZ2F0aW9uLmRpc2FibGVLZXlib2FyZEFjY2Vzc2liaWxpdHkoKTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIEJsb2NrbHkubmF2aWdhdGlvbi5lbmFibGVLZXlib2FyZEFjY2Vzc2liaWxpdHkoKTtcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgfTtcbi8vICAgbGV0IHNob3J0Y3V0TmFtZSA9IEJsb2NrbHkubmF2aWdhdGlvbi5hY3Rpb25OYW1lcy5UT0dHTEVfS0VZQk9BUkRfTkFWO1xuXG4vLyAgIEJsb2NrbHkuU2hvcnRjdXRSZWdpc3RyeS5yZWdpc3RyeS5yZWdpc3Rlcih0b2dnbGVLZXlib2FyZE5hdlNob3J0Y3V0KTtcbi8vICAgdmFyIGN0cmxTaGlmdEsgPSBCbG9ja2x5LlNob3J0Y3V0UmVnaXN0cnkucmVnaXN0cnkuY3JlYXRlU2VyaWFsaXplZEtleShcbi8vICAgICBCbG9ja2x5LnV0aWxzLktleUNvZGVzLkssXG4vLyAgICAgW0Jsb2NrbHkudXRpbHMuS2V5Q29kZXMuQ1RSTCwgQmxvY2tseS51dGlscy5LZXlDb2Rlcy5TSElGVF0pO1xuLy8gICBCbG9ja2x5LlNob3J0Y3V0UmVnaXN0cnkucmVnaXN0cnkucmVtb3ZlS2V5TWFwcGluZyhcbi8vICAgICBjdHJsU2hpZnRLLCBzaG9ydGN1dE5hbWUpO1xuLy8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/tutorial.js\n");

/***/ })

})