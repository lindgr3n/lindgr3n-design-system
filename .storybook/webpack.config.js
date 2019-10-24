const path = require('path')

module.exports = function ({ config }) {
    // config.module.rules.unshift({
    //     test: /\.stories\.js?$/,
    //     loaders: [require.resolve('@storybook/addon-storysource/loader')],
    //     enforce: 'pre',
    // });

    config.module.rules.push({
        test: /\.styl(us)?$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
        include: path.resolve(__dirname, '../'),
    });

    // Untill https://github.com/storybookjs/storybook/issues/8013 is fixed
    config.module.rules.push({
        resourceQuery: /blockType=custom/,
        loader: require.resolve('./ignore-loader.js')
    })

    config.module.rules.push({
        test: /\.vue$/,
        loaders: [require.resolve('storybook-addon-vue-info/loader')],
        // loader: 'storybook-addon-vue-info/loader',
        enforce: 'post'
    })


    return config;
};