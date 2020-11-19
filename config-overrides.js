const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@utils': './src/utils',
    '@styles': './src/styles',
    '@views': './src/components/views',
    '@layout': './src/components/layout',
    '@theme': './src/components/theme',
  })(config);

  return config;
};
