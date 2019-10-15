const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', {
    target: 'http://yapi.demo.qunar.com/mock/7091', // 目标服务器 host
    changeOrigin: true, // 默认false，是否需要改变原始主机头为目标URL
    pathRewrite: { // 重写请求
      '^/api': '/api/new'
    },
    // ws: true, // 是否代理websockets
    onProxyReq (proxyReq, req, res) {
      console.log('onProxyReq', req.url);
    },
    onProxyRes (proxyRes, req, res) {
      // console.log('proxyRes', res);
    },
    onError (err, req, res) {
      console.error('onError', err);
    }
  }));
}
