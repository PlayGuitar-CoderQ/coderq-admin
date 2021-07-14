# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/PlayGuitar-CoderQ/coderq-admin/compare/v1.3.0...v2.0.0) (2021-07-14)

## 1.3.0 (2021-07-14)


### Features

* **.husky:** 🚑增加shell脚本命令 commit检测 ([3d1a8f7](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/3d1a8f7fedd83d845245bba93615d7a7e124d119))
* **animated:** ✨ 增加动画样式Animate.css ([b20904a](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b20904a4268dce94ada1649123882fdc30f31131))
* **antd:** ✨增加antd-design ui框架 ([ae79269](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/ae792693b5d6852eca3ba1e51f06c18189eced8e))
* **axios:** ✨  新增axios请求库 ([736085e](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/736085e94ccd2cc50b4d55f828b6a7c24ff7dcdd))
* **components:** 🤠新增Icon组件 ([8477399](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/84773994cb5c860cd8f0cdfa57347fcc1cfac246))
* **crypto:** ✨ 增加加密方法采用crypto加密库 ([e96d5dd](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e96d5dd8c685d29aa5fbe4b74ce87abc4c55ea5c))
* **env:** ✨ 新增接口别名 ([516db02](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/516db02de5d4034ec69546cc8d1072aab7486bab))
* **home:** ✨增加git commit提交时候校验 ([2a710fb](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/2a710fb08e2f09f052f7fc3d3784be1e23c13f5d))
* **home:** 🎉初始化项目，新增stylelint, eslint规范项目，并且写上大量注释 ([8399583](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/83995830485c236d1643eac0e6b2a036a06c2d24))
* **Layout/Header:** ✨ 新增Layout的Header组件 ([6da1dcf](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6da1dcfacb354e24bf3dcff82a80525a20559ede))
* **layout:** ✨ 新增Layout组件 ([c944848](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c94484828fe52b9ad7deb5b8763924587476c09c))
* **localStorage:** ✨ 增加创建缓存类附加加密缓存,携带当前时间 ([517e1e6](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/517e1e63bded3e7d6e77b43774eb90f03eb49539))
* **Login.tsx:** ✨新增登录页面 ([cab9a50](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/cab9a50c1e46f72fc929df8782cea88663bdd286))
* **mobx:** ✨新增全局状态管理mobx | mobx-react-lite ([9444f52](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9444f52d389077c7fae151b61bcf802c9a2728a7))
* **mock:** ✨ 新增mockjs,已经vitePluginMock插件，用于在后端项目未启动之前的，数据请求模拟 ([8ac1e0c](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8ac1e0c919a5981dc3ca82983646e21e69174c53))
* **proxy:** :fire:  新增proxy代理，跨域接口 ([6bb4925](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6bb4925637bc5a83dadae2908b3c50cd64895b49))
* **route:** ✨新增路由功能 ([9586021](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9586021b41841fc5ac9cf1e4fc5f43b8824b3650))
* **utils:** ✨ 新增环境变量,以及新增通过不同模式下获取不同的缓存前缀方法 ([8eebbec](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8eebbec6ae30882aa3ee7a31dbdfc6fc202434a7))
* **vite.config.js:** ⚡️新增vite-plugin-imp 插件优化antd样式按需加载 ([c2cf4e3](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c2cf4e351250a0469c5242b055b0e79d877eaacc))
* **vite.config.ts:** ✨新增主題色配置，並且根據@ant-design/color 顏色版生成，含义优化了vite插件的封装 ([31843e5](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/31843e5268626f097ac30451af70494fdba8eede))


### Bug Fixes

* 🐛 解决env的undefined 问题，导致接口报错 ([6741ba9](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6741ba9e6ee78fb56312f9c9a508649ca50be471))
* 修复package.json ([a919202](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/a91920236ab4d0194253be60e442953e89f480d3))
* **package.json:** 🐛补充开源协议，安装缺少的依赖 ([b112f00](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b112f000d1cd7027695bbc0251ecbf083792d863))
* **theme:** 🐛  修复项目初始化的时候,没有判断到正确的模式 ([e108e45](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e108e45e5813db05c47623744f30f965f1a0ac1c))
* **theme:** 🔧修复暗黑主题的样式引入 ([841a181](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/841a181b4fe6d5789615735c61d40c0e76eb6a5b))

