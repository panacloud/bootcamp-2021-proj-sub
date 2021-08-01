consoletodo
===========

A simple todo cli app

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/consoletodo.svg)](https://npmjs.org/package/consoletodo)
[![Downloads/week](https://img.shields.io/npm/dw/consoletodo.svg)](https://npmjs.org/package/consoletodo)
[![License](https://img.shields.io/npm/l/consoletodo.svg)](https://github.com/projecttwo/consoletodo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g consoletodo
$ consoletodo COMMAND
running command...
$ consoletodo (-v|--version|version)
consoletodo/1.0.0 win32-x64 node-v14.16.1
$ consoletodo --help [COMMAND]
USAGE
  $ consoletodo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`consoletodo add`](#consoletodo-add)
* [`consoletodo hello [FILE]`](#consoletodo-hello-file)
* [`consoletodo help [COMMAND]`](#consoletodo-help-command)
* [`consoletodo remove`](#consoletodo-remove)
* [`consoletodo show`](#consoletodo-show)
* [`consoletodo update`](#consoletodo-update)

## `consoletodo add`

Adds a new todo

```
USAGE
  $ consoletodo add

OPTIONS
  -n, --task=task  task

DESCRIPTION
  ...
     Adds a new todo to the existing list
```

_See code: [src/commands/add.ts](https://github.com/projecttwo/consoletodo/blob/v1.0.0/src/commands/add.ts)_

## `consoletodo hello [FILE]`

describe the command here

```
USAGE
  $ consoletodo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ consoletodo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/projecttwo/consoletodo/blob/v1.0.0/src/commands/hello.ts)_

## `consoletodo help [COMMAND]`

display help for consoletodo

```
USAGE
  $ consoletodo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `consoletodo remove`

Removes a task by id

```
USAGE
  $ consoletodo remove

OPTIONS
  --id=id  (required) id of the task

DESCRIPTION
  ...
     Removes a task permanently from database by id
```

_See code: [src/commands/remove.ts](https://github.com/projecttwo/consoletodo/blob/v1.0.0/src/commands/remove.ts)_

## `consoletodo show`

Shows existing tasks

```
USAGE
  $ consoletodo show

DESCRIPTION
  ...
     Shows all the tasks sorted by their ids
```

_See code: [src/commands/show.ts](https://github.com/projecttwo/consoletodo/blob/v1.0.0/src/commands/show.ts)_

## `consoletodo update`

Marks a task as done

```
USAGE
  $ consoletodo update

OPTIONS
  --id=id  (required) id of the task

DESCRIPTION
  ...
     Marks a task as done
```

_See code: [src/commands/update.ts](https://github.com/projecttwo/consoletodo/blob/v1.0.0/src/commands/update.ts)_
<!-- commandsstop -->
