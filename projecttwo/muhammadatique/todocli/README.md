todocli
=======

ToDo CLI with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/m-atique/todocli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocli
$ mytodo COMMAND
running command...
$ mytodo (-v|--version|version)
todocli/0.0.0 linux-x64 node-v12.19.0
$ mytodo --help [COMMAND]
USAGE
  $ mytodo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mytodo add [TODO]`](#mytodo-add-todo)
* [`mytodo del [ID]`](#mytodo-del-id)
* [`mytodo done [ID]`](#mytodo-done-id)
* [`mytodo edit [ID] [TODO]`](#mytodo-edit-id-todo)
* [`mytodo help [COMMAND]`](#mytodo-help-command)
* [`mytodo inquirer [INTRACT]`](#mytodo-inquirer-intract)
* [`mytodo mycommands [FILE]`](#mytodo-mycommands-file)
* [`mytodo showlist [SHOWLIST]`](#mytodo-showlist-showlist)

## `mytodo add [TODO]`

This will add new ToDo in list

```
USAGE
  $ mytodo add [TODO]

OPTIONS
  -h, --help       this will add new task
  -t, --todo=todo  task to add
```

_See code: [src/commands/add.ts](https://github.com/m-atique/todocli/blob/v0.0.0/src/commands/add.ts)_

## `mytodo del [ID]`

it will remove task

```
USAGE
  $ mytodo del [ID]
```

_See code: [src/commands/del.ts](https://github.com/m-atique/todocli/blob/v0.0.0/src/commands/del.ts)_

## `mytodo done [ID]`

it will change the status of task to done

```
USAGE
  $ mytodo done [ID]
```

_See code: [src/commands/done.ts](https://github.com/m-atique/todocli/blob/v0.0.0/src/commands/done.ts)_

## `mytodo edit [ID] [TODO]`

it will change the status of task to done

```
USAGE
  $ mytodo edit [ID] [TODO]
```

_See code: [src/commands/edit.ts](https://github.com/m-atique/todocli/blob/v0.0.0/src/commands/edit.ts)_

## `mytodo help [COMMAND]`

display help for mytodo

```
USAGE
  $ mytodo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `mytodo inquirer [INTRACT]`

describe the command here

```
USAGE
  $ mytodo inquirer [INTRACT]

OPTIONS
  --stage=add|edit|done|delete|quit
```

_See code: [src/commands/inquirer.ts](https://github.com/m-atique/todocli/blob/v0.0.0/src/commands/inquirer.ts)_

## `mytodo mycommands [FILE]`

describe the command here

```
USAGE
  $ mytodo mycommands [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/mycommands.ts](https://github.com/m-atique/todocli/blob/v0.0.0/src/commands/mycommands.ts)_

## `mytodo showlist [SHOWLIST]`

This will add new ToDo in list

```
USAGE
  $ mytodo showlist [SHOWLIST]

OPTIONS
  -h, --help       this will add new task
  -t, --todo=todo  task to add
```

_See code: [src/commands/showlist.ts](https://github.com/m-atique/todocli/blob/v0.0.0/src/commands/showlist.ts)_
<!-- commandsstop -->