## 1.2.0 (2021-07-14)


### Features

* **.husky:** 🚑增加shell脚本命令 commit检测 ([3d1a8f7](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/3d1a8f7fedd83d845245bba93615d7a7e124d119))
* **animated:** ✨ 增加动画样式Animate.css ([b20904a](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b20904a4268dce94ada1649123882fdc30f31131))
* **antd:** ✨增加antd-design ui框架 ([ae79269](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/ae792693b5d6852eca3ba1e51f06c18189eced8e))
* **axios:** ✨  新增axios请求库 ([736085e](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/736085e94ccd2cc50b4d55f828b6a7c24ff7dcdd))
* **components:** 🤠新增Icon组件 ([8477399](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/84773994cb5c860cd8f0cdfa57347fcc1cfac246))
* **crypto:** ✨ 增加加密方法采用crypto加密库 ([e96d5dd](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e96d5dd8c685d29aa5fbe4b74ce87abc4c55ea5c))
* **env:** ✨ 新增接口别名 ([516db02](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/516db02de5d4034ec69546cc8d1072aab7486bab))
* **home:** ✨增加git commit提交时候校验 ([2a710fb](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/2a710fb08e2f09f052f7fc3d3784be1e23c13f5d))
* **home:** 🎉初始化项目，新增stylelint, eslint规范项目，并且写上大量注释 ([8399583](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/83995830485c236d1643eac0e6b2a036a06c2d24))
* **Layout/Header:** ✨ 新增Layout的Header组件 ([6da1dcf](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6da1dcfacb354e24bf3dcff82a80525a20559ede))
* **layout:** ✨ 新增Layout组件 ([c944848](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c94484828fe52b9ad7deb5b8763924587476c09c))
* **localStorage:** ✨ 增加创建缓存类附加加密缓存,携带当前时间 ([517e1e6](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/517e1e63bded3e7d6e77b43774eb90f03eb49539))
* **Login.tsx:** ✨新增登录页面 ([cab9a50](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/cab9a50c1e46f72fc929df8782cea88663bdd286))
* **mobx:** ✨新增全局状态管理mobx | mobx-react-lite ([9444f52](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9444f52d389077c7fae151b61bcf802c9a2728a7))
* **mock:** ✨ 新增mockjs,已经vitePluginMock插件，用于在后端项目未启动之前的，数据请求模拟 ([8ac1e0c](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8ac1e0c919a5981dc3ca82983646e21e69174c53))
* **proxy:** :fire:  新增proxy代理，跨域接口 ([6bb4925](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6bb4925637bc5a83dadae2908b3c50cd64895b49))
* **route:** ✨新增路由功能 ([9586021](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9586021b41841fc5ac9cf1e4fc5f43b8824b3650))
* **utils:** ✨ 新增环境变量,以及新增通过不同模式下获取不同的缓存前缀方法 ([8eebbec](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8eebbec6ae30882aa3ee7a31dbdfc6fc202434a7))
* **vite.config.js:** ⚡️新增vite-plugin-imp 插件优化antd样式按需加载 ([c2cf4e3](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c2cf4e351250a0469c5242b055b0e79d877eaacc))
* **vite.config.ts:** ✨新增主題色配置，並且根據@ant-design/color 顏色版生成，含义优化了vite插件的封装 ([31843e5](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/31843e5268626f097ac30451af70494fdba8eede))


### Bug Fixes

* 🐛 解决env的undefined 问题，导致接口报错 ([6741ba9](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6741ba9e6ee78fb56312f9c9a508649ca50be471))
* 修复package.json ([a919202](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/a91920236ab4d0194253be60e442953e89f480d3))
* **package.json:** 🐛补充开源协议，安装缺少的依赖 ([b112f00](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b112f000d1cd7027695bbc0251ecbf083792d863))
* **theme:** 🐛  修复项目初始化的时候,没有判断到正确的模式 ([e108e45](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e108e45e5813db05c47623744f30f965f1a0ac1c))
* **theme:** 🔧修复暗黑主题的样式引入 ([841a181](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/841a181b4fe6d5789615735c61d40c0e76eb6a5b))

## 1.2.0 (2021-07-14)


### Features

