module.exports = (ctx) => ({
  plugins: [
    'postcss-import',
    [
      'postcss-preset-env',
      {
        stage: 0,
        preserve: false,
        autoprefixer: {
          overrideBrowserslist: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9',
          ],
          flexbox: 'no-2009',
        },
      },
    ],
  ],
})
