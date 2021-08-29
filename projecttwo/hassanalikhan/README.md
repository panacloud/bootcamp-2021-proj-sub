# BootCamp2021 Project02: Todo CLI using oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo-cli-hassanalikhan.svg)](https://npmjs.org/package/todo-cli-hassanalikhan)
[![Downloads/week](https://img.shields.io/npm/dw/todo-cli-hassanalikhan.svg)](https://npmjs.org/package/todo-cli-hassanalikhan)
[![License](https://img.shields.io/npm/l/todo-cli-hassanalikhan.svg)](https://github.com/hassan-ak/todo-cli/blob/master/package.json)

<!-- toc -->

- [todo-cli-hassanalikhan](#todo-cli-hassanalikhan)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g todo-cli-hassanalikhan
$ todo-hassanalikhan COMMAND
running command...
$ todo-hassanalikhan (-v|--version|version)
todo-cli-hassanalikhan/0.0.1 win32-x64 node-v12.17.0
$ todo-hassanalikhan --help [COMMAND]
USAGE
  $ todo-hassanalikhan COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`todo-hassanalikhan add [TODO]`](#todo-hassanalikhan-add-todo)
- [`todo-hassanalikhan help [COMMAND]`](#todo-hassanalikhan-help-command)
- [`todo-hassanalikhan inquire`](#todo-hassanalikhan-inquire)
- [`todo-hassanalikhan list`](#todo-hassanalikhan-list)
- [`todo-hassanalikhan remove`](#todo-hassanalikhan-remove)
- [`todo-hassanalikhan toggle [ID]`](#todo-hassanalikhan-toggle-id)

## `todo-hassanalikhan add [TODO]`

Add new todo to list/collection

```
USAGE
  $ todo-hassanalikhan add [TODO]

ARGUMENTS
  TODO  new todo to be added

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/add.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/add.ts)_

## `todo-hassanalikhan help [COMMAND]`

display help for todo-hassanalikhan

```
USAGE
  $ todo-hassanalikhan help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todo-hassanalikhan inquire`

Use App with prompting for user inputs

```
USAGE
  $ todo-hassanalikhan inquire

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/inquire.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/inquire.ts)_

## `todo-hassanalikhan list`

Display list of all / incomplete todos

```
USAGE
  $ todo-hassanalikhan list

OPTIONS
  -h, --help  show CLI help
  -m, --mask  Hide completed Todos
```

_See code: [src/commands/list.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/list.ts)_

## `todo-hassanalikhan remove`

Remove Completed todos

```
USAGE
  $ todo-hassanalikhan remove

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/remove.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/remove.ts)_

## `todo-hassanalikhan toggle [ID]`

Toggle completion status of a Todo by proving its ID.

```
USAGE
  $ todo-hassanalikhan toggle [ID]

ARGUMENTS
  ID  id of the todo whose status to be toggled

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/toggle.ts](https://github.com/hassan-ak/todo-cli/blob/v0.0.1/src/commands/toggle.ts)_

<!-- commandsstop -->
