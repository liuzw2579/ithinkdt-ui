const { version, naiveVersion } = require('../package.json')

require('node:fs').writeFileSync(
  require('node:path').resolve(__dirname, '..', 'src', 'version.ts'),
  `export const NAIVE_VERSION = '${naiveVersion}'\nexport const ITHINKDT_VERSION = '${version}'\nexport default ITHINKDT_VERSION\n`
)
