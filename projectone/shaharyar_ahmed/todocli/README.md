Todocli
=======

A command line todo app

I decided to make the project a little bit more better, so I used the oclif npm package

There is alot of room for improvements and I will improve the project in the near future, However it is
project submission worthy so I decided to submit it..

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Example](#example)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @shaharyarahmed/tdcli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
@shaharyarahmed/tdcli/0.0.1 linux-x64 node-v16.4.2
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add`](#todocli-add)
* [`todocli completed`](#todocli-completed)
* [`todocli delete`](#todocli-delete)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli print`](#todocli-print)

## `todocli add`

Adds a new todo

```
USAGE
  $ todocli add

OPTIONS
  -n, --new_task=new_task  a new task
```

_See code: [src/commands/add.ts](https://github.com/ShaharyarAhmed-bot/todocli/blob/v0.0.1/src/commands/add.ts)_

## `todocli completed`

Assigns todo as completed

```
USAGE
  $ todocli completed

OPTIONS
  -t, --todo=todo  (required) name of the todo
```

_See code: [src/commands/completed.ts](https://github.com/ShaharyarAhmed-bot/todocli/blob/v0.0.1/src/commands/completed.ts)_

## `todocli delete`

Removes a todo

```
USAGE
  $ todocli delete

OPTIONS
  -t, --todo=todo  (required) name of the todo
```

_See code: [src/commands/delete.ts](https://github.com/ShaharyarAhmed-bot/todocli/blob/v0.0.1/src/commands/delete.ts)_

## `todocli help [COMMAND]`

display help for todocli

```
USAGE
  $ todocli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `todocli print`

Prints all exisiting todos

```
USAGE
  $ todocli print
```

_See code: [src/commands/print.ts](https://github.com/ShaharyarAhmed-bot/todocli/blob/v0.0.1/src/commands/print.ts)_
<!-- commandsstop -->

# Example

```
$ ./bin/run add -n study  # Adds new todo
$ ./bin/run add -n eat    # Adds new todo
$ ./bin/run delete -t [NAME OF TODO] # Removes TODO
$ ./bin/run completed -t [NAME OF TODO] # Completes TODO
$ ./bin/run print # Prints all todos
```
