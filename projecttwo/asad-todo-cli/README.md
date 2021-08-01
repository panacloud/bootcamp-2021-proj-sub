# asad-cli

Todo App CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/asad-cli.svg)](https://npmjs.org/package/asad-cli)
[![Downloads/week](https://img.shields.io/npm/dw/asad-cli.svg)](https://npmjs.org/package/asad-cli)
[![License](https://img.shields.io/npm/l/asad-cli.svg)](https://github.com/Asadullahkhankaimkhani/asad-cli/blob/master/package.json)

- First where you want to use this package create a todos.jsos file

## then put and array [] brackets in file and then use

<!-- toc -->
* [asad-cli](#asad-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g asad-todo-cli
$ asad-cli COMMAND
running command...
$ asad-cli (-v|--version|version)
asad-todo-cli/1.0.1 win32-x64 node-v14.17.0
$ asad-cli --help [COMMAND]
USAGE
  $ asad-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`asad-cli add [TODO]`](#asad-cli-add-todo)
* [`asad-cli hello [FILE]`](#asad-cli-hello-file)
* [`asad-cli help [COMMAND]`](#asad-cli-help-command)
* [`asad-cli interact`](#asad-cli-interact)
* [`asad-cli list`](#asad-cli-list)
* [`asad-cli remove [INDEX]`](#asad-cli-remove-index)

## `asad-cli add [TODO]`

Add new todo to list

```
USAGE
  $ asad-cli add [TODO]

OPTIONS
  -d, --done
```

_See code: [src/commands/add.ts](https://github.com/Asadullahkhankaimkhani/asad-cli/blob/v1.0.1/src/commands/add.ts)_

## `asad-cli hello [FILE]`

describe the command here

```
USAGE
  $ asad-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ asad-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Asadullahkhankaimkhani/asad-cli/blob/v1.0.1/src/commands/hello.ts)_

## `asad-cli help [COMMAND]`

display help for asad-cli

```
USAGE
  $ asad-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `asad-cli interact`

Enter the interacting mode

```
USAGE
  $ asad-cli interact
```

_See code: [src/commands/interact.ts](https://github.com/Asadullahkhankaimkhani/asad-cli/blob/v1.0.1/src/commands/interact.ts)_

## `asad-cli list`

Print out all todos

```
USAGE
  $ asad-cli list
```

_See code: [src/commands/list.ts](https://github.com/Asadullahkhankaimkhani/asad-cli/blob/v1.0.1/src/commands/list.ts)_

## `asad-cli remove [INDEX]`

Remove a todo from list

```
USAGE
  $ asad-cli remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/Asadullahkhankaimkhani/asad-cli/blob/v1.0.1/src/commands/remove.ts)_
<!-- commandsstop -->
