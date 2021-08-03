#!/usr/bin/env node
import { greeting } from "../lib/greeting";
console.log(process.argv)
let message = greeting(process.argv.splice(2)[0]);
console.log(message);
