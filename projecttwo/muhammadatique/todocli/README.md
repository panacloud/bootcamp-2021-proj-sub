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
* [`mytodo add [FILE]`](#mytodo-add-file)
* [`mytodo hello [FILE]`](#mytodo-hello-file)
* [`mytodo help [COMMAND]`](#mytodo-help-command)

## `mytodo add [FILE]`

describe the command here

```
USAGE
  $ mytodo add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/m-atique/todocli/blob/v0.0.0/src/commands/add.ts)_

## `mytodo hello [FILE]`

describe the command here

```
USAGE
  $ mytodo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mytodo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/m-atique/todocli/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
