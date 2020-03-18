/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Example of using WorkspaceSearch with Blockly with imports.
 * @author kozbial@gmail.com (Monica Kozbial)
 */

import * as Blockly from 'blockly';
import { BlocklyDebugRenderer } from './debug-renderer.js';

function start() {
  // Next is trying to figure out how to use the rendering debugger from here.
  Blockly.blockRendering.useDebugger = true;

  Blockly.blockRendering.Debug = BlocklyDebugRenderer;
  /**
   * Configuration object containing booleans to enable and disable debug
   * rendering of specific rendering components.
   * @type {!Object.<string, boolean>}
   */
  Blockly.blockRendering.Debug.config = {
    rowSpacers: true,
    elemSpacers: true,
    rows: true,
    elems: true,
    connections: true,
    blockBounds: true,
    connectedBlockBounds: true,
    render: true
  };

  Blockly.blockRendering.useDebugger = true;
  const workspace = Blockly.inject('blocklyDiv',
      {
        toolbox: document.getElementById('toolbox')}
  );
}

document.addEventListener("DOMContentLoaded", function () { start() });
