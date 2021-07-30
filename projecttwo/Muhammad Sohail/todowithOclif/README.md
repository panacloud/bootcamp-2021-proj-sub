todowithOclif
=============

todo application with cli using oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todowithOclif.svg)](https://npmjs.org/package/todowithOclif)
[![Downloads/week](https://img.shields.io/npm/dw/todowithOclif.svg)](https://npmjs.org/package/todowithOclif)
[![License](https://img.shields.io/npm/l/todowithOclif.svg)](https://github.com/MSohail731/todowithOclif/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todowithOclif
$ todowithOclif COMMAND
running command...
$ todowithOclif (-v|--version|version)
todowithOclif/1.0.0 win32-x64 node-v15.5.0
$ todowithOclif --help [COMMAND]
USAGE
  $ todowithOclif COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todowithOclif hello [FILE]`](#todowithoclif-hello-file)
* [`todowithOclif help [COMMAND]`](#todowithoclif-help-command)

## `todowithOclif hello [FILE]`

describe the command here

```
USAGE
  $ todowithOclif hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ todowithOclif hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/MSohail731/todowithOclif/blob/v1.0.0/src/commands/hello.ts)_

## `todowithOclif help [COMMAND]`

display help for todowithOclif

```
USAGE
  $ todowithOclif help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
