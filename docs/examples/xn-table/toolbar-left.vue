<template>
  <xn-table :data="tableData" :columns="columns">
    <template #toolbar-left>
      <el-button type="primary" @click="handleAdd">新增</el-button>
      <el-button @click="handleImport">导入</el-button>
    </template>
  </xn-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'xianniu-plus'

const tableData = ref([
  {
    date: '2016-05-03',
    name: '张三',
    address: '北京市朝阳区建国门外大街1号',
    age: 32,
    status: '在职',
  },
  {
    date: '2016-05-02',
    name: '李四',
    address: '上海市浦东新区陆家嘴环路1000号',
    age: 28,
    status: '离职',
  },
])
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
    prop: 'address',
    label: '地址',
    width: 200,
  },
  {
    prop: 'status',
    label: '状态',
  },
]

const handleAdd = () => {
  ElMessage.success('点击了新增按钮')
}

const handleImport = () => {
  ElMessage.info('点击了导入按钮')
}
</script>
