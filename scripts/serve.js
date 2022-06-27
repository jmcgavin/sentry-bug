const { copy } = require('fs-extra')
const { build } = require('esbuild')
const { startDevServer } = require('@web/dev-server')
const esbuildConfig = require('../esbuild.config')
const devServerConfig = require('../web-dev-server.config.js')

/**
 * Serve script
 *
 * @returns {Promise<void>}
 */
async function main () {
  await build({
    ...esbuildConfig,
    watch: {
      onRebuild (error, result) {
        if (error) {
          console.error('Watch build failed:', error)
        } else {
          console.log('Watch build succeeded!')
        }
      }
    }
  })
  await Promise.all([
    copy('index.html', 'dist/index.html')
  ])
  await startDevServer({
    config: devServerConfig,
    readFileConfig: false
  })
}

main()
