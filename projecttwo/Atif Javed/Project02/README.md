todocliapp
==========

Todo Command Line Inerface Application Using Oclif and TS

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocliapp.svg)](https://npmjs.org/package/todocliapp)
[![CircleCI](https://circleci.com/gh/MAtifJaved/todocliapp/tree/master.svg?style=shield)](https://circleci.com/gh/MAtifJaved/todocliapp/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/todocliapp.svg)](https://npmjs.org/package/todocliapp)
[![License](https://img.shields.io/npm/l/todocliapp.svg)](https://github.com/MAtifJaved/todocliapp/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocliapp_by_atif
$ todocliapp COMMAND
running command...
$ todocliapp (-v|--version|version)
todocliapp_by_atif/0.0.0 win32-x64 node-v14.15.4
$ todocliapp --help [COMMAND]
USAGE
  $ todocliapp COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocliapp add [TODO]`](#todocliapp-add-todo)
* [`todocliapp help [COMMAND]`](#todocliapp-help-command)
* [`todocliapp inquire`](#todocliapp-inquire)
* [`todocliapp list`](#todocliapp-list)
* [`todocliapp remove`](#todocliapp-remove)
* [`todocliapp toggle [ID]`](#todocliapp-toggle-id)

## `todocliapp add [TODO]`

Add new todo to list/Collection

```
USAGE
  $ todocliapp add [TODO]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/add.ts](https://github.com/MAtifJaved/todocliapp/blob/v0.0.0/src/commands/add.ts)_

## `todocliapp help [COMMAND]`

display help for todocliapp

```
USAGE
  $ todocliapp help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todocliapp inquire`

Use App with prompting for user inputs

```
USAGE
  $ todocliapp inquire

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/inquire.ts](https://github.com/MAtifJaved/todocliapp/blob/v0.0.0/src/commands/inquire.ts)_

## `todocliapp list`

Display list of all / incomplete todos

```
USAGE
  $ todocliapp list

OPTIONS
  -h, --help  show CLI help
  -m, --mask  Hide completed Todos
```

_See code: [src/commands/list.ts](https://github.com/MAtifJaved/todocliapp/blob/v0.0.0/src/commands/list.ts)_

## `todocliapp remove`

Remove Completed todos

```
USAGE
  $ todocliapp remove

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/remove.ts](https://github.com/MAtifJaved/todocliapp/blob/v0.0.0/src/commands/remove.ts)_

## `todocliapp toggle [ID]`

Toggle completion status of a Todo by proving its ID.

```
USAGE
  $ todocliapp toggle [ID]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/toggle.ts](https://github.com/MAtifJaved/todocliapp/blob/v0.0.0/src/commands/toggle.ts)_
<!-- commandsstop -->
