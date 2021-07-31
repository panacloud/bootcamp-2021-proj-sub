asgard
======

Oclif todo app

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/asgard.svg)](https://npmjs.org/package/asgard)
[![CircleCI](https://circleci.com/gh/MuhammadBilal7x/asgard/tree/master.svg?style=shield)](https://circleci.com/gh/MuhammadBilal7x/asgard/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/MuhammadBilal7x/asgard?branch=master&svg=true)](https://ci.appveyor.com/project/MuhammadBilal7x/asgard/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/asgard.svg)](https://npmjs.org/package/asgard)
[![License](https://img.shields.io/npm/l/asgard.svg)](https://github.com/MuhammadBilal7x/asgard/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g asgard
$ asgard COMMAND
running command...
$ asgard (-v|--version|version)
asgard/1.0.0 win32-x64 node-v14.17.0
$ asgard --help [COMMAND]
USAGE
  $ asgard COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`asgard add [TODO]`](#asgard-add-todo)
* [`asgard hello [FILE]`](#asgard-hello-file)
* [`asgard help [COMMAND]`](#asgard-help-command)
* [`asgard interact [FILE]`](#asgard-interact-file)
* [`asgard list`](#asgard-list)
* [`asgard remove [INDEX]`](#asgard-remove-index)

## `asgard add [TODO]`

Add new todo to list

```
USAGE
  $ asgard add [TODO]

OPTIONS
  -d, --done
```

_See code: [src/commands/add.ts](https://github.com/MuhammadBilal7x/asgard/blob/v1.0.0/src/commands/add.ts)_

## `asgard hello [FILE]`

describe the command here

```
USAGE
  $ asgard hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ asgard hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/MuhammadBilal7x/asgard/blob/v1.0.0/src/commands/hello.ts)_

## `asgard help [COMMAND]`

display help for asgard

```
USAGE
  $ asgard help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `asgard interact [FILE]`

describe the command here

```
USAGE
  $ asgard interact [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/interact.ts](https://github.com/MuhammadBilal7x/asgard/blob/v1.0.0/src/commands/interact.ts)_

## `asgard list`

Print out all todos

```
USAGE
  $ asgard list
```

_See code: [src/commands/list.ts](https://github.com/MuhammadBilal7x/asgard/blob/v1.0.0/src/commands/list.ts)_

## `asgard remove [INDEX]`

Remove a todo from list

```
USAGE
  $ asgard remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/MuhammadBilal7x/asgard/blob/v1.0.0/src/commands/remove.ts)_
<!-- commandsstop -->
