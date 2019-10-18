
module.exports = {
  extends: [
      'alloy',
      'alloy/react',
      'alloy/typescript',
  ],
  env: {
      // 这里填入你的项目用到的环境
      // 它们预定义了不同环境的全局变量，比如：
      browser: true,
      node: true,
      // mocha: true,
      jest: true,
      // jquery: true
  },
  globals: {
      // 这里填入你的项目需要的全局变量
      // false 表示这个全局变量不允许被重新赋值，比如：
      //
      // myGlobal: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置
    // 强制所有控制语句使用一致的括号风格
    'curly': [2, 'multi-line'],
    // 要求使用 ===和 !==
    'eqeqeq': [2, 'allow-null'],
    // 禁止不必要的.bind()调用
    'no-extra-bind': 2,
    // 禁止case语句落空
    'no-fallthrough': 2,
    // 禁用with语句
    'no-with': 2,
    // 要求IIFE使用括号括起来
    'wrap-iife': 2,
    // 禁止无效的this，只能用在构造器，类，对象字面量
    "no-invalid-this": 0,
    // 禁止额外的分号
    'no-extra-semi': 2,
    // 行尾必须使用分号结束
    'semi': 2,
    // 强制使用驼峰拼写法命名规定
    'camelcase': [0, {
      'properties': 'always'
    }],
    // 强制在JSX属性中一致地使用双引号或单引号
    'jsx-quotes': [2, 'prefer-single'],
  }
};
