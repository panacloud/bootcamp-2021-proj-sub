#!/usr/bin/env node

import { greeting } from "../lib/greeting";

// let user = greeting("Muhammad Qasim");

//console.log(process.argv);

let user = process.argv.splice(2)[0];
let msg = greeting(user);
console.log(msg);