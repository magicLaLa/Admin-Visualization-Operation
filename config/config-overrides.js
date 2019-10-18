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
    '@/assets': path.resolve(__dirname, '../src/assets'),
    '@/api': path.resolve(__dirname, '../src/api'),
    '@/services': path.resolve(__dirname, '../src/services'),
    '@/components': path.resolve(__dirname, '../src/components'),
    '@/containers': path.resolve(__dirname, '../src/containers'),
    '@/models': path.resolve(__dirname, '../src/models'),
    '@/utils': path.resolve(__dirname, '../src/utils'),
    '@': path.resolve(__dirname, '../src'),
  }),
);
