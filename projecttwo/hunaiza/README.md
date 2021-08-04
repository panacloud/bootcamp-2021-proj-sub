checkme
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/checkme.svg)](https://npmjs.org/package/checkme)
[![CircleCI](https://circleci.com/gh/hunaiza/checkme/tree/master.svg?style=shield)](https://circleci.com/gh/hunaiza/checkme/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/hunaiza/checkme?branch=master&svg=true)](https://ci.appveyor.com/project/hunaiza/checkme/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/checkme.svg)](https://npmjs.org/package/checkme)
[![License](https://img.shields.io/npm/l/checkme.svg)](https://github.com/hunaiza/checkme/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hunaizaocliftodo
$ hunaizaocliftodo COMMAND
running command...
$ hunaizaocliftodo (-v|--version|version)
hunaizaocliftodo/0.0.0 win32-x64 node-v14.16.0
$ hunaizaocliftodo --help [COMMAND]
USAGE
  $ hunaizaocliftodo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hunaizaocliftodo add [TODO]`](#hunaizaocliftodo-add-todo)
* [`hunaizaocliftodo hello [FILE]`](#hunaizaocliftodo-hello-file)
* [`hunaizaocliftodo help [COMMAND]`](#hunaizaocliftodo-help-command)
* [`hunaizaocliftodo interact`](#hunaizaocliftodo-interact)
* [`hunaizaocliftodo list`](#hunaizaocliftodo-list)
* [`hunaizaocliftodo remove [INDEX]`](#hunaizaocliftodo-remove-index)

## `hunaizaocliftodo add [TODO]`

Add new todo to list

```
USAGE
  $ hunaizaocliftodo add [TODO]

OPTIONS
  -d, --done
```

_See code: [src/commands/add.ts](https://github.com/hunaiza/hunaizaocliftodo/blob/v0.0.0/src/commands/add.ts)_

## `hunaizaocliftodo hello [FILE]`

describe the command here

```
USAGE
  $ hunaizaocliftodo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ hunaizaocliftodo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/hunaiza/hunaizaocliftodo/blob/v0.0.0/src/commands/hello.ts)_

## `hunaizaocliftodo help [COMMAND]`

display help for hunaizaocliftodo

```
USAGE
  $ hunaizaocliftodo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `hunaizaocliftodo interact`

Enter the interacting mode

```
USAGE
  $ hunaizaocliftodo interact
```

_See code: [src/commands/interact.ts](https://github.com/hunaiza/hunaizaocliftodo/blob/v0.0.0/src/commands/interact.ts)_

## `hunaizaocliftodo list`

Print out all todos

```
USAGE
  $ hunaizaocliftodo list
```

_See code: [src/commands/list.ts](https://github.com/hunaiza/hunaizaocliftodo/blob/v0.0.0/src/commands/list.ts)_

## `hunaizaocliftodo remove [INDEX]`

Remove a todo from list

```
USAGE
  $ hunaizaocliftodo remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/hunaiza/hunaizaocliftodo/blob/v0.0.0/src/commands/remove.ts)_
<!-- commandsstop -->
