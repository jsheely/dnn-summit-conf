const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    target: 'web',
    entry: [
        './src/js/main.tsx'
    ],
    output: {
        filename: 'main.js',
        path: './dist/js/'
    },
    // resolve: {
    //     extensions: ["", ".ts", ".tsx", ".js"]
    // },
    plugins: [
        new CleanWebpackPlugin(['dist', 'build'], {
            verbose: true,
            dry: false,
        }),
        new ExtractTextPlugin('../style/[name].css', {
            allChunks: true
        })
    ],
    module: {
        loaders: [{
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}