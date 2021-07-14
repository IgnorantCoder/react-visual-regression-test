const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                loader: "ts-loader",
                test: /\.tsx?$/,
                options: {
                    configFile: "tsconfig.json",
                },
            },
            {
                loader: "css-loader",
                test: /\.css$/i,
                options: {
                    modules: true,
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "static/js/bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 3000,
        historyApiFallback: true,
        host: "0.0.0.0",
        hot: true,
        inline: true,
    },
};
