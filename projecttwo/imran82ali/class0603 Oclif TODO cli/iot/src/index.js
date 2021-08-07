#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.run = void 0;
var command_1 = require("@oclif/command");
__createBinding(exports, command_1, "run");
require('@oclif/command').run()
    .then(require('@oclif/command/flush'))["catch"](require('@oclif/errors/handle'));
