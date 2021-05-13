webpackHotUpdate("main",{

/***/ "./src/overrides.js":
/*!**************************!*\
  !*** ./src/overrides.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockly/core */ \"./node_modules/blockly/dist/core-browser.js\");\n/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker */ \"./src/speaker.js\");\n/**\n * @license\n * Copyright 2020 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview The class representing a line cursor.\n * A line cursor traverses the blocks as if they were\n * lines of code in a text editor.\n * Previous and next go up and down lines. In and out go\n * through the elements in a line.\n * @author aschmiedt@google.com (Abby Schmiedt)\n */\n\n\n\n\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.handleEnterForWS_ = function (workspace) {\n  var cursor = workspace.getCursor();\n  var curNode = cursor.getCurNode();\n  var nodeType = curNode.getType();\n\n  if (nodeType == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.FIELD && curNode.getLocation().isClickable()) {\n    // TODO: Had to override so I could add this speaker in.\n    _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak('Use next and previous to read off your options.');\n\n    /** @type {!Blockly.Field} */\n    curNode.getLocation().showEditor();\n  } else if (curNode.isConnection() || nodeType == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.WORKSPACE) {\n    blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.markAtCursor_();\n  } else if (nodeType == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.BLOCK) {\n    blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.warn_('Cannot mark a block.');\n  } else if (nodeType == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.STACK) {\n    blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.warn_('Cannot mark a stack.');\n  }\n};\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.FieldDropdown.prototype.onBlocklyAction = function (action) {\n  var fieldNextOptions = 'To select this option hit enter';\n\n  if (this.menu_) {\n    switch (action.name) {\n      case blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.PREVIOUS:\n        this.menu_.highlightPrevious();\n        _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(this.menu_.highlightedItem_.content_.alt, true);\n        _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(fieldNextOptions);\n        return true;\n\n      case blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.navigation.actionNames.NEXT:\n        this.menu_.highlightNext(); // TODO: Needed to override so that I could speak out the location when\n        // it changes.\n\n        _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(this.menu_.highlightedItem_.content_.alt, true);\n        _speaker__WEBPACK_IMPORTED_MODULE_1__[\"speaker\"].speak(fieldNextOptions);\n        return true;\n\n      default:\n        return false;\n    }\n  }\n\n  return blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.FieldDropdown.superClass_.onBlocklyAction.call(this, action);\n};\n\nblockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Block.prototype.toString = function (opt_maxLength, opt_emptyToken) {\n  var text = [];\n  var emptyFieldPlaceholder = opt_emptyToken || '?'; // Temporarily set flag to navigate to all fields.\n\n  var prevNavigateFields = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.NAVIGATE_ALL_FIELDS;\n  blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.NAVIGATE_ALL_FIELDS = true;\n  var node = blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.createBlockNode(this);\n  var rootNode = node;\n  /**\n   * Whether or not to add parentheses around an input.\n   * @param {!Blockly.Connection} connection The connection.\n   * @return {boolean} True if we should add parentheses around the input.\n   */\n\n  function shouldAddParentheses(connection) {\n    var checks = connection.getCheck();\n\n    if (!checks && connection.targetConnection) {\n      checks = connection.targetConnection.getCheck();\n    }\n\n    return !!checks && (checks.indexOf('Boolean') != -1 || checks.indexOf('Number') != -1);\n  }\n  /**\n   * Check that we haven't circled back to the original root node.\n   */\n\n\n  function checkRoot() {\n    if (node && node.getType() == rootNode.getType() && node.getLocation() == rootNode.getLocation()) {\n      node = null;\n    }\n  } // Traverse the AST building up our text string.\n\n\n  while (node) {\n    switch (node.getType()) {\n      case blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.INPUT:\n        var connection =\n        /** @type {!Blockly.Connection} */\n        node.getLocation();\n\n        if (!node.in()) {\n          text.push(emptyFieldPlaceholder);\n        } else if (shouldAddParentheses(connection)) {\n          text.push('(');\n        }\n\n        break;\n\n      case blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.FIELD:\n        var field =\n        /** @type {Blockly.Field} */\n        node.getLocation();\n\n        if (field.name != blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Block.COLLAPSED_FIELD_NAME) {\n          text.push(field.getText());\n        }\n\n        break;\n    }\n\n    var current = node;\n    node = current.in() || current.next(); // TODO: This only works in our specific use case of having a block with a single statement connection.\n\n    if (node && node.getType() == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.INPUT && node.getLocation().type === blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.NEXT_STATEMENT) {\n      node = null;\n    }\n\n    if (!node) {\n      // Can't go in or next, keep going out until we can go next.\n      node = current.out();\n      checkRoot();\n\n      while (node && !node.next()) {\n        node = node.out();\n        checkRoot(); // If we hit an input on the way up, possibly close out parentheses.\n\n        if (node && node.getType() == blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.types.INPUT && shouldAddParentheses(\n        /** @type {!Blockly.Connection} */\n        node.getLocation())) {\n          text.push(')');\n        }\n      }\n\n      if (node) {\n        node = node.next();\n      }\n    }\n  } // Restore state of NAVIGATE_ALL_FIELDS.\n\n\n  blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.ASTNode.NAVIGATE_ALL_FIELDS = prevNavigateFields; // Run through our text array and simplify expression to remove parentheses\n  // around single field blocks.\n\n  for (var i = 2, l = text.length; i < l; i++) {\n    if (text[i - 2] == '(' && text[i] == ')') {\n      text[i - 2] = text[i - 1];\n      text.splice(i - 1, 2);\n      l -= 2;\n    }\n  } // Join the text array, removing spaces around added paranthesis.\n\n\n  text = text.join(' ').replace(/(\\() | (\\))/gmi, '$1$2').trim() || '???';\n\n  if (opt_maxLength) {\n    // TODO: Improve truncation so that text from this block is given priority.\n    // E.g. \"1+2+3+4+5+6+7+8+9=0\" should be \"...6+7+8+9=0\", not \"1+2+3+4+5...\".\n    // E.g. \"1+2+3+4+5=6+7+8+9+0\" should be \"...4+5=6+7...\".\n    if (text.length > opt_maxLength) {\n      text = text.substring(0, opt_maxLength - 3) + '...';\n    }\n  }\n\n  return text;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb3ZlcnJpZGVzLmpzPzFjYjQiXSwibmFtZXMiOlsiQmxvY2tseSIsIm5hdmlnYXRpb24iLCJoYW5kbGVFbnRlckZvcldTXyIsIndvcmtzcGFjZSIsImN1cnNvciIsImdldEN1cnNvciIsImN1ck5vZGUiLCJnZXRDdXJOb2RlIiwibm9kZVR5cGUiLCJnZXRUeXBlIiwiQVNUTm9kZSIsInR5cGVzIiwiRklFTEQiLCJnZXRMb2NhdGlvbiIsImlzQ2xpY2thYmxlIiwic3BlYWtlciIsInNwZWFrIiwic2hvd0VkaXRvciIsImlzQ29ubmVjdGlvbiIsIldPUktTUEFDRSIsIm1hcmtBdEN1cnNvcl8iLCJCTE9DSyIsIndhcm5fIiwiU1RBQ0siLCJGaWVsZERyb3Bkb3duIiwicHJvdG90eXBlIiwib25CbG9ja2x5QWN0aW9uIiwiYWN0aW9uIiwiZmllbGROZXh0T3B0aW9ucyIsIm1lbnVfIiwibmFtZSIsImFjdGlvbk5hbWVzIiwiUFJFVklPVVMiLCJoaWdobGlnaHRQcmV2aW91cyIsImhpZ2hsaWdodGVkSXRlbV8iLCJjb250ZW50XyIsImFsdCIsIk5FWFQiLCJoaWdobGlnaHROZXh0Iiwic3VwZXJDbGFzc18iLCJjYWxsIiwiQmxvY2siLCJ0b1N0cmluZyIsIm9wdF9tYXhMZW5ndGgiLCJvcHRfZW1wdHlUb2tlbiIsInRleHQiLCJlbXB0eUZpZWxkUGxhY2Vob2xkZXIiLCJwcmV2TmF2aWdhdGVGaWVsZHMiLCJOQVZJR0FURV9BTExfRklFTERTIiwibm9kZSIsImNyZWF0ZUJsb2NrTm9kZSIsInJvb3ROb2RlIiwic2hvdWxkQWRkUGFyZW50aGVzZXMiLCJjb25uZWN0aW9uIiwiY2hlY2tzIiwiZ2V0Q2hlY2siLCJ0YXJnZXRDb25uZWN0aW9uIiwiaW5kZXhPZiIsImNoZWNrUm9vdCIsIklOUFVUIiwiaW4iLCJwdXNoIiwiZmllbGQiLCJDT0xMQVBTRURfRklFTERfTkFNRSIsImdldFRleHQiLCJjdXJyZW50IiwibmV4dCIsInR5cGUiLCJORVhUX1NUQVRFTUVOVCIsIm91dCIsImkiLCJsIiwibGVuZ3RoIiwic3BsaWNlIiwiam9pbiIsInJlcGxhY2UiLCJ0cmltIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhOztBQUViO0FBQ0E7O0FBR0FBLG1EQUFPLENBQUNDLFVBQVIsQ0FBbUJDLGlCQUFuQixHQUF1QyxVQUFTQyxTQUFULEVBQW9CO0FBQ3pELE1BQU1DLE1BQU0sR0FBR0QsU0FBUyxDQUFDRSxTQUFWLEVBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxFQUFoQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsT0FBTyxDQUFDRyxPQUFSLEVBQWpCOztBQUNBLE1BQUlELFFBQVEsSUFBSVIsbURBQU8sQ0FBQ1UsT0FBUixDQUFnQkMsS0FBaEIsQ0FBc0JDLEtBQWxDLElBQ0FOLE9BQU8sQ0FBQ08sV0FBUixHQUFzQkMsV0FBdEIsRUFESixFQUN5QztBQUN2QztBQUNBQyxvREFBTyxDQUFDQyxLQUFSLENBQWMsaURBQWQ7O0FBQ0M7QUFBOEJWLFdBQU8sQ0FBQ08sV0FBUixFQUEvQixDQUF1REksVUFBdkQ7QUFDRCxHQUxELE1BS08sSUFBSVgsT0FBTyxDQUFDWSxZQUFSLE1BQ1BWLFFBQVEsSUFBSVIsbURBQU8sQ0FBQ1UsT0FBUixDQUFnQkMsS0FBaEIsQ0FBc0JRLFNBRC9CLEVBQzBDO0FBQy9DbkIsdURBQU8sQ0FBQ0MsVUFBUixDQUFtQm1CLGFBQW5CO0FBQ0QsR0FITSxNQUdBLElBQUlaLFFBQVEsSUFBSVIsbURBQU8sQ0FBQ1UsT0FBUixDQUFnQkMsS0FBaEIsQ0FBc0JVLEtBQXRDLEVBQTZDO0FBQ2xEckIsdURBQU8sQ0FBQ0MsVUFBUixDQUFtQnFCLEtBQW5CLENBQXlCLHNCQUF6QjtBQUNELEdBRk0sTUFFQSxJQUFJZCxRQUFRLElBQUlS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QixNQUFMLENBQVlILENBQUMsR0FBRyxDQUFoQixFQUFtQixDQUFuQjtBQUNBQyxPQUFDLElBQUksQ0FBTDtBQUNEO0FBQ0YsR0EzRndFLENBNkZ6RTs7O0FBQ0ExQixNQUFJLEdBQUdBLElBQUksQ0FBQzZCLElBQUwsQ0FBVSxHQUFWLEVBQWVDLE9BQWYsQ0FBdUIsZ0JBQXZCLEVBQXlDLE1BQXpDLEVBQWlEQyxJQUFqRCxNQUEyRCxLQUFsRTs7QUFDQSxNQUFJakMsYUFBSixFQUFtQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxRQUFJRSxJQUFJLENBQUMyQixNQUFMLEdBQWM3QixhQUFsQixFQUFpQztBQUMvQkUsVUFBSSxHQUFHQSxJQUFJLENBQUNnQyxTQUFMLENBQWUsQ0FBZixFQUFrQmxDLGFBQWEsR0FBRyxDQUFsQyxJQUF1QyxLQUE5QztBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0UsSUFBUDtBQUNELENBeEdEIiwiZmlsZSI6Ii4vc3JjL292ZXJyaWRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZSBjbGFzcyByZXByZXNlbnRpbmcgYSBsaW5lIGN1cnNvci5cbiAqIEEgbGluZSBjdXJzb3IgdHJhdmVyc2VzIHRoZSBibG9ja3MgYXMgaWYgdGhleSB3ZXJlXG4gKiBsaW5lcyBvZiBjb2RlIGluIGEgdGV4dCBlZGl0b3IuXG4gKiBQcmV2aW91cyBhbmQgbmV4dCBnbyB1cCBhbmQgZG93biBsaW5lcy4gSW4gYW5kIG91dCBnb1xuICogdGhyb3VnaCB0aGUgZWxlbWVudHMgaW4gYSBsaW5lLlxuICogQGF1dGhvciBhc2NobWllZHRAZ29vZ2xlLmNvbSAoQWJieSBTY2htaWVkdClcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQmxvY2tseSBmcm9tICdibG9ja2x5L2NvcmUnO1xuaW1wb3J0IHtzcGVha2VyfSBmcm9tICcuL3NwZWFrZXInO1xuXG5cbkJsb2NrbHkubmF2aWdhdGlvbi5oYW5kbGVFbnRlckZvcldTXyA9IGZ1bmN0aW9uKHdvcmtzcGFjZSkge1xuICBjb25zdCBjdXJzb3IgPSB3b3Jrc3BhY2UuZ2V0Q3Vyc29yKCk7XG4gIGNvbnN0IGN1ck5vZGUgPSBjdXJzb3IuZ2V0Q3VyTm9kZSgpO1xuICBjb25zdCBub2RlVHlwZSA9IGN1ck5vZGUuZ2V0VHlwZSgpO1xuICBpZiAobm9kZVR5cGUgPT0gQmxvY2tseS5BU1ROb2RlLnR5cGVzLkZJRUxEICYmXG4gICAgICBjdXJOb2RlLmdldExvY2F0aW9uKCkuaXNDbGlja2FibGUoKSkge1xuICAgIC8vIFRPRE86IEhhZCB0byBvdmVycmlkZSBzbyBJIGNvdWxkIGFkZCB0aGlzIHNwZWFrZXIgaW4uXG4gICAgc3BlYWtlci5zcGVhaygnVXNlIG5leHQgYW5kIHByZXZpb3VzIHRvIHJlYWQgb2ZmIHlvdXIgb3B0aW9ucy4nKTtcbiAgICAoLyoqIEB0eXBlIHshQmxvY2tseS5GaWVsZH0gKi8oY3VyTm9kZS5nZXRMb2NhdGlvbigpKSkuc2hvd0VkaXRvcigpO1xuICB9IGVsc2UgaWYgKGN1ck5vZGUuaXNDb25uZWN0aW9uKCkgfHxcbiAgICAgIG5vZGVUeXBlID09IEJsb2NrbHkuQVNUTm9kZS50eXBlcy5XT1JLU1BBQ0UpIHtcbiAgICBCbG9ja2x5Lm5hdmlnYXRpb24ubWFya0F0Q3Vyc29yXygpO1xuICB9IGVsc2UgaWYgKG5vZGVUeXBlID09IEJsb2NrbHkuQVNUTm9kZS50eXBlcy5CTE9DSykge1xuICAgIEJsb2NrbHkubmF2aWdhdGlvbi53YXJuXygnQ2Fubm90IG1hcmsgYSBibG9jay4nKTtcbiAgfSBlbHNlIGlmIChub2RlVHlwZSA9PSBCbG9ja2x5LkFTVE5vZGUudHlwZXMuU1RBQ0spIHtcbiAgICBCbG9ja2x5Lm5hdmlnYXRpb24ud2Fybl8oJ0Nhbm5vdCBtYXJrIGEgc3RhY2suJyk7XG4gIH1cbn07XG5cblxuQmxvY2tseS5GaWVsZERyb3Bkb3duLnByb3RvdHlwZS5vbkJsb2NrbHlBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgY29uc3QgZmllbGROZXh0T3B0aW9ucyA9ICdUbyBzZWxlY3QgdGhpcyBvcHRpb24gaGl0IGVudGVyJztcbiAgaWYgKHRoaXMubWVudV8pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi5uYW1lKSB7XG4gICAgICBjYXNlIEJsb2NrbHkubmF2aWdhdGlvbi5hY3Rpb25OYW1lcy5QUkVWSU9VUzpcbiAgICAgICAgdGhpcy5tZW51Xy5oaWdobGlnaHRQcmV2aW91cygpO1xuICAgICAgICBzcGVha2VyLnNwZWFrKHRoaXMubWVudV8uaGlnaGxpZ2h0ZWRJdGVtXy5jb250ZW50Xy5hbHQsIHRydWUpO1xuICAgICAgICBzcGVha2VyLnNwZWFrKGZpZWxkTmV4dE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgQmxvY2tseS5uYXZpZ2F0aW9uLmFjdGlvbk5hbWVzLk5FWFQ6XG4gICAgICAgIHRoaXMubWVudV8uaGlnaGxpZ2h0TmV4dCgpO1xuICAgICAgICAvLyBUT0RPOiBOZWVkZWQgdG8gb3ZlcnJpZGUgc28gdGhhdCBJIGNvdWxkIHNwZWFrIG91dCB0aGUgbG9jYXRpb24gd2hlblxuICAgICAgICAvLyBpdCBjaGFuZ2VzLlxuICAgICAgICBzcGVha2VyLnNwZWFrKHRoaXMubWVudV8uaGlnaGxpZ2h0ZWRJdGVtXy5jb250ZW50Xy5hbHQsIHRydWUpO1xuICAgICAgICBzcGVha2VyLnNwZWFrKGZpZWxkTmV4dE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEJsb2NrbHkuRmllbGREcm9wZG93bi5zdXBlckNsYXNzXy5vbkJsb2NrbHlBY3Rpb24uY2FsbCh0aGlzLCBhY3Rpb24pO1xufTtcblxuXG5CbG9ja2x5LkJsb2NrLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKG9wdF9tYXhMZW5ndGgsIG9wdF9lbXB0eVRva2VuKSB7XG4gIHZhciB0ZXh0ID0gW107XG4gIHZhciBlbXB0eUZpZWxkUGxhY2Vob2xkZXIgPSBvcHRfZW1wdHlUb2tlbiB8fCAnPyc7XG5cbiAgLy8gVGVtcG9yYXJpbHkgc2V0IGZsYWcgdG8gbmF2aWdhdGUgdG8gYWxsIGZpZWxkcy5cbiAgdmFyIHByZXZOYXZpZ2F0ZUZpZWxkcyA9IEJsb2NrbHkuQVNUTm9kZS5OQVZJR0FURV9BTExfRklFTERTO1xuICBCbG9ja2x5LkFTVE5vZGUuTkFWSUdBVEVfQUxMX0ZJRUxEUyA9IHRydWU7XG5cbiAgdmFyIG5vZGUgPSBCbG9ja2x5LkFTVE5vZGUuY3JlYXRlQmxvY2tOb2RlKHRoaXMpO1xuICB2YXIgcm9vdE5vZGUgPSBub2RlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBhZGQgcGFyZW50aGVzZXMgYXJvdW5kIGFuIGlucHV0LlxuICAgKiBAcGFyYW0geyFCbG9ja2x5LkNvbm5lY3Rpb259IGNvbm5lY3Rpb24gVGhlIGNvbm5lY3Rpb24uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgd2Ugc2hvdWxkIGFkZCBwYXJlbnRoZXNlcyBhcm91bmQgdGhlIGlucHV0LlxuICAgKi9cbiAgZnVuY3Rpb24gc2hvdWxkQWRkUGFyZW50aGVzZXMoY29ubmVjdGlvbikge1xuICAgIHZhciBjaGVja3MgPSBjb25uZWN0aW9uLmdldENoZWNrKCk7XG4gICAgaWYgKCFjaGVja3MgJiYgY29ubmVjdGlvbi50YXJnZXRDb25uZWN0aW9uKSB7XG4gICAgICBjaGVja3MgPSBjb25uZWN0aW9uLnRhcmdldENvbm5lY3Rpb24uZ2V0Q2hlY2soKTtcbiAgICB9XG4gICAgcmV0dXJuICEhY2hlY2tzICYmIChjaGVja3MuaW5kZXhPZignQm9vbGVhbicpICE9IC0xIHx8XG4gICAgICAgIGNoZWNrcy5pbmRleE9mKCdOdW1iZXInKSAhPSAtMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhhdCB3ZSBoYXZlbid0IGNpcmNsZWQgYmFjayB0byB0aGUgb3JpZ2luYWwgcm9vdCBub2RlLlxuICAgKi9cbiAgZnVuY3Rpb24gY2hlY2tSb290KCkge1xuICAgIGlmIChub2RlICYmIG5vZGUuZ2V0VHlwZSgpID09IHJvb3ROb2RlLmdldFR5cGUoKSAmJlxuICAgICAgICBub2RlLmdldExvY2F0aW9uKCkgPT0gcm9vdE5vZGUuZ2V0TG9jYXRpb24oKSkge1xuICAgICAgbm9kZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gVHJhdmVyc2UgdGhlIEFTVCBidWlsZGluZyB1cCBvdXIgdGV4dCBzdHJpbmcuXG4gIHdoaWxlIChub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLmdldFR5cGUoKSkge1xuICAgICAgY2FzZSBCbG9ja2x5LkFTVE5vZGUudHlwZXMuSU5QVVQ6XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gLyoqIEB0eXBlIHshQmxvY2tseS5Db25uZWN0aW9ufSAqLyAobm9kZS5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgaWYgKCFub2RlLmluKCkpIHtcbiAgICAgICAgICB0ZXh0LnB1c2goZW1wdHlGaWVsZFBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaG91bGRBZGRQYXJlbnRoZXNlcyhjb25uZWN0aW9uKSkge1xuICAgICAgICAgIHRleHQucHVzaCgnKCcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBCbG9ja2x5LkFTVE5vZGUudHlwZXMuRklFTEQ6XG4gICAgICAgIHZhciBmaWVsZCA9IC8qKiBAdHlwZSB7QmxvY2tseS5GaWVsZH0gKi8gKG5vZGUuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIGlmIChmaWVsZC5uYW1lICE9IEJsb2NrbHkuQmxvY2suQ09MTEFQU0VEX0ZJRUxEX05BTUUpIHtcbiAgICAgICAgICB0ZXh0LnB1c2goZmllbGQuZ2V0VGV4dCgpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudCA9IG5vZGU7XG4gICAgbm9kZSA9IGN1cnJlbnQuaW4oKSB8fCBjdXJyZW50Lm5leHQoKTtcbiAgICAvLyBUT0RPOiBUaGlzIG9ubHkgd29ya3MgaW4gb3VyIHNwZWNpZmljIHVzZSBjYXNlIG9mIGhhdmluZyBhIGJsb2NrIHdpdGggYSBzaW5nbGUgc3RhdGVtZW50IGNvbm5lY3Rpb24uXG4gICAgaWYgKG5vZGUgJiYgbm9kZS5nZXRUeXBlKCkgPT0gQmxvY2tseS5BU1ROb2RlLnR5cGVzLklOUFVUICYmIG5vZGUuZ2V0TG9jYXRpb24oKS50eXBlID09PSBCbG9ja2x5Lk5FWFRfU1RBVEVNRU5UKSB7XG4gICAgICBub2RlID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICAvLyBDYW4ndCBnbyBpbiBvciBuZXh0LCBrZWVwIGdvaW5nIG91dCB1bnRpbCB3ZSBjYW4gZ28gbmV4dC5cbiAgICAgIG5vZGUgPSBjdXJyZW50Lm91dCgpO1xuICAgICAgY2hlY2tSb290KCk7XG4gICAgICB3aGlsZSAobm9kZSAmJiAhbm9kZS5uZXh0KCkpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUub3V0KCk7XG4gICAgICAgIGNoZWNrUm9vdCgpO1xuICAgICAgICAvLyBJZiB3ZSBoaXQgYW4gaW5wdXQgb24gdGhlIHdheSB1cCwgcG9zc2libHkgY2xvc2Ugb3V0IHBhcmVudGhlc2VzLlxuICAgICAgICBpZiAobm9kZSAmJiBub2RlLmdldFR5cGUoKSA9PSBCbG9ja2x5LkFTVE5vZGUudHlwZXMuSU5QVVQgJiZcbiAgICAgICAgICAgIHNob3VsZEFkZFBhcmVudGhlc2VzKFxuICAgICAgICAgICAgICAgIC8qKiBAdHlwZSB7IUJsb2NrbHkuQ29ubmVjdGlvbn0gKi8gKG5vZGUuZ2V0TG9jYXRpb24oKSkpKSB7XG4gICAgICAgICAgdGV4dC5wdXNoKCcpJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXN0b3JlIHN0YXRlIG9mIE5BVklHQVRFX0FMTF9GSUVMRFMuXG4gIEJsb2NrbHkuQVNUTm9kZS5OQVZJR0FURV9BTExfRklFTERTID0gcHJldk5hdmlnYXRlRmllbGRzO1xuXG4gIC8vIFJ1biB0aHJvdWdoIG91ciB0ZXh0IGFycmF5IGFuZCBzaW1wbGlmeSBleHByZXNzaW9uIHRvIHJlbW92ZSBwYXJlbnRoZXNlc1xuICAvLyBhcm91bmQgc2luZ2xlIGZpZWxkIGJsb2Nrcy5cbiAgZm9yICh2YXIgaSA9IDIsIGwgPSB0ZXh0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0ZXh0W2kgLSAyXSA9PSAnKCcgJiYgdGV4dFtpXSA9PSAnKScpIHtcbiAgICAgIHRleHRbaSAtIDJdID0gdGV4dFtpIC0gMV07XG4gICAgICB0ZXh0LnNwbGljZShpIC0gMSwgMik7XG4gICAgICBsIC09IDI7XG4gICAgfVxuICB9XG5cbiAgLy8gSm9pbiB0aGUgdGV4dCBhcnJheSwgcmVtb3Zpbmcgc3BhY2VzIGFyb3VuZCBhZGRlZCBwYXJhbnRoZXNpcy5cbiAgdGV4dCA9IHRleHQuam9pbignICcpLnJlcGxhY2UoLyhcXCgpIHwgKFxcKSkvZ21pLCAnJDEkMicpLnRyaW0oKSB8fCAnPz8/JztcbiAgaWYgKG9wdF9tYXhMZW5ndGgpIHtcbiAgICAvLyBUT0RPOiBJbXByb3ZlIHRydW5jYXRpb24gc28gdGhhdCB0ZXh0IGZyb20gdGhpcyBibG9jayBpcyBnaXZlbiBwcmlvcml0eS5cbiAgICAvLyBFLmcuIFwiMSsyKzMrNCs1KzYrNys4Kzk9MFwiIHNob3VsZCBiZSBcIi4uLjYrNys4Kzk9MFwiLCBub3QgXCIxKzIrMys0KzUuLi5cIi5cbiAgICAvLyBFLmcuIFwiMSsyKzMrNCs1PTYrNys4KzkrMFwiIHNob3VsZCBiZSBcIi4uLjQrNT02KzcuLi5cIi5cbiAgICBpZiAodGV4dC5sZW5ndGggPiBvcHRfbWF4TGVuZ3RoKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgb3B0X21heExlbmd0aCAtIDMpICsgJy4uLic7XG4gICAgfVxuICB9XG4gIHJldHVybiB0ZXh0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/overrides.js\n");

/***/ })

})