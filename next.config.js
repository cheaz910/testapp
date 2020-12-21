const withCSS = require('@zeit/next-css')
const dev = process.env.NODE_ENV !== 'production'

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       // eslint-disable-next-line global-require
//       require('./utils/generateSiteMap')
//     }

//     return config
//   }
// }

module.exports = withCSS({
  exportPathMap() {
    return {
      '/': { page: '/' }
    }
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/
      },
      use: [
        {
          loader: 'file-loader',
          options: {
            name(resourcePath) {
              return resourcePath.split('/public/')[1]
            },
            publicPath: '/'
          }
        }
      ]
    })
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
})
