todocli
=======

a simple todocli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/Mahmedabid/bootcamp-2021-proj-sub/tree/MAhmad/projecttwo/MAhmad/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ahm-todocli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
ahm-todocli/2.0.4 win32-x64 node-v16.1.0
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add [TODO]`](#todocli-add-todo)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli list`](#todocli-list)
* [`todocli remove [INDEX]`](#todocli-remove-index)
* [`todocli showdb`](#todocli-showdb)
* [`todocli status`](#todocli-status)

## `todocli add [TODO]`

Add new todo to list

```
USAGE
  $ todocli add [TODO]

OPTIONS
  -d, --done  mark todo as done

EXAMPLES

  $ checkme add "a new todo"
  [Success] Added new todo: a new todo


  $ checkme add
  ›   Error: please specify the new todo
```

_See code: [src/commands/add.ts](https://github.com/Mahmedabid/bootcamp-2021-proj-sub/blob/v2.0.4/src/commands/add.ts)_

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

## `todocli list`

Print out all todos

```
USAGE
  $ todocli list

OPTIONS
  -d, --done     show done todos
  -n, --notDone  show not done todos
```

_See code: [src/commands/list.ts](https://github.com/Mahmedabid/bootcamp-2021-proj-sub/blob/v2.0.4/src/commands/list.ts)_

## `todocli remove [INDEX]`

Remove a todo from list

```
USAGE
  $ todocli remove [INDEX]

OPTIONS
  -a, --all   remove all todos
  -d, --done  remove done todos

EXAMPLES

  $ checkme remove 0
  [Success] Removed todo: a new todo


  $ checkme remove
  ›   Error: please specify the todo's index
```

_See code: [src/commands/remove.ts](https://github.com/Mahmedabid/bootcamp-2021-proj-sub/blob/v2.0.4/src/commands/remove.ts)_

## `todocli showdb`

Command to show db file

```
USAGE
  $ todocli showdb
```

_See code: [src/commands/showdb.ts](https://github.com/Mahmedabid/bootcamp-2021-proj-sub/blob/v2.0.4/src/commands/showdb.ts)_

## `todocli status`

Enter the interacting mode

```
USAGE
  $ todocli status
```

_See code: [src/commands/status.ts](https://github.com/Mahmedabid/bootcamp-2021-proj-sub/blob/v2.0.4/src/commands/status.ts)_
<!-- commandsstop -->
