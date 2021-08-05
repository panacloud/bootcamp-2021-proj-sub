import {expect, test} from '@oclif/test'

describe('inquirer', () => {
  test
  .stdout()
  .command(['inquirer'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['inquirer', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
