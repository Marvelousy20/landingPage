module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,css,ico,woff2,woff,eot,ttf,otf,svg,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/sw.js'
};