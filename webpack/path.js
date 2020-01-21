const { resolve } = require('path')
const resolveApp = relativePath => resolve(process.cwd(), relativePath)  //拼接path
const BUILD_DIR = resolveApp('build/static')

module.exports = {
  viewHtml: BUILD_DIR,
  viewHtmlFile: resolveApp(`build/static/index.html`),
  appHtml: resolveApp('src/view/index.html'),
  appFavicon: resolveApp('src/client/images/favicon.ico'),
  appIndexJs:resolveApp('src/client/index.tsx'),
  appNodeModules: resolveApp('node_modules'),
}
