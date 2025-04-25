---
title: Business Table Component
lang: en-US
---

# XnTable Business Table Component ^(beta)

This is a secondary encapsulation of the table component.

The API of [table-column](http://localhost:5173/zh-CN/component/table.html#table-column-api) is consistent with the table component.

## Basic Usage

Configure table columns through `columns`, supporting fixed columns, sorting, and header tooltips.
:::demo
xn-table/basic
:::

## Table with Pagination

Display data with pagination functionality.
:::demo
xn-table/pagination
:::

## Table with Selection

Support row selection and batch operations.
:::demo
xn-table/selection
:::

## Slots

### Default Slot

Used to customize table column content, supports using `#default="{ row, column }"` scoped slot. You can customize column content through named slots or directly using the default slot.

:::demo
xn-table/default-slot
:::

### toolbar-left

Toolbar left area, can be used to add custom buttons or operations.

:::demo
xn-table/toolbar-left
:::

### toolbar-right

Toolbar right area, can be used to add custom buttons or operations.

:::demo
xn-table/toolbar-right
:::

## Properties

| Property              | Description                      | Type                 | Default |
| --------------------- | -------------------------------- | -------------------- | ------- |
| data                  | Table data                       | Array                | []      |
| columns               | Column configuration             | Array\<ColumnsType\> | []      |
| border                | Whether to show border           | boolean              | false   |
| stripe                | Whether to show stripe           | boolean              | false   |
| highlight-current-row | Whether to highlight current row | boolean              | false   |
| is-selection          | Whether to show selection column | boolean              | false   |
| show-selection-count  | Whether to show selection count  | boolean              | true    |
| show-refresh          | Whether to show refresh button   | boolean              | true    |
| show-pagination       | Whether to show pagination       | boolean              | true    |
| total                 | Total number of items            | number               | 0       |
| page-size             | Items per page                   | number               | 10      |
| current-page          | Current page number              | number               | 1       |

## ColumnsType Configuration

| Property            | Description                      | Type                         | Default |
| ------------------- | -------------------------------- | ---------------------------- | ------- |
| prop                | Field name                       | string                       | -       |
| label               | Column title                     | string                       | -       |
| width               | Column width                     | string \| number             | -       |
| fixed               | Fixed column                     | 'left' \| 'right' \| boolean | -       |
| sortable            | Whether sortable                 | boolean                      | false   |
| labelMsg            | Header tooltip message           | string                       | -       |
| showOverflowTooltip | Whether to show overflow tooltip | boolean                      | false   |

## Events

| Event Name       | Description                         | Parameters                     |
| ---------------- | ----------------------------------- | ------------------------------ |
| selection-change | Triggered when selection changes    | selection: selected data array |
| current-change   | Triggered when current page changes | page: new page number          |
| size-change      | Triggered when page size changes    | size: new page size            |

## Methods

| Method Name        | Description                 | Parameters                       |
| ------------------ | --------------------------- | -------------------------------- |
| clearSelection     | Clear selection             | -                                |
| toggleRowSelection | Toggle row selection status | row: row data, selected: boolean |
