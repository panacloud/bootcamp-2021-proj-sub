import {expect, test} from '@oclif/test'

describe('mycommands', () => {
  test
  .stdout()
  .command(['mycommands'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['mycommands', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
