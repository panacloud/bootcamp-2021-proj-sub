# Project Two Requirements

Build a Todo Command Line Interface App using Typescript and oclif, publish it as a global npm package.

[Follow these steps to Submit the Project](https://github.com/panacloud/bootcamp-2021-proj-sub)

Project Reading Resources:

[oclif: The open CLI Framework](https://oclif.io/)

[oclif Introduction](https://oclif.io/docs/introduction)

[Getting started with oclif by creating a todo cli app](https://medium.com/the-z/getting-started-with-oclif-by-creating-a-todo-cli-app-b3a2649adbcf)

[Todo CLI Repo](https://github.com/dalenguyen/todo-cli)



Need following resources:

Step 1: 

Ran the following command:

npx oclif multi todo   //COmmand line

Step 2:

CHecked package by running:

bin/run hello       //COmmand line

Step 3:

Added a new command "Add" by running following:

npx oclif command add       //COmmand line

Step 4:

Edited the new add.ts file as it:
1. Collects any new provided task.
    a. If argument given, display a message of success.
    b. If arg not given, display a message to type in a new task.

2. The command line for its active will be:
todo add "New todo Item"        //COmmand line

3. Used Chalk Module to bring colours to our result by adding line:

import chalk from 'chalk'






