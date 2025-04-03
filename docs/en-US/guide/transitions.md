---
title: Built-in Transitions
lang: en-US
---

# Built-in Transition

You can use Element's built-in transitions directly.
Before that, please read the [transition docs](https://vuejs.org/guide/built-ins/transition.html).

## Fade

:::demo We have two fading effects: `xn-fade-in-linear` and `xn-fade-in`.

transitions/fade

:::

## Zoom

:::demo `xn-zoom-in-left`, `xn-zoom-in-center`, `xn-zoom-in-top` and `xn-zoom-in-bottom` are provided.

transitions/zoom

:::

## Collapse

For collapse effect, use the `el-collapse-transition` component.

:::demo

transitions/collapse

:::

## On-demand import

```ts [mian.ts]
// collapse
import { ElCollapseTransition } from 'xianniu-plus'
// fade/zoom
import 'xianniu-plus/lib/theme-chalk/base.css'
import App from './App.vue'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
```
