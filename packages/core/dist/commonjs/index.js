"use strict";

exports.__esModule = true;
exports.configure = configure;

var _aureliaPal = require("aurelia-pal");

function configure(config) {
  config.globalResources([_aureliaPal.PLATFORM.moduleName('./elements/hello-world')]);
}