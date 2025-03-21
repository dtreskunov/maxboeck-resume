// This file handles the JS build.
// It will run webpack with babel over all JS defined in the main entry file.

// main entry point name
const ENTRY_FILE_NAME = 'main.js'

import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import mfs from 'memfs'

const isProd = process.env.ELEVENTY_ENV === 'production'

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class {
    // Configure Webpack in Here
    async data() {
        const entryPath = path.join(__dirname, `/${ENTRY_FILE_NAME}`)
        const outputPath = path.resolve(__dirname, '../../memory-fs/js/')

        // Transform .js files, run through Babel
        const rules = [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
        ]

        // pass environment down to scripts
        const envPlugin = new webpack.EnvironmentPlugin({
            ELEVENTY_ENV: process.env.ELEVENTY_ENV
        })

        // Main Config
        const webpackConfig = {
            mode: isProd ? 'production' : 'development',
            devtool: isProd ? false : 'inline-source-map', // https://webpack.js.org/configuration/devtool/
            entry: entryPath,
            output: { path: outputPath },
            module: { rules },
            plugins: [envPlugin],
        }

        return {
            permalink: `/assets/scripts/${ENTRY_FILE_NAME}`,
            eleventyExcludeFromCollections: true,
            webpackConfig
        }
    }

    /**
    Compile JS with Webpack, write the result to Memory Filesystem.
    this brilliant idea is taken from Mike Riethmuller / Supermaya
    @see https://github.com/MadeByMike/supermaya/blob/master/site/utils/compile-webpack.js
    @param {import('webpack').Configuration} webpackConfig
    */
    async compile(webpackConfig) {
        const compiler = webpack(webpackConfig)
        compiler.outputFileSystem = mfs
        compiler.inputFileSystem = fs
        compiler.intermediateFileSystem = mfs

        return new Promise((resolve, reject) => {
            compiler.run((err, stats) => {
                if (err || stats.hasErrors()) {
                    const errors =
                        err ||
                        (stats.compilation ? stats.compilation.errors : null)

                    reject(errors)
                    return
                }

                mfs.readFile(
                    webpackConfig.output.path + '/' + ENTRY_FILE_NAME,
                    'utf8',
                    (err, data) => {
                        if (err) reject(err)
                        else resolve(data)
                    }
                )
            })
        })
    }

    // render the JS file
    async render({ webpackConfig }) {
        try {
            return this.compile(webpackConfig)
        } catch (err) {
            console.log(err)
            return null
        }
    }
}
