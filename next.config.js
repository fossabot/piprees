const withOffline = require('next-offline')
const withPrefresh = require('@prefresh/next')
const CACHE_TIME = 24 * 60 * 60
const NETWORK_TIME = 3

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest),
  generateInDevMode: false,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    skipWaiting: true,
    clientsClaim: true,
    cleanupOutdatedCaches: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/api\.statickit\.com\/.*/,
        handler: 'NetworkOnly',
      },
      {
        urlPattern: /^https:\/\/piprees\.dev\/.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'self-calls',
          expiration: {
            maxEntries: 40,
            maxAgeSeconds: CACHE_TIME,
          },
          cacheableResponse: {
            statuses: [200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/x\.toastedanalytics\.com\/.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'toasted-calls',
          expiration: {
            maxEntries: 1,
            maxAgeSeconds: CACHE_TIME,
          },
          cacheableResponse: {
            statuses: [200],
          },
        },
      },
      {
        urlPattern: /^https:\/\/cdn\.toastedanalytics\.com\/.*/,
        handler: 'NetworkFirst',
        options: {
          backgroundSync: {
            name: 'analytics-sync',
            options: {
              maxRetentionTime: CACHE_TIME,
            },
          },
          cacheName: 'analytics-calls',
          networkTimeoutSeconds: NETWORK_TIME,
          expiration: {
            maxEntries: 12,
            maxAgeSeconds: CACHE_TIME,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  webpack(config, { dev, isServer }) {
    // Move Preact into the framework chunk instead of duplicating in routes:
    const splitChunks = config.optimization && config.optimization.splitChunks
    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups
      const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, { test })
        cacheGroups.commons.name = 'framework'
      }
    }

    if (isServer) {
      config.externals.push(
        /^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/
      )
    }

    // Install webpack aliases:
    const aliases = config.resolve.alias || (config.resolve.alias = {})
    aliases.react = aliases['react-dom'] = 'preact/compat'

    // Automatically inject Preact DevTools:
    if (dev && !isServer) {
      const entry = config.entry
      config.entry = () =>
        entry().then(entries => {
          entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || [])
          return entries
        })
    }

    return config
  },
}

module.exports = withOffline(withPrefresh(nextConfig))
