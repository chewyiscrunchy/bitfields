const path = require('path')

module.exports = {
    mode: 'production',
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bitfields.js',
        library: 'Bitfields',
        libraryTarget: 'window'
    }
}
