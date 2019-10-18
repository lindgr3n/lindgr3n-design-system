const path = require('path')

module.exports = function ({ config }) {
    config.module.rules.unshift({
        test: /\.stories\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    });

    config.module.rules.push({
        test: /\.styl(us)?$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
        include: path.resolve(__dirname, '../'),
    });

    return config;
};