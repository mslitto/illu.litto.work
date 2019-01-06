const HTML = require('@mspg/transpile-posthtml')
const CSS = require('@mspg/transpile-stylus')
const JS = require('@mspg/transpile-babel')

module.exports = {
  TRANSPILERS: {
    HTML,
    CSS,
    JS,
  },
  WEB_ROOT: '/illu.litto.work/',
}
