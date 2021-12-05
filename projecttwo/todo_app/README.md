checkme
=======

Creating a simple todo app in cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/checkme.svg)](https://npmjs.org/package/checkme)
[![Downloads/week](https://img.shields.io/npm/dw/checkme.svg)](https://npmjs.org/package/checkme)
[![License](https://img.shields.io/npm/l/checkme.svg)](https://github.com/Sultan336/checkme/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g checkme
$ checkme COMMAND
running command...
$ checkme (-v|--version|version)
checkme/1.0.0 linux-x64 node-v12.16.1
$ checkme --help [COMMAND]
USAGE
  $ checkme COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`checkme hello [FILE]`](#checkme-hello-file)
* [`checkme help [COMMAND]`](#checkme-help-command)
* [`checkme list [FILE]`](#checkme-list-file)

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
  hello world from ./src/hello.ts!!!!!!!
```

_See code: [src/commands/hello.ts](https://github.com/Sultan336/checkme/blob/v1.0.0/src/commands/hello.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `checkme list [FILE]`

describe the command here

```
USAGE
  $ checkme list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list.ts](https://github.com/Sultan336/checkme/blob/v1.0.0/src/commands/list.ts)_
<!-- commandsstop -->
