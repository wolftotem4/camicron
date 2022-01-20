const path = require("path")

module.exports = {
    globDirectory: ".",
    globPatterns: [
        "**/*.{js,bin}"
    ],
    globIgnores: [
        'node_modules/**/*',
        'webpack.config.js',
        'workbox-config.js'
    ],
    additionalManifestEntries: [
        {url:"/", revision: hashFile(path.resolve(__dirname, "index.htm"))}
    ],
    dontCacheBustURLsMatching: /\/app\.[0-9a-f]+\.js$/,
    swDest: 'sw.js',
	swSrc: 'sw-base.js'
}

/**
 * @param   {string}  file
 * @returns {string}
 */
 function hashFile(file) {
	const crypto = require('crypto')
	const fs = require('fs')

	const fileBuffer = fs.readFileSync(file)
	const hashSum = crypto.createHash('md5')
	hashSum.update(fileBuffer)

	return hashSum.digest('hex')
}
