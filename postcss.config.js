const 	_nested = require('postcss-nested'),
	_cssvars = require('postcss-simple-vars'),
	_autoprefixer = require('autoprefixer'),
	_import = require('postcss-import'),
	_mixins = require('postcss-mixins');

      module.exports = {
	plugins: [
	      import(),
	      _nested(),
	      _cssvars(),
	      _autoprefixer(),
	      _import(),
	      _mixins()
	]
      }