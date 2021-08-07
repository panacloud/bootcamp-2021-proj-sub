iot
===

A simple todo CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/iot.svg)](https://npmjs.org/package/iot)
[![Downloads/week](https://img.shields.io/npm/dw/iot.svg)](https://npmjs.org/package/iot)
[![License](https://img.shields.io/npm/l/iot.svg)](https://github.com/imran82ali/imran82ali/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g iot
$ iot COMMAND
running command...
$ iot (-v|--version|version)
iot/1.0.0 linux-x64 node-v16.5.0
$ iot --help [COMMAND]
USAGE
  $ iot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`iot add [FILE]`](#iot-add-file)
* [`iot hello [FILE]`](#iot-hello-file)
* [`iot help [COMMAND]`](#iot-help-command)

## `iot add [FILE]`

describe the command here

```
USAGE
  $ iot add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/imran82ali/imran82ali/blob/v1.0.0/src/commands/add.ts)_

## `iot hello [FILE]`

describe the command here

```
USAGE
  $ iot hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ iot hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/imran82ali/imran82ali/blob/v1.0.0/src/commands/hello.ts)_

## `iot help [COMMAND]`

display help for iot

```
USAGE
  $ iot help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
