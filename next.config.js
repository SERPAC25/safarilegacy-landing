// next.config.js

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-src https://www.youtube.com https://www.youtube-nocookie.com; script-src 'self' 'unsafe-inline' https://www.youtube.com; object-src 'none';"
          }
        ],
      },
    ];
  },
};
