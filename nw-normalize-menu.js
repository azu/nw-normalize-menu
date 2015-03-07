// LICENSE : MIT
"use strict";
var gui = require('nw.gui');
var path = require("path");
var win = gui.Window.get();
var packageData = require(path.join(process.cwd(), 'package.json'));
var nativeMenuBar = new gui.Menu({type: "menubar"});
var name = packageData.name;
nativeMenuBar.createMacBuiltin(name);
win.menu = nativeMenuBar;