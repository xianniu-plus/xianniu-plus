---
title: 业务表格组件
lang: zh-CN
---

# XnTable 业务表格组件 ^(beta)

这是一个对 table 组件 二次封装。

其中[table-column](http://localhost:5173/zh-CN/component/table.html#table-column-api) 的 API 与 table 组件一致。

## 基础用法

通过 `columns` 配置表格列，支持固定列、排序和表头提示等功能。
:::demo
xn-table/basic
:::

## 带分页的表格

结合分页功能展示数据。
:::demo
xn-table/pagination
:::

## 带选择功能的表格

支持行选择和批量操作。
:::demo
xn-table/selection
:::

## 插槽

### 默认插槽

用于自定义表格列内容，支持使用`#default="{ row, column }`作用域插槽。可以通过命名插槽或直接使用默认插槽自定义列内容。

:::demo
xn-table/default-slot
:::

### toolbar-left

工具栏左侧区域，可用于添加自定义按钮或操作。

:::demo
xn-table/toolbar-left
:::

### toolbar-right

工具栏右侧区域，可用于添加自定义按钮或操作。

:::demo
xn-table/toolbar-right
:::

## 属性

| 属性                  | 说明             | 类型                 | 默认值 |
| --------------------- | ---------------- | -------------------- | ------ |
| data                  | 表格数据         | Array                | []     |
| columns               | 列配置           | Array\<ColumnsType\> | []     |
| border                | 是否显示边框     | boolean              | false  |
| stripe                | 是否为斑马纹表格 | boolean              | false  |
| highlight-current-row | 是否高亮当前行   | boolean              | false  |
| is-selection          | 是否显示选择列   | boolean              | false  |
| show-selection-count  | 是否显示选择数量 | boolean              | true   |
| show-refresh          | 是否显示刷新按钮 | boolean              | true   |
| show-pagination       | 是否显示分页     | boolean              | true   |
| total                 | 总条目数         | number               | 0      |
| page-size             | 每页显示条目数   | number               | 10     |
| current-page          | 当前页数         | number               | 1      |

## ColumnsType 配置

| 属性                | 说明                 | 类型                         | 默认值 |
| ------------------- | -------------------- | ---------------------------- | ------ |
| prop                | 字段名               | string                       | -      |
| label               | 列标题               | string                       | -      |
| width               | 列宽                 | string \| number             | -      |
| fixed               | 固定列               | 'left' \| 'right' \| boolean | -      |
| sortable            | 是否可排序           | boolean                      | false  |
| labelMsg            | 表头提示信息         | string                       | -      |
| showOverflowTooltip | 是否显示文字溢出提示 | boolean                      | false  |

## 事件

| 事件名           | 说明               | 回调参数                  |
| ---------------- | ------------------ | ------------------------- |
| selection-change | 选择项变化时触发   | selection: 选中的数据数组 |
| current-change   | 当前页改变时触发   | page: 新页码              |
| size-change      | 每页条数改变时触发 | size: 新每页条数          |

## 方法

| 方法名             | 说明           | 参数                            |
| ------------------ | -------------- | ------------------------------- |
| clearSelection     | 清空选择       | -                               |
| toggleRowSelection | 切换行选中状态 | row: 行数据, selected: 是否选中 |
