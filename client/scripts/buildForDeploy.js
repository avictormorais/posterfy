import { spawnSync } from 'node:child_process'
import process from 'node:process'

const npmCli = process.env.npm_execpath
const command = npmCli || (process.platform === 'win32' ? 'npm.cmd' : 'npm')
const args = npmCli ? [npmCli, 'run', 'build'] : ['run', 'build']

const result = spawnSync(npmCli ? process.execPath : command, args, {
  stdio: 'inherit',
  env: { ...process.env, SEO_REQUIRE_API: 'true' },
})

if (result.error) throw result.error
if (result.signal) {
  console.error(`Deploy build stopped by signal ${result.signal}.`)
  process.exit(1)
}
process.exit(result.status ?? 1)
