module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  webpack(config) {
    config.externals = config.externals || {};
    config.externals['styletron-server'] = 'styletron-server';
    return config;
  },
};
