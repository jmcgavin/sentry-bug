const devServerConfig = {
  appIndex: './dist/index.html',
  rootDir: './dist',
  http2: true,
  open: true,
  watch: true,
  cors: true,
  port: 8000,
  debug: true
}

console.log('@web/dev-server config:', devServerConfig)
module.exports = devServerConfig
