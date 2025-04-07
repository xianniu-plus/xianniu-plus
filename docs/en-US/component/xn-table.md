---
title: Business Table Component
lang: en-US
---

# XnTable Business Table Component ^(beta)

This is a secondary encapsulation of the table-v2 virtualized table, adding column filtering and pagination functionality. It automatically manages the table's width and height.

:::tip

This component is **still in testing**, and there may be risks when used in production environments. If you find any bugs or issues, please report them to us on [GitHub](https://github.com/xianniu-plus/xianniu-plus/issues) for fixing. Additionally, some APIs are not mentioned in this documentation because they are not fully developed yet, so we do not mention them here.

**Even though** virtualized tables are efficient, **network** and **memory capacity** can still become bottlenecks for your application when data load is too large. Therefore, please remember that virtualized tables are never the perfect solution, consider optimization solutions such as data pagination, filters, etc.

:::

## Basic Usage

Let's demonstrate the performance of the virtualized table by rendering a basic example with 10 columns and 1,000 rows.

:::demo

xn-table/basic

:::

## Customizing Key and Title Field Names

When you don't want to use 'key' and 'title' as the column's unique identifier and display title, you can customize these field names.

:::demo

xn-table/field

:::

## TableV2 Attributes

| Name                               | Description                                                  | Type                          | Default |
| ---------------------------------- | ------------------------------------------------------------ | ----------------------------- | ------- |
| model-value / v-model:current-page | Current page number                                          | number                        | 1       |
| model-value / v-model:page-size    | Number of items per page                                     | number                        | 10      |
| total                              | Total number of items for pagination                         | number                        | 0       |
| keyField                           | Field name used as unique identifier in column configuration | string                        | 'key'   |
| titleField                         | Field name used as display title in column configuration     | string                        | 'title' |
| columns                            | Configuration array for table columns                        | [Column[]](#column-attribute) | —       |
| data                               | Array of data to be rendered in table                        | [Data[]](#typings)            | []      |

## TableV2 Slots

| Name          | Parameters |
| ------------- | ---------- |
| toolbar-left  | —          |
| toolbar-right | —          |

## TableV2 Events

| Event Name     | Description                            | Parameters     |
| -------------- | -------------------------------------- | -------------- |
| size-change    | Triggered when page size is changed    | (size: number) |
| current-change | Triggered when current page is changed | (page: number) |
