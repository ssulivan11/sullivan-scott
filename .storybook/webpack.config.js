module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('babel-preset-react-app')],
          },
        },
        require.resolve('react-docgen-typescript-loader'),
      ],
    },
    {
      test: /\.(scss)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            localsConvention: 'camelCase',
            modules: {
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
    },
  )

  config.resolve.extensions.push('.ts', '.tsx', '.scss', '.js')

  return config
}