* **.husky:** 🚑增加shell脚本命令 commit检测 ([3d1a8f7](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/3d1a8f7fedd83d845245bba93615d7a7e124d119))
* **animated:** ✨ 增加动画样式Animate.css ([b20904a](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b20904a4268dce94ada1649123882fdc30f31131))
* **antd:** ✨增加antd-design ui框架 ([ae79269](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/ae792693b5d6852eca3ba1e51f06c18189eced8e))
* **axios:** ✨  新增axios请求库 ([736085e](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/736085e94ccd2cc50b4d55f828b6a7c24ff7dcdd))
* **components:** 🤠新增Icon组件 ([8477399](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/84773994cb5c860cd8f0cdfa57347fcc1cfac246))
* **crypto:** ✨ 增加加密方法采用crypto加密库 ([e96d5dd](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e96d5dd8c685d29aa5fbe4b74ce87abc4c55ea5c))
* **env:** ✨ 新增接口别名 ([516db02](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/516db02de5d4034ec69546cc8d1072aab7486bab))
* **home:** ✨增加git commit提交时候校验 ([2a710fb](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/2a710fb08e2f09f052f7fc3d3784be1e23c13f5d))
* **home:** 🎉初始化项目，新增stylelint, eslint规范项目，并且写上大量注释 ([8399583](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/83995830485c236d1643eac0e6b2a036a06c2d24))
* **Layout/Header:** ✨ 新增Layout的Header组件 ([6da1dcf](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6da1dcfacb354e24bf3dcff82a80525a20559ede))
* **layout:** ✨ 新增Layout组件 ([c944848](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c94484828fe52b9ad7deb5b8763924587476c09c))
* **localStorage:** ✨ 增加创建缓存类附加加密缓存,携带当前时间 ([517e1e6](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/517e1e63bded3e7d6e77b43774eb90f03eb49539))
* **Login.tsx:** ✨新增登录页面 ([cab9a50](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/cab9a50c1e46f72fc929df8782cea88663bdd286))
* **mobx:** ✨新增全局状态管理mobx | mobx-react-lite ([9444f52](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9444f52d389077c7fae151b61bcf802c9a2728a7))
* **mock:** ✨ 新增mockjs,已经vitePluginMock插件，用于在后端项目未启动之前的，数据请求模拟 ([8ac1e0c](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8ac1e0c919a5981dc3ca82983646e21e69174c53))
* **proxy:** :fire:  新增proxy代理，跨域接口 ([6bb4925](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6bb4925637bc5a83dadae2908b3c50cd64895b49))
* **route:** ✨新增路由功能 ([9586021](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9586021b41841fc5ac9cf1e4fc5f43b8824b3650))
* **utils:** ✨ 新增环境变量,以及新增通过不同模式下获取不同的缓存前缀方法 ([8eebbec](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8eebbec6ae30882aa3ee7a31dbdfc6fc202434a7))
* **vite.config.js:** ⚡️新增vite-plugin-imp 插件优化antd样式按需加载 ([c2cf4e3](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c2cf4e351250a0469c5242b055b0e79d877eaacc))
* **vite.config.ts:** ✨新增主題色配置，並且根據@ant-design/color 顏色版生成，含义优化了vite插件的封装 ([31843e5](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/31843e5268626f097ac30451af70494fdba8eede))


### Bug Fixes

* 🐛 解决env的undefined 问题，导致接口报错 ([6741ba9](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6741ba9e6ee78fb56312f9c9a508649ca50be471))
* 修复package.json ([a919202](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/a91920236ab4d0194253be60e442953e89f480d3))
* **package.json:** 🐛补充开源协议，安装缺少的依赖 ([b112f00](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b112f000d1cd7027695bbc0251ecbf083792d863))
* **theme:** 🐛  修复项目初始化的时候,没有判断到正确的模式 ([e108e45](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e108e45e5813db05c47623744f30f965f1a0ac1c))
* **theme:** 🔧修复暗黑主题的样式引入 ([841a181](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/841a181b4fe6d5789615735c61d40c0e76eb6a5b))

## 1.1.0 (2021-07-14)


### Features

