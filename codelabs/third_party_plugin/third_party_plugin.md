
---
summary: Build a third-party plugin
id: third-party-plugin
categories: blockly, codelab, plugin
tags:
status: Draft
authors: The Blockly Team
Feedback Link: https://github.com/google/blockly-samples/issues/new

---

# Building a third-party plugin

## CodeLab Overview

### What you'll learn

During this codelab you will learn how to
1. use `@blockly/create-package` to create a plugin from a template.
1. write plugin code.
1. test your plugin.
1. publish your plugin to npm.

### What you'll build

In this codelab you will build a workspace plugin that changes the workspace's colours whenever you select a block.

### What you'll need

1. node and npm already installed.

## Setup

## Name your plugin

Before you can write any code or run any tools, you need to pick a name for your plugin. The name you choose will be the name of your directory and of your published plugin on npm.

Consistent plugin names are helpful for organizing and searching plugins, and for finding published plugins on npm.

Please read the wiki page on [plugin naming conventions](https://github.com/google/blockly-samples/wiki/Plugin-Naming-Conventions) to see a detailed breakdown of our naming conventions.

## Create your package

From the terminal, install `@blockly/create-package`:

```bash
npm install @blockly/create-package
```

This script sets up your plugin based on a pre-existing template. It creates a directory containing `src` and `test` subdirectories, and uses `@blockly/dev-tools` to set up a webpack config for you.

Run `@blockly/create-package`, passing in your plugin name and type:

The type can be one of `plugin`, `field`, `block`, or `theme`, and is used to choose a template.

```bash
npx @blockly/create-package blockly-workspace-colour-changer --type plugin
```

### Explore

`create-package` made a new directory named `blockly-workspace-colour-changer`. Inside you'll find:

1. `GETSTARTED.md`: Lists basic commands you can run.
1. `package.json`: Contains dependency and scripting information. See the [npm documentation](https://docs.npmjs.com/files/package.json) if you are not familiar with this file. `create-package` automatically adds some Blockly dependencies and scripts.
1. `README.md`: The README for your new package, which you will need to edit before publishing.
1. `src/index.js`: Your plugin's code.
1. `test/index.js`: Plugin test code that sets up a Blockly playground and adds your plugin.
1. `test/index.html`: A test web page that you can open in the browser.

### Test it

Go into your new folder and start up the dev server:

```bash
cd blockly-workspace-colour-changer
npm start
```

In your browser of choice, go to `http://localhost:3000/test`. You should see the playground:

![A blockly workspace with sidebars for code generation and workspace options](./advanced_playground.md)

Note: It may take a while for the playground to load when you first start it, because the test bundle needs to be built for the first time.

TODO: Give an overview of what `start` does here.

@rachel-fenichel: start worked fine to start up the server, but I don't get any changes based on code that I write either in src/index.js or test/index.js. Not even logs.

## Write your code

## Rename your plugin

## Testing

## Update the README

## Publish

## Tagging conventions
