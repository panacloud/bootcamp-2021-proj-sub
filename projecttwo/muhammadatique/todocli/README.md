todocli
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![CircleCI](https://circleci.com/gh/m-atique/todocli/tree/master.svg?style=shield)](https://circleci.com/gh/m-atique/todocli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/m-atique/todocli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @muhammadatique/todocli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
@muhammadatique/todocli/1.0.2 linux-x64 node-v12.19.0
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add [TASK]`](#todocli-add-task)
* [`todocli del [ID]`](#todocli-del-id)
* [`todocli done [ID]`](#todocli-done-id)
* [`todocli edit [ID] [TASK]`](#todocli-edit-id-task)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli mycommands [FILE]`](#todocli-mycommands-file)
* [`todocli rmdone [FILE]`](#todocli-rmdone-file)
* [`todocli showall [FILE]`](#todocli-showall-file)

## `todocli add [TASK]`

Add todo write todo in colons

```
USAGE
  $ todocli add [TASK]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  task to save
```

_See code: [src/commands/add.ts](https://github.com/m-atique/todocli/blob/v1.0.2/src/commands/add.ts)_

## `todocli del [ID]`

Delete todo provide id

```
USAGE
  $ todocli del [ID]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/del.ts](https://github.com/m-atique/todocli/blob/v1.0.2/src/commands/del.ts)_

## `todocli done [ID]`

Mark the todo as Completed

```
USAGE
  $ todocli done [ID]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/done.ts](https://github.com/m-atique/todocli/blob/v1.0.2/src/commands/done.ts)_

## `todocli edit [ID] [TASK]`

Edit and update task "required id, task"

```
USAGE
  $ todocli edit [ID] [TASK]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/edit.ts](https://github.com/m-atique/todocli/blob/v1.0.2/src/commands/edit.ts)_

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

## `todocli mycommands [FILE]`

Show Todo Table with command box

```
USAGE
  $ todocli mycommands [FILE]

OPTIONS
  --stage=add|edit|done|delete|quit
```

_See code: [src/commands/mycommands.ts](https://github.com/m-atique/todocli/blob/v1.0.2/src/commands/mycommands.ts)_

## `todocli rmdone [FILE]`

Remove all completed

```
USAGE
  $ todocli rmdone [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/rmdone.ts](https://github.com/m-atique/todocli/blob/v1.0.2/src/commands/rmdone.ts)_

## `todocli showall [FILE]`

Show all todos in table

```
USAGE
  $ todocli showall [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/showall.ts](https://github.com/m-atique/todocli/blob/v1.0.2/src/commands/showall.ts)_
<!-- commandsstop -->