* **.husky:** 🚑增加shell脚本命令 commit检测 ([3d1a8f7](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/3d1a8f7fedd83d845245bba93615d7a7e124d119))
* **animated:** ✨ 增加动画样式Animate.css ([b20904a](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b20904a4268dce94ada1649123882fdc30f31131))
* **antd:** ✨增加antd-design ui框架 ([ae79269](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/ae792693b5d6852eca3ba1e51f06c18189eced8e))
* **axios:** ✨  新增axios请求库 ([736085e](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/736085e94ccd2cc50b4d55f828b6a7c24ff7dcdd))
* **components:** 🤠新增Icon组件 ([8477399](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/84773994cb5c860cd8f0cdfa57347fcc1cfac246))
* **crypto:** ✨ 增加加密方法采用crypto加密库 ([e96d5dd](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e96d5dd8c685d29aa5fbe4b74ce87abc4c55ea5c))
* **env:** ✨ 新增接口别名 ([516db02](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/516db02de5d4034ec69546cc8d1072aab7486bab))
* **home:** ✨增加git commit提交时候校验 ([2a710fb](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/2a710fb08e2f09f052f7fc3d3784be1e23c13f5d))
* **home:** 🎉初始化项目，新增stylelint, eslint规范项目，并且写上大量注释 ([8399583](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/83995830485c236d1643eac0e6b2a036a06c2d24))
* **Layout/Header:** ✨ 新增Layout的Header组件 ([6da1dcf](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6da1dcfacb354e24bf3dcff82a80525a20559ede))
* **layout:** ✨ 新增Layout组件 ([c944848](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c94484828fe52b9ad7deb5b8763924587476c09c))
* **localStorage:** ✨ 增加创建缓存类附加加密缓存,携带当前时间 ([517e1e6](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/517e1e63bded3e7d6e77b43774eb90f03eb49539))
* **Login.tsx:** ✨新增登录页面 ([cab9a50](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/cab9a50c1e46f72fc929df8782cea88663bdd286))
* **mobx:** ✨新增全局状态管理mobx | mobx-react-lite ([9444f52](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9444f52d389077c7fae151b61bcf802c9a2728a7))
* **mock:** ✨ 新增mockjs,已经vitePluginMock插件，用于在后端项目未启动之前的，数据请求模拟 ([8ac1e0c](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8ac1e0c919a5981dc3ca82983646e21e69174c53))
* **proxy:** :fire:  新增proxy代理，跨域接口 ([6bb4925](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6bb4925637bc5a83dadae2908b3c50cd64895b49))
* **route:** ✨新增路由功能 ([9586021](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9586021b41841fc5ac9cf1e4fc5f43b8824b3650))
* **utils:** ✨ 新增环境变量,以及新增通过不同模式下获取不同的缓存前缀方法 ([8eebbec](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8eebbec6ae30882aa3ee7a31dbdfc6fc202434a7))
* **vite.config.js:** ⚡️新增vite-plugin-imp 插件优化antd样式按需加载 ([c2cf4e3](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c2cf4e351250a0469c5242b055b0e79d877eaacc))
* **vite.config.ts:** ✨新增主題色配置，並且根據@ant-design/color 顏色版生成，含义优化了vite插件的封装 ([31843e5](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/31843e5268626f097ac30451af70494fdba8eede))


### Bug Fixes

* 🐛 解决env的undefined 问题，导致接口报错 ([6741ba9](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6741ba9e6ee78fb56312f9c9a508649ca50be471))
* 修复package.json ([a919202](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/a91920236ab4d0194253be60e442953e89f480d3))
* **package.json:** 🐛补充开源协议，安装缺少的依赖 ([b112f00](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b112f000d1cd7027695bbc0251ecbf083792d863))
* **theme:** 🐛  修复项目初始化的时候,没有判断到正确的模式 ([e108e45](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e108e45e5813db05c47623744f30f965f1a0ac1c))
* **theme:** 🔧修复暗黑主题的样式引入 ([841a181](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/841a181b4fe6d5789615735c61d40c0e76eb6a5b))

# 1.0.0 (2021-07-14)


### Bug Fixes

