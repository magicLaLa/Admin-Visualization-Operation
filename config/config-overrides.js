require('path');
import {
  override,
  fixBabelImports,
  addWebpackAlias,
} from 'customize-cra';
import path from 'path';

module.exports = override(
  // 按需加载antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // 别名配置
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
);
