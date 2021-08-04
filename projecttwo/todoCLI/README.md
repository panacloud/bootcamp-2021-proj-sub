todoCLI
=======

PIAIC9555&#39;s TODO APP

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todoCLI.svg)](https://npmjs.org/package/todoCLI)
[![Downloads/week](https://img.shields.io/npm/dw/todoCLI.svg)](https://npmjs.org/package/todoCLI)
[![License](https://img.shields.io/npm/l/todoCLI.svg)](https://github.com/AtaMustafa87/todoCLI/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todoCLI
$ todoCLI COMMAND
running command...
$ todoCLI (-v|--version|version)
todoCLI/1.0.0 win32-x64 node-v14.16.0
$ todoCLI --help [COMMAND]
USAGE
  $ todoCLI COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todoCLI hello [FILE]`](#todocli-hello-file)
* [`todoCLI help [COMMAND]`](#todocli-help-command)
* [`todoCLI interact [FILE]`](#todocli-interact-file)

## `todoCLI hello [FILE]`

describe the command here

```
USAGE
  $ todoCLI hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todoCLI hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/AtaMustafa87/todoCLI/blob/v1.0.0/src/commands/hello.ts)_

## `todoCLI help [COMMAND]`

display help for todoCLI

```
USAGE
  $ todoCLI help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todoCLI interact [FILE]`

describe the command here

```
USAGE
  $ todoCLI interact [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/interact.ts](https://github.com/AtaMustafa87/todoCLI/blob/v1.0.0/src/commands/interact.ts)_
<!-- commandsstop -->
