## Advance Todo App

This app is build on typescript using Object Oriented Programming

## Typescript
TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript

## Benefits of Typescript
It helps you to detect errors while writing code and makes your code well organized and error free

## Creating Project

1. npm init (to create package.json)
2. src folder (where all working code or class placed)
3. dist folder (where transpiled code resides)
4. tsconfig.json (contains compilation code)

## Creating files in Src folder

1. item.ts (containes class template)
2. itemCollection.ts (perform different methods on item)
3. index.ts (object declaration and instance calling)
4. jsonTodoCollection.ts (containing code store in todos.json file)

## Dependencies To Install:

1. npm i inquirer@7.3.3  (to get input from cmd)
* npm i --save-dev @types/inquirer   (its type for dev)

2. npm i lowdb@1.0.0     (js database)
* npm i --save-dev @types/lowdb (its type for dev)

## Run Code

**For transpilation**:

* For single file: tsc filename.ts

* For multiple files as in our case: tsc

**To get output**:

* For single file: node filename.js

* For multiple files like in our case: node ./dist/index.js
