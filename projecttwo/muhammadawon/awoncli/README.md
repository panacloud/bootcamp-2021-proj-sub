awoncli-todoist
===============

An interactive todo cli app.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/awoncli-todoist.svg)](https://npmjs.org/package/awoncli-todoist)
[![Downloads/week](https://img.shields.io/npm/dw/awoncli-todoist.svg)](https://npmjs.org/package/awoncli-todoist)
[![License](https://img.shields.io/npm/l/awoncli-todoist.svg)](https://github.com/Desktop/awoncli-todoist/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g awoncli-todoist
$ awoncli COMMAND
running command...
$ awoncli (-v|--version|version)
awoncli-todoist/0.0.1 win32-x64 node-v14.17.4
$ awoncli --help [COMMAND]
USAGE
  $ awoncli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`awoncli add [TODO]`](#awoncli-add-todo)
* [`awoncli help [COMMAND]`](#awoncli-help-command)
* [`awoncli list`](#awoncli-list)
* [`awoncli remove [INDEX]`](#awoncli-remove-index)
* [`awoncli update`](#awoncli-update)

## `awoncli add [TODO]`

Add a new todo item

```
USAGE
  $ awoncli add [TODO]

OPTIONS
  -d, --done
```

_See code: [src/commands/add.ts](https://github.com/Desktop/awoncli-todoist/blob/v0.0.1/src/commands/add.ts)_

## `awoncli help [COMMAND]`

display help for awoncli

```
USAGE
  $ awoncli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `awoncli list`

List all the todo items

```
USAGE
  $ awoncli list
```

_See code: [src/commands/list.ts](https://github.com/Desktop/awoncli-todoist/blob/v0.0.1/src/commands/list.ts)_

## `awoncli remove [INDEX]`

Remove a todo from list

```
USAGE
  $ awoncli remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/Desktop/awoncli-todoist/blob/v0.0.1/src/commands/remove.ts)_

## `awoncli update`

Enter the interacting mode

```
USAGE
  $ awoncli update
```

_See code: [src/commands/update.ts](https://github.com/Desktop/awoncli-todoist/blob/v0.0.1/src/commands/update.ts)_
<!-- commandsstop -->
