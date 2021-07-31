galaxy
======

creating todo app with cli oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/galaxy.svg)](https://npmjs.org/package/galaxy)
[![CircleCI](https://circleci.com/gh/MuhammadSohail92/galaxy/tree/master.svg?style=shield)](https://circleci.com/gh/MuhammadSohail92/galaxy/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/MuhammadSohail92/galaxy?branch=master&svg=true)](https://ci.appveyor.com/project/MuhammadSohail92/galaxy/branch/master)
[![Downloads/week](https://img.shields.io/npm/dw/galaxy.svg)](https://npmjs.org/package/galaxy)
[![License](https://img.shields.io/npm/l/galaxy.svg)](https://github.com/MuhammadSohail92/galaxy/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g galaxy
$ galaxy COMMAND
running command...
$ galaxy (-v|--version|version)
galaxy/1.0.0 win32-x64 node-v16.2.0
$ galaxy --help [COMMAND]
USAGE
  $ galaxy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`galaxy hello [FILE]`](#galaxy-hello-file)
* [`galaxy help [COMMAND]`](#galaxy-help-command)

## `galaxy hello [FILE]`

describe the command here

```
USAGE
  $ galaxy hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ galaxy hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/MuhammadSohail92/galaxy/blob/v1.0.0/src/commands/hello.ts)_

## `galaxy help [COMMAND]`

display help for galaxy

```
USAGE
  $ galaxy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
