---
title: Development FAQ
lang: en-US
---

# Development FAQ

Here are the problems that are easy to encounter in development.

## If you encounter dependency related issues

```shell
rm -rf node_modules
pnpm i
```

## Link local dependencies

```shell
# get dist
pnpm build
cd dist/xianniu-plus
# set cur xianniu-plus to global `node_modules`
pnpm link --global
# for esm we also need link xianniu-plus for dist
pnpm link --global xianniu-plus

# go to your project, link to `xianniu-plus`
cd your-project
pnpm link --global xianniu-plus
```

> More info see [pnpm link](https://pnpm.io/cli/link).

## Theme

We should not write Chinese comments in scss files.

It will generate warning `@charset "UTF-8";` in the header of css file when built with vite.

> More info see [#3219](https://github.com/xianniu-plus/xianniu-plus/issues/3219).
