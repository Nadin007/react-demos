const {resolve} = require('path')

module.exports = {
    mode: 'development',
    entry: './index.jsx',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
}