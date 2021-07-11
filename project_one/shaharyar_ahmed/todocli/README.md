Todocli
=======

A command line todo app

I decided to make the project a little bit more better, so I used the oclif npm package

There is alot of room for improvements and I will improve the project in the near future, However it is
project submission worthy so I decided to submit it..

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ ./bin/run COMMAND
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`./bin/run help [COMMAND]`](#todocli-help-command)
* [`./bin/run add`](#todocli-add)
* [`./bin/run completed`](#todocli-completed)
* [`./bin/run delete`](#todocli-delete)
* [`./bin/run print`](#todocli-print)


## `todocli help [COMMAND]`

Display help for todocli

```
USAGE
  $ ./bin/run help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

## `todocli add`

Adds a new todo

```
USAGE
  $ ./bin/run add

OPTIONS
  --n, --new_task see all commands in CLI
```

## `todocli completed`

Assigns todo as completed by ID

```
USAGE
  $ ./bin/run completed

OPTIONS
  --id  see all commands in CLI
```

## `todocli delete`

Deletes todo by ID

```
USAGE
  $ ./bin/run delete

OPTIONS
  --id  see all commands in CLI
```

## `todocli print`

Prints all todos

```
USAGE
  $ ./bin/run print

```
<!-- commandsstop -->

# Example

```
$ ./bin/run add --n study  # Adds new todo
$ ./bin/run add --n eat    # Adds new todo
$ ./bin/run delete --id [ID OF TODO] # Removes TODO
$ ./bin/run completed --id [ID OF TODO] # Completes TODO
$ ./bin/run print # Prints all todos with id
```
