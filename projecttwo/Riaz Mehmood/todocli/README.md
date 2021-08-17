todocli
=======

A simple todo cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![CircleCI](https://circleci.com/gh/RiazMehmood/todocli/tree/master.svg?style=shield)](https://circleci.com/gh/RiazMehmood/todocli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/RiazMehmood/todocli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
todocli/1.0.0 linux-x64 node-v14.3.0
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add [TODO]`](#todocli-add-todo)
* [`todocli hello [FILE]`](#todocli-hello-file)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli list [FILE]`](#todocli-list-file)

## `todocli add [TODO]`

Add new todo to list

```
USAGE
  $ todocli add [TODO]
```

_See code: [src/commands/add.ts](https://github.com/RiazMehmood/todocli/blob/v1.0.0/src/commands/add.ts)_

## `todocli hello [FILE]`

describe the command here

```
USAGE
  $ todocli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todocli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/RiazMehmood/todocli/blob/v1.0.0/src/commands/hello.ts)_

## `todocli help [COMMAND]`

display help for todocli

```
USAGE
  $ todocli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `todocli list [FILE]`

describe the command here

```
USAGE
  $ todocli list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list.ts](https://github.com/RiazMehmood/todocli/blob/v1.0.0/src/commands/list.ts)_
<!-- commandsstop -->
