#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var greeting_1 = require("../lib/greeting");
console.log(process.argv);
var message = greeting_1.greeting(process.argv.splice(2)[0]);
console.log(message);
