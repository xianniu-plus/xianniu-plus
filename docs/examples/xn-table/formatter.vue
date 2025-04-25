<template>
  <xn-table :data="tableData" :columns="columns" />
</template>

<script lang="ts" setup>
const columns = [
  {
    prop: 'date',
    label: '日期',
    width: 120,
  },
  {
    prop: 'name',
    label: '姓名',
    width: 100,
  },
  {
    prop: 'amount',
    label: '金额',
    formatter: (value) => `¥${value.toFixed(2)}`,
  },
]

const tableData = [
  {
    date: '2023-01-01',
    name: '张三',
    amount: 1234.56,
  },
  {
    date: '2023-01-02',
    name: '李四',
    amount: 789.12,
  },
]
</script>
