const {
  override,
  fixBabelImports,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  // 按需加载antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // 别名配置
  addWebpackAlias({
    '@': path.resolve(__dirname, '../src'),
    '@/api': path.resolve(__dirname, '../src/api'),
    '@/utils': path.resolve(__dirname, '../src/utils'),
  }),
);
