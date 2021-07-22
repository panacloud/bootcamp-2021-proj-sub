todo
====

A Todo app for CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo.svg)](https://npmjs.org/package/todo)
[![CircleCI](https://circleci.com/gh/SMAshhar/AshhCli-todo/tree/master.svg?style=shield)](https://circleci.com/gh/SMAshhar/AshhCli-todo/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/SMAshhar/AshhCli-todo?branch=master&svg=true)](https://ci.appveyor.com/project/SMAshhar/AshhCli-todo/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/todo.svg)](https://npmjs.org/package/todo)
[![License](https://img.shields.io/npm/l/todo.svg)](https://github.com/SMAshhar/AshhCli-todo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ashhtodo
$ todo COMMAND
running command...
$ todo (-v|--version|version)
ashhtodo/1.0.0 linux-x64 node-v10.19.0
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo add [TODO]`](#todo-add-todo)
* [`todo done [INDEX]`](#todo-done-index)
* [`todo hello [FILE]`](#todo-hello-file)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo remove [INDEX]`](#todo-remove-index)
* [`todo show`](#todo-show)

## `todo add [TODO]`

Add new todo item here.

```
USAGE
  $ todo add [TODO]
```

_See code: [src/commands/add.ts](https://github.com/SMAshhar/AshhCli-todo/blob/v1.0.0/src/commands/add.ts)_

## `todo done [INDEX]`

Marks a task complete

```
USAGE
  $ todo done [INDEX]
```

_See code: [src/commands/done.ts](https://github.com/SMAshhar/AshhCli-todo/blob/v1.0.0/src/commands/done.ts)_

## `todo hello [FILE]`

describe the command here

```
USAGE
  $ todo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/SMAshhar/AshhCli-todo/blob/v1.0.0/src/commands/hello.ts)_

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

## `todo remove [INDEX]`

Remove a todo from list

```
USAGE
  $ todo remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/SMAshhar/AshhCli-todo/blob/v1.0.0/src/commands/remove.ts)_

## `todo show`

Displays all Tasks

```
USAGE
  $ todo show
```

_See code: [src/commands/show.ts](https://github.com/SMAshhar/AshhCli-todo/blob/v1.0.0/src/commands/show.ts)_
<!-- commandsstop -->
