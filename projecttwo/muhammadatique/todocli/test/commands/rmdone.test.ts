import {expect, test} from '@oclif/test'

describe('rmdone', () => {
  test
  .stdout()
  .command(['rmdone'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['rmdone', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
