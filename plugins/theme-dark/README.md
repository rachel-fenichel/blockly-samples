---
title: "@blockly/theme-dark Demo"
packageName: "@blockly/theme-dark"
description: "A Blockly dark theme."
pageRoot: "plugins/theme-dark"
pages:
  - label: "Playground"
    link: "test/index"
  - label: "README"
    link: "README"

---
# @blockly/theme-dark [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

A [Blockly](https://www.npmjs.com/package/blockly) dark theme.

![](https://github.com/google/blockly-samples/raw/master/plugins/theme-dark/readme-media/DarkTheme.png)

## Installation

### Yarn
```
yarn add @blockly/theme-dark
```

### npm
```
npm install @blockly/theme-dark --save
```

## Usage

```js
import * as Blockly from 'blockly';
import DarkTheme from '@blockly/theme-dark';

Blockly.inject('blocklyDiv', {
  theme: DarkTheme,
});

```

## License
Apache 2.0
