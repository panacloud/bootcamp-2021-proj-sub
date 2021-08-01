ahmedclitodo
============

Project2 todo cli with oclif and npm publish

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ahmedclitodo.svg)](https://npmjs.org/package/ahmedclitodo)
[![Downloads/week](https://img.shields.io/npm/dw/ahmedclitodo.svg)](https://npmjs.org/package/ahmedclitodo)
[![License](https://img.shields.io/npm/l/ahmedclitodo.svg)](https://github.com/iahmedraza/ahmedclitodo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ahmedclitodo
$ ahmedclitodo COMMAND
running command...
$ ahmedclitodo (-v|--version|version)
ahmedclitodo/1.0.0 win32-x64 node-v12.16.2
$ ahmedclitodo --help [COMMAND]
USAGE
  $ ahmedclitodo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ahmedclitodo add [TODO]`](#ahmedclitodo-add-todo)
* [`ahmedclitodo hello [FILE]`](#ahmedclitodo-hello-file)
* [`ahmedclitodo help [COMMAND]`](#ahmedclitodo-help-command)
* [`ahmedclitodo interact`](#ahmedclitodo-interact)
* [`ahmedclitodo list`](#ahmedclitodo-list)
* [`ahmedclitodo remove [INDEX]`](#ahmedclitodo-remove-index)

## `ahmedclitodo add [TODO]`

Add new todo to list

```
USAGE
  $ ahmedclitodo add [TODO]

OPTIONS
  -d, --done
```

_See code: [src/commands/add.ts](https://github.com/iahmedraza/ahmedclitodo/blob/v1.0.0/src/commands/add.ts)_

## `ahmedclitodo hello [FILE]`

describe the command here

```
USAGE
  $ ahmedclitodo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ahmedclitodo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/iahmedraza/ahmedclitodo/blob/v1.0.0/src/commands/hello.ts)_

## `ahmedclitodo help [COMMAND]`

display help for ahmedclitodo

```
USAGE
  $ ahmedclitodo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `ahmedclitodo interact`

Enter the interacting mode

```
USAGE
  $ ahmedclitodo interact
```

_See code: [src/commands/interact.ts](https://github.com/iahmedraza/ahmedclitodo/blob/v1.0.0/src/commands/interact.ts)_

## `ahmedclitodo list`

Print out all todos

```
USAGE
  $ ahmedclitodo list
```

_See code: [src/commands/list.ts](https://github.com/iahmedraza/ahmedclitodo/blob/v1.0.0/src/commands/list.ts)_

## `ahmedclitodo remove [INDEX]`

Remove todo from a list

```
USAGE
  $ ahmedclitodo remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/iahmedraza/ahmedclitodo/blob/v1.0.0/src/commands/remove.ts)_
<!-- commandsstop -->
