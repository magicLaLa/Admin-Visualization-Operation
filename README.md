## Admin-Visualization-Operation
可视化操作后台

## [AlloyTeam ESLint 规则](https://github.com/AlloyTeam/eslint-config-alloy#typescript)

## 一些问题

### 设置别名alias

1. 修改config-overrides.js文件：

```typescript
module.exports = override(
  // 别名配置
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@/api': path.resolve(__dirname, './src/api'),
    '@/utils': path.resolve(__dirname, './src/utils'),
  }),
);
```

2. 在tsconfig.json文件中新增paths:

```json
{
  "compilerOptions": {
    "paths": {
      "api": ["./src/api/index"],
      "components/*": ["./src/components/*"],
      "containers/*": ["./src/containers/*"],
      "store/*": ["./src/store/*"],
      "utils/*": ["./src/utils/*"],
    }
  },
}
```

__在于第二个步骤，当你`yarn start`启动项目的时候你会发现`tsconfig.json`文件中的paths不见了__，理所当然的项目编译报错：`Cannot find module '@/api'`

解决方法：[CRA](https://github.com/facebook/create-react-app/issues/5645)，在根目录新建一个`paths.json`文件，具体文件名称可自行修改，然后在tsconfig.json中新加：`"extends": "./paths.json"`。
