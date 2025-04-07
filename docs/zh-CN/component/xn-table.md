---
title: 业务表格组件
lang: zh-CN
---

# XnTable 业务表格组件 ^(beta)

这是一个对 table-v2 虚拟化表格的二次封装，增加了列的筛选和页码的功能。它自动管理了表格的宽高。

:::tip

该组件**仍在测试中**，生产环境使用可能有风险。 若您发现了 bug 或问题，请于 [GitHub](https://github.com/xianniu-plus/xianniu-plus/issues) 报告给我们以便修复。 同时，有一些 API 并未在此文档中提及，因为部分还没有开发完全，因此我们不在此提及。

**即使**虚拟化的表格是高效的，但是当数据负载过大时，**网络**和**内存容量**也会成为您应用程序的瓶颈。 因此请牢记，虚拟化表格永远不是最完美的解决方案，请考虑数据分页、过滤器等优化方案。

:::

## 基础用法

让我们演示虚拟化表的性能，用 10 列和 1 000 行渲染一个基本示例。

:::demo

xn-table/basic

:::

## 修改标题的 key 和 title 的属性名称

当你不想用 key 和 title 作为列的唯一标识和显示标题，你可以修改这两个属性的名称。

:::demo

xn-table/field

:::

## TableV2 Attributes

| 属性名                             | 描述说明                     | 类型                          | 默认值  |
| ---------------------------------- | ---------------------------- | ----------------------------- | ------- |
| model-value / v-model:current-page | 当前页码                     | number                        | 1       |
| model-value / v-model:page-size    | 每页显示条目个数             | number                        | 10      |
| total                              | 页码的总条目数               | number                        | 0       |
| keyField                           | 列配置中作为唯一标识的字段名 | string                        | 'key'   |
| titleField                         | 列配置中作为显示标题的字段名 | string                        | 'title' |
| columns                            | 列 column 的配置数组         | [Column[]](#column-attribute) | —       |
| data                               | 要在表中渲染的数据数组       | [Data[]](#typings)            | []      |

## TableV2 Slots

| 插槽名       | 参数 |
| ------------ | ---- |
| toolbar-left |      |
| toolbar-left |      |

## TableV2 Events

| 事件名         | 描述               | 参数 |
| -------------- | ------------------ | ---- |
| size-change    | 页码的 size 被改变 |      |
| current-change | 页码被改变时触发   |      |
