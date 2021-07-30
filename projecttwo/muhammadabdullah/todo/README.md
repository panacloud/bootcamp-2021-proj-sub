abdullah_todo_cli
=================

A todo app created with oclif cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/abdullah_todo_cli.svg)](https://npmjs.org/package/abdullah_todo_cli)
[![Downloads/week](https://img.shields.io/npm/dw/abdullah_todo_cli.svg)](https://npmjs.org/package/abdullah_todo_cli)
[![License](https://img.shields.io/npm/l/abdullah_todo_cli.svg)](https://github.com/MuhammadAbdullahEjaz/abdullah_todo_cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @muhammadabdullah626/todo
$ todo COMMAND
running command...
$ todo (-v|--version|version)
@muhammadabdullah626/todo/0.0.0 linux-x64 node-v14.15.4
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo add [TODO]`](#todo-add-todo)
* [`todo complete`](#todo-complete)
* [`todo delete`](#todo-delete)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo list`](#todo-list)

## `todo add [TODO]`

add <Task> - Add Task to Todo list

```
USAGE
  $ todo add [TODO]
```

## `todo complete`

complete <TaskID> - Mark Task of TaskID complete

```
USAGE
  $ todo complete

OPTIONS
  -i, --id=id
```

## `todo delete`

delete <TaskID> - Delete the task of TaskID

```
USAGE
  $ todo delete

OPTIONS
  -c, --complete  delete completed
  -i, --id=id     id of task
```

## `todo help [COMMAND]`

display help for todo

```
USAGE
  $ todo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todo list`

describe the command here

```
USAGE
  $ todo list

OPTIONS
  -a, --show_all
  -c, --show_complete
```
<!-- commandsstop -->
