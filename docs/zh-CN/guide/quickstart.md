---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中使用 Xianniu Plus。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts [main.ts]
import { createApp } from 'vue'
import XianniuPlus from 'xianniu-plus'
import 'xianniu-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(XianniuPlus)
app.mount('#app')
```

#### Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json [tsconfig.json]
{
  "compilerOptions": {
    // ...
    "types": ["xianniu-plus/global"]
  }
}
```

### 按需导入

您需要使用额外的插件来导入要使用的组件。

#### 自动导入 <el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">推荐</el-tag>

首先你需要安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 `Vite` 或 `Webpack` 的配置文件中

##### Vite

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { XianniuPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [XianniuPlusResolver()],
    }),
    Components({
      resolvers: [XianniuPlusResolver()],
    }),
  ],
})
```

##### Webpack

```js [webpack.config.js]
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { XianniuPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [XianniuPlusResolver()],
    }),
    Components({
      resolvers: [XianniuPlusResolver()],
    }),
  ],
}
```

想了解更多打包 ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) 和配置工具，请参考 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install)。

#### Nuxt

对于 Nuxt 用户，只需要安装 `@xianniu-plus/nuxt` 即可。

```shell
npm install -D @xianniu-plus/nuxt
```

然后将下面的代码写入你的配置文件.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@xianniu-plus/nuxt'],
})
```

配置文档参考 [docs](https://github.com/xianniu-plus/xianniu-plus-nuxt#readme).

### 手动导入

Xianniu Plus 提供了基于 ES Module 的开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。

但你需要安装 [unplugin-xianniu-plus](https://github.com/xianniu-plus/unplugin-xianniu-plus) 来导入样式。 配置文档参考 [docs](https://github.com/xianniu-plus/unplugin-xianniu-plus#readme).

```vue [App.vue]
<template>
  <el-button>I am ElButton</el-button>
</template>

<script>
import { ElButton } from 'xianniu-plus'
export default {
  components: { ElButton },
}
</script>
```

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import XianniuPlus from 'unplugin-xianniu-plus/vite'

export default defineConfig({
  // ...
  plugins: [XianniuPlus()],
})
```

## 快捷搭建项目模板

我们提供了 [Vite 模板](https://github.com/xianniu-plus/xianniu-plus-vite-starter)。

对于 Nuxt 用户，我们有一个 [Nuxt 模板](https://github.com/xianniu-plus/xianniu-plus-nuxt-starter)。

对于 Laravel 用户，我们也准备了 [ Laravel 模板](https://github.com/xianniu-plus/xianniu-plus-in-laravel-starter)。

## 全局配置

在引入 XianniuPlus 时，可以传入一个包含 `size` 和 `zIndex` 属性的全局配置对象。 `size` 用于设置表单组件的默认尺寸，`zIndex` 用于设置弹出组件的层级，`zIndex` 的默认值为 `2000`。

完整引入：

```ts [main.ts]
import { createApp } from 'vue'
import XianniuPlus from 'xianniu-plus'
import App from './App.vue'

const app = createApp(App)
app.use(XianniuPlus, { size: 'small', zIndex: 3000 })
```

按需引入:

```vue [App.vue]
<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <app />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'xianniu-plus'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>
```

## 使用 Nuxt.js

您也可以使用 [Nuxt.js](https://nuxt.com):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/edit/#!/xianniu-plus-nuxt-starter?path=components%2FExamples.vue%3A1%3A0" alt="nuxt-xianniu-plus on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## 开始使用

现在你可以启动项目了。 对于每个组件的用法，请查阅 [对应的独立文档](https://xianniu-plus.org/en-US/component/button.html)。
