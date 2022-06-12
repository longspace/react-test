const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware(
            '/api', {
                target: 'https://iapitest.pall.cn',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '/api': '/admin'
                }
            }
        )
    );
};