* 🐛 解决env的undefined 问题，导致接口报错 ([6741ba9](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6741ba9e6ee78fb56312f9c9a508649ca50be471))
* 修复package.json ([a919202](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/a91920236ab4d0194253be60e442953e89f480d3))
* **package.json:** 🐛补充开源协议，安装缺少的依赖 ([b112f00](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b112f000d1cd7027695bbc0251ecbf083792d863))
* **theme:** 🐛  修复项目初始化的时候,没有判断到正确的模式 ([e108e45](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e108e45e5813db05c47623744f30f965f1a0ac1c))
* **theme:** 🔧修复暗黑主题的样式引入 ([841a181](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/841a181b4fe6d5789615735c61d40c0e76eb6a5b))


### Features

* **.husky:** 🚑增加shell脚本命令 commit检测 ([3d1a8f7](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/3d1a8f7fedd83d845245bba93615d7a7e124d119))
* **animated:** ✨ 增加动画样式Animate.css ([b20904a](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/b20904a4268dce94ada1649123882fdc30f31131))
* **antd:** ✨增加antd-design ui框架 ([ae79269](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/ae792693b5d6852eca3ba1e51f06c18189eced8e))
* **axios:** ✨  新增axios请求库 ([736085e](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/736085e94ccd2cc50b4d55f828b6a7c24ff7dcdd))
* **components:** 🤠新增Icon组件 ([8477399](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/84773994cb5c860cd8f0cdfa57347fcc1cfac246))
* **crypto:** ✨ 增加加密方法采用crypto加密库 ([e96d5dd](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/e96d5dd8c685d29aa5fbe4b74ce87abc4c55ea5c))
* **env:** ✨ 新增接口别名 ([516db02](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/516db02de5d4034ec69546cc8d1072aab7486bab))
* **home:** ✨增加git commit提交时候校验 ([2a710fb](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/2a710fb08e2f09f052f7fc3d3784be1e23c13f5d))
* **home:** 🎉初始化项目，新增stylelint, eslint规范项目，并且写上大量注释 ([8399583](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/83995830485c236d1643eac0e6b2a036a06c2d24))
* **Layout/Header:** ✨ 新增Layout的Header组件 ([6da1dcf](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6da1dcfacb354e24bf3dcff82a80525a20559ede))
* **layout:** ✨ 新增Layout组件 ([c944848](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c94484828fe52b9ad7deb5b8763924587476c09c))
* **localStorage:** ✨ 增加创建缓存类附加加密缓存,携带当前时间 ([517e1e6](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/517e1e63bded3e7d6e77b43774eb90f03eb49539))
* **Login.tsx:** ✨新增登录页面 ([cab9a50](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/cab9a50c1e46f72fc929df8782cea88663bdd286))
* **mobx:** ✨新增全局状态管理mobx | mobx-react-lite ([9444f52](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9444f52d389077c7fae151b61bcf802c9a2728a7))
* **mock:** ✨ 新增mockjs,已经vitePluginMock插件，用于在后端项目未启动之前的，数据请求模拟 ([8ac1e0c](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8ac1e0c919a5981dc3ca82983646e21e69174c53))
* **proxy:** :fire:  新增proxy代理，跨域接口 ([6bb4925](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/6bb4925637bc5a83dadae2908b3c50cd64895b49))
* **route:** ✨新增路由功能 ([9586021](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/9586021b41841fc5ac9cf1e4fc5f43b8824b3650))
* **utils:** ✨ 新增环境变量,以及新增通过不同模式下获取不同的缓存前缀方法 ([8eebbec](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/8eebbec6ae30882aa3ee7a31dbdfc6fc202434a7))
* **vite.config.js:** ⚡️新增vite-plugin-imp 插件优化antd样式按需加载 ([c2cf4e3](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/c2cf4e351250a0469c5242b055b0e79d877eaacc))
* **vite.config.ts:** ✨新增主題色配置，並且根據@ant-design/color 顏色版生成，含义优化了vite插件的封装 ([31843e5](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/31843e5268626f097ac30451af70494fdba8eede))


### Performance Improvements

* **axios:** ⚡ 优化请求,增加拦截器和拦截钩子 ([f2d4811](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/f2d4811c79a5069ad0f391445b56ae2ec660a43c))
* **axios:** 🎨 优化axios请求的封装,已经可以实例化 ([edc905d](https://github.com/PlayGuitar-CoderQ/coderq-admin/commit/edc905d00e13d8e51802aa867589f16745616464))
