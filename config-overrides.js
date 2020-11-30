const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@assets']: path.resolve(__dirname, './src/assets'),
    ['@utils']: path.resolve(__dirname, './src/utils'),
    ['@styles']: path.resolve(__dirname, './src/styles'),
    ['@views']: path.resolve(__dirname, './src/components/views'),
    ['@layout']: path.resolve(__dirname, './src/components/layout'),
    ['@theme']: path.resolve(__dirname, './src/components/theme'),
  })
);
