module.exports = {
  entryPoints: ['index.js'],
  outdir: 'dist/src',
  allowOverwrite: true,
  format: 'esm',
  bundle: true,
  minify: true,
  sourcemap: true,
  treeShaking: true,
  splitting: true,
  ignoreAnnotations: true
}
