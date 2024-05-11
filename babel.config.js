const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
    },
  ],
  '@babel/preset-react',
]

const plugins = [
  'react-hot-loader/babel',
  [
    '@babel/plugin-transform-runtime',
    {
      corejs: 2,
    },
  ],
]

const env = {
  test: {
    presets,
    plugins: ['@babel/plugin-transform-modules-commonjs'],
  },
};

module.exports = (api) => {
  api.cache(false);

  return {
    exclude: /node_modules/,
    presets,
    env,
    plugins,
  };
};
