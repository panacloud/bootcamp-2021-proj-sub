checkme
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/checkme.svg)](https://npmjs.org/package/checkme)
[![Downloads/week](https://img.shields.io/npm/dw/checkme.svg)](https://npmjs.org/package/checkme)
[![License](https://img.shields.io/npm/l/checkme.svg)](https://github.com/faisalrahman36/checkme/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @faisalrahman36/checkme
$ checkme COMMAND
running command...
$ checkme (-v|--version|version)
@faisalrahman36/checkme/0.0.0 win32-x64 node-v14.17.4
$ checkme --help [COMMAND]
USAGE
  $ checkme COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`checkme add [TODO]`](#checkme-add-todo)
* [`checkme hello [FILE]`](#checkme-hello-file)
* [`checkme help [COMMAND]`](#checkme-help-command)
* [`checkme interact`](#checkme-interact)
* [`checkme list`](#checkme-list)
* [`checkme remove [INDEX]`](#checkme-remove-index)

## `checkme add [TODO]`

Add new todo to list

```
USAGE
  $ checkme add [TODO]

OPTIONS
  -d, --done
```

_See code: [src/commands/add.ts](https://github.com/faisalrahman36/checkme/blob/v0.0.0/src/commands/add.ts)_

## `checkme hello [FILE]`

describe the command here

```
USAGE
  $ checkme hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ checkme hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/faisalrahman36/checkme/blob/v0.0.0/src/commands/hello.ts)_

## `checkme help [COMMAND]`

display help for checkme

```
USAGE
  $ checkme help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `checkme interact`

Enter the interacting mode

```
USAGE
  $ checkme interact
```

_See code: [src/commands/interact.ts](https://github.com/faisalrahman36/checkme/blob/v0.0.0/src/commands/interact.ts)_

## `checkme list`

Print out all todos

```
USAGE
  $ checkme list
```

_See code: [src/commands/list.ts](https://github.com/faisalrahman36/checkme/blob/v0.0.0/src/commands/list.ts)_

## `checkme remove [INDEX]`

Remove a todo from list

```
USAGE
  $ checkme remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/faisalrahman36/checkme/blob/v0.0.0/src/commands/remove.ts)_
<!-- commandsstop -->
