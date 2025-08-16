"use strict";

const utils = require("@thermos-cli/utils");
module.exports = core;

function core() {
  utils();

  return "Hello from core";
}
core();
