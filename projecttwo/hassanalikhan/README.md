# BootCamp2021 Project02: Todo CLI using oclif

## Steps to code "Todo CLI"

### 1. Create a basic app using oclif

Create a basic multi command oclif hello world app by using `npx oclif multi hassanalikhan`. This will ask for multiple options to complete the package.json file and create the app after successful completion. Delete “src/commands/hello.ts” and update Readme.md to delete un-necessary information.

### 2. Create Data models

Create dataModels folder in the src directory, all the data models are created in this folder. Create todoItem.ts to define TodoItem class which is template for Todo item. Create todoCollection.ts to define TodoCollection class which is a template for collection of todos. In this class create methods for adding new todo to the list, get a todo based on specific id, get list of todos with the option to get complete list or only incomplete todos, mark a todo complete or incomplete based on user selection, remove completed todos from the list and get todos count in the collection which return total, completed and incomplete todos count. Install JSON data base and its types in the project using `npm i lowdb@1.0.0` and `npm i --save-dev @types/lowdb` Create jsonTodoCollection.ts to define a subclass of TodoCollection to store data in the JSON format. This has almost the same methods as in the referring class.

### 3. Create Commands

For creating command use `npx oclif command [command name]`, this will not only create the relevant command file in the commands folder but will also update Readme.md file with relevant information. Install chalk using `npm I chalk` a third-party package to style text in terminal. Create add command which will be used to add a new todo in the list, this command will take new todo as an argument. Install cli-table and its types using `npm i cli-table` and `npm i --save-dev @types/cli-table` to represent todo collection in the tabular form. Create list command to show collection of todos in the terminal, this command will list empty table in-case no todos are present in the collection and in case collection is not empty it displays a complete todo list or the list with only incomplete todos based on flag (-m). Create toggle command to invert complete status of a todo which is determined by the id from the command argument, also implement checks for presence and correct form of argument, presence of todo with specified id and current status of the todo. Create remove command to delete completed todos from the collection. Install inquirer a third-party package to prompt user for inputs during operation by using `npm install inquirer` and inquirer types using `npm i --save-dev @types/inquirer`. Create inquire command which is combination of all other commands with added advantage of user prompting during operation. To use any command use `./bin/run [command name]`. While installing any package will update package.json and package-lock.json. Update .gitignore file to skip "Todo.json" file from tracking as it will change on each operation. Also update Readme.md file to update descriptions for commands.

### 4. Publish App

Published app on npm code as a global package using `npm publish --access public`

## Usage Example

1. Installation

   ![Installation](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/1-installation.PNG)

2. Version and commands details

   ![Version and commands](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/2-version-commands.PNG)

3. Add command

   ![Add command](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/3-add.PNG)

4. List command

   Command details

   ![Command Details](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/4-0-list.PNG)

   No todos in the list

   ![Empty List](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/4-1-list.PNG)

   Todos in the list

   ![Non-empty List](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/4-2-list.PNG)

5. Toggle command

   Command details

   ![Toggle command](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/5-toggle.PNG)

   List Conatining completed todos

   ![List Conatining completed todos](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/4-3-list.PNG)

   List with-out completed todos

   ![List with-out completed todos](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/4-4-list.PNG)

6. Remove command

   Command details

   ![Remove command](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/6-remove.PNG)

7. Inquire command

   Command details

   ![Inquire command](https://github.com/hassan-ak/todo-cli/blob/main/outputs/snaps/7-inquire.PNG)

   usage of the app with inquire command can be viewed by visiting the following [link](https://github.com/hassan-ak/todo-app-typescript#3-add-inquirerjs-to-prompt-user-for-input).

# todo-cli-hassanalikhan

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo-cli-hassanalikhan.svg)](https://npmjs.org/package/todo-cli-hassanalikhan)
[![Downloads/week](https://img.shields.io/npm/dw/todo-cli-hassanalikhan.svg)](https://npmjs.org/package/todo-cli-hassanalikhan)
[![License](https://img.shields.io/npm/l/todo-cli-hassanalikhan.svg)](https://github.com/hassan-ak/todo-cli/blob/master/package.json)

<!-- toc -->

- [todo-cli-hassanalikhan](#todo-cli-hassanalikhan)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g todo-cli-hassanalikhan
$ todo-hassanalikhan COMMAND
running command...
$ todo-hassanalikhan (-v|--version|version)
todo-cli-hassanalikhan/0.0.1 win32-x64 node-v12.17.0
$ todo-hassanalikhan --help [COMMAND]
USAGE
  $ todo-hassanalikhan COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`todo-hassanalikhan add [TODO]`](#todo-hassanalikhan-add-todo)
- [`todo-hassanalikhan help [COMMAND]`](#todo-hassanalikhan-help-command)
- [`todo-hassanalikhan inquire`](#todo-hassanalikhan-inquire)
- [`todo-hassanalikhan list`](#todo-hassanalikhan-list)
- [`todo-hassanalikhan remove`](#todo-hassanalikhan-remove)
- [`todo-hassanalikhan toggle [ID]`](#todo-hassanalikhan-toggle-id)

## `todo-hassanalikhan add [TODO]`

Add new todo to list/collection

```
USAGE
  $ todo-hassanalikhan add [TODO]

ARGUMENTS
  TODO  new todo to be added

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/add.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/add.ts)_

## `todo-hassanalikhan help [COMMAND]`

display help for todo-hassanalikhan

```
USAGE
  $ todo-hassanalikhan help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todo-hassanalikhan inquire`

Use App with prompting for user inputs

```
USAGE
  $ todo-hassanalikhan inquire

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/inquire.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/inquire.ts)_

## `todo-hassanalikhan list`

Display list of all / incomplete todos

```
USAGE
  $ todo-hassanalikhan list

OPTIONS
  -h, --help  show CLI help
  -m, --mask  Hide completed Todos
```

_See code: [src/commands/list.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/list.ts)_

## `todo-hassanalikhan remove`

Remove Completed todos

```
USAGE
  $ todo-hassanalikhan remove

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/remove.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/remove.ts)_

## `todo-hassanalikhan toggle [ID]`

Toggle completion status of a Todo by proving its ID.

```
USAGE
  $ todo-hassanalikhan toggle [ID]

ARGUMENTS
  ID  id of the todo whose status to be toggled

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/toggle.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/toggle.ts)_

<!-- commandsstop -->
