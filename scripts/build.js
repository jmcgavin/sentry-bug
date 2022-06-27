const { copy, remove } = require('fs-extra')
const { analyzeMetafile, build } = require('esbuild')
const esbuildConfig = require('../esbuild.config')

async function main () {
  await remove('build')
  const result = await build({
    ...esbuildConfig,
    metafile: true
  })
  await Promise.all([
    copy('index.html', 'dist/index.html')
  ])
  const text = await analyzeMetafile(result.metafile)
  console.log(text)
  console.log('Build finished!')
}

main()
