var path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
     },  
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, '/'),
        compress: true,
        port: 9000
    }
};