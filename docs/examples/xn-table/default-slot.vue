<template>
  <xn-table
    :data="tableData"
    :columns="columns"
    border
    stripe
    :show-refresh="false"
  >
    <!-- 默认插槽示例 -->
    <el-table-column label="操作" fixed="right">
      <template #default="scope">
        <el-button type="text" @click="handleEdit(scope)">编辑</el-button>
        <el-button type="text" @click="handleDelete(scope)">删除</el-button>
      </template>
    </el-table-column>
  </xn-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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
    width: 100,
  },
]

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
  {
    date: '2016-05-04',
    name: '王五',
    address: '广州市天河区珠江新城华夏路10号',
    age: 45,
    status: '休假',
  },
  {
    date: '2016-05-01',
    name: '赵六',
    address: '深圳市南山区科技园科苑路8号',
    age: 36,
    status: '在职',
  },
])
const handleEdit = (row: any) => {
  console.log(row)
}
const handleDelete = (row: any) => {
  console.log(row)
}
</script>
