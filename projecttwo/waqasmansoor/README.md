todocli
=======

Simple Todo CLI App

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![CircleCI](https://circleci.com/gh/waqasmansoor/todocli/tree/master.svg?style=shield)](https://circleci.com/gh/waqasmansoor/todocli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/waqasmansoor/todocli?branch=master&svg=true)](https://ci.appveyor.com/project/waqasmansoor/todocli/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/waqasmansoor/todocli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todo-global-app
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
todo-global-app/1.0.0 linux-x64 node-v14.17.3
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add [USERNAME] [TODONAME]`](#todocli-add-username-todoname)
* [`todocli create [USERNAME]`](#todocli-create-username)
* [`todocli hello [FILE]`](#todocli-hello-file)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli interact [USERNAME]`](#todocli-interact-username)
* [`todocli list [USERNAME]`](#todocli-list-username)
* [`todocli remove [USERNAME] [INDEX]`](#todocli-remove-username-index)

## `todocli add [USERNAME] [TODONAME]`

Add todo

```
USAGE
  $ todocli add [USERNAME] [TODONAME]

OPTIONS
  -d, --done
```

_See code: [src/commands/add.ts](https://github.com/waqasmansoor/todocli/blob/v1.0.0/src/commands/add.ts)_

## `todocli create [USERNAME]`

Create new user todo list

```
USAGE
  $ todocli create [USERNAME]
```

_See code: [src/commands/create.ts](https://github.com/waqasmansoor/todocli/blob/v1.0.0/src/commands/create.ts)_

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

_See code: [src/commands/hello.ts](https://github.com/waqasmansoor/todocli/blob/v1.0.0/src/commands/hello.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todocli interact [USERNAME]`

Update Todos

```
USAGE
  $ todocli interact [USERNAME]
```

_See code: [src/commands/interact.ts](https://github.com/waqasmansoor/todocli/blob/v1.0.0/src/commands/interact.ts)_

## `todocli list [USERNAME]`

Show Todos

```
USAGE
  $ todocli list [USERNAME]
```

_See code: [src/commands/list.ts](https://github.com/waqasmansoor/todocli/blob/v1.0.0/src/commands/list.ts)_

## `todocli remove [USERNAME] [INDEX]`

Remove Todo

```
USAGE
  $ todocli remove [USERNAME] [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/waqasmansoor/todocli/blob/v1.0.0/src/commands/remove.ts)_
<!-- commandsstop -->
