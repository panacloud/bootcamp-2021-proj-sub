#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var greeting_1 = require("../lib/greeting");
// let user = greeting("Muhammad Qasim");
//console.log(process.argv);
var user = process.argv.splice(2)[0];
var msg = greeting_1.greeting(user);
console.log(msg);
