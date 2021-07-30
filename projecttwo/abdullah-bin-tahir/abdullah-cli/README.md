abdullah-cli
============

A Todo CLI App made with oclif and TypeScript for BootCamp 2021

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/abdullah-cli.svg)](https://npmjs.org/package/abdullah-cli)
[![Downloads/week](https://img.shields.io/npm/dw/abdullah-cli.svg)](https://npmjs.org/package/abdullah-cli)
[![License](https://img.shields.io/npm/l/abdullah-cli.svg)](https://github.com/shy-tan/abdullah-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g abdullah-cli
$ abdullah-cli COMMAND
running command...
$ abdullah-cli (-v|--version|version)
abdullah-cli/0.0.0 win32-x64 node-v16.4.2
$ abdullah-cli --help [COMMAND]
USAGE
  $ abdullah-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`abdullah-cli add [FILE]`](#abdullah-cli-add-file)
* [`abdullah-cli hello [FILE]`](#abdullah-cli-hello-file)
* [`abdullah-cli help [COMMAND]`](#abdullah-cli-help-command)

## `abdullah-cli add [FILE]`

describe the command here

```
USAGE
  $ abdullah-cli add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/shy-tan/abdullah-cli/blob/v0.0.0/src/commands/add.ts)_

## `abdullah-cli hello [FILE]`

describe the command here

```
USAGE
  $ abdullah-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ abdullah-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/shy-tan/abdullah-cli/blob/v0.0.0/src/commands/hello.ts)_

## `abdullah-cli help [COMMAND]`

display help for abdullah-cli

```
USAGE
  $ abdullah-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
