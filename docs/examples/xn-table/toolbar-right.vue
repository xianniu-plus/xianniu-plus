<template>
  <xn-table :data="tableData" :columns="columns">
    <template #toolbar-right>
      <el-button type="info" @click="handleExport">导出</el-button>
      <el-button @click="handleRefresh">刷新</el-button>
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
const handleExport = () => {
  ElMessage.success('数据导出成功')
}

const handleRefresh = () => {
  ElMessage.info('数据已刷新')
}
</script>
