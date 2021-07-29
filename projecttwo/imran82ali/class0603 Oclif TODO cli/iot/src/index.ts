#!/usr/bin/env node

export {run} from '@oclif/command'
require('@oclif/command').run()
.then(require('@oclif/command/flush'))
.catch(require('@oclif/errors/handle'))
