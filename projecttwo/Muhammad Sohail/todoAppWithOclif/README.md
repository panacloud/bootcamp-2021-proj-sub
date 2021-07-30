todoAppWithOclif
================

todoapplication with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todoAppWithOclif.svg)](https://npmjs.org/package/todoAppWithOclif)
[![Downloads/week](https://img.shields.io/npm/dw/todoAppWithOclif.svg)](https://npmjs.org/package/todoAppWithOclif)
[![License](https://img.shields.io/npm/l/todoAppWithOclif.svg)](https://github.com/MSohail731/todoAppWithOclif/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todoAppWithOclif
$ todoAppWithOclif COMMAND
running command...
$ todoAppWithOclif (-v|--version|version)
todoAppWithOclif/0.0.0 win32-x64 node-v15.5.0
$ todoAppWithOclif --help [COMMAND]
USAGE
  $ todoAppWithOclif COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todoAppWithOclif add [FILE]`](#todoappwithoclif-add-file)
* [`todoAppWithOclif hello [FILE]`](#todoappwithoclif-hello-file)
* [`todoAppWithOclif help [COMMAND]`](#todoappwithoclif-help-command)
* [`todoAppWithOclif todo [FILE]`](#todoappwithoclif-todo-file)

## `todoAppWithOclif add [FILE]`

describe the command here

```
USAGE
  $ todoAppWithOclif add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/MSohail731/todoAppWithOclif/blob/v0.0.0/src/commands/add.ts)_

## `todoAppWithOclif hello [FILE]`

describe the command here

```
USAGE
  $ todoAppWithOclif hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todoAppWithOclif hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/MSohail731/todoAppWithOclif/blob/v0.0.0/src/commands/hello.ts)_

## `todoAppWithOclif help [COMMAND]`

display help for todoAppWithOclif

```
USAGE
  $ todoAppWithOclif help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todoAppWithOclif todo [FILE]`

describe the command here

```
USAGE
  $ todoAppWithOclif todo [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/todo.ts](https://github.com/MSohail731/todoAppWithOclif/blob/v0.0.0/src/commands/todo.ts)_
<!-- commandsstop -->
