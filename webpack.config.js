const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'app.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.[contenthash].js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            path: false,
            fs: false
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/
            },

            {
                test: /\.bin$/i,
                type: 'asset/resource',
                generator: {
                    // important, otherwise it will output into a folder that is not served by next
                    filename: 'static/[hash][ext][query]'
                }
            }
        ]
    }
}
