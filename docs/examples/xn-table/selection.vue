<template>
  <xn-table
    ref="tableRef"
    :data="tableData"
    :columns="columns"
    :is-selection="true"
    border
    @selection-change="handleSelectionChange"
  >
    <template #toolbar-left>
      <el-button
        type="danger"
        :disabled="!selectedCount"
        @click="handleBatchDelete"
      >
        批量删除
      </el-button>
    </template>
  </xn-table>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const columns = [
  {
    prop: 'date',
    label: '日期',
    width: 150,
  },
  {
    prop: 'name',
    label: '姓名',
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
    status: '在职',
  },
  {
    date: '2016-05-01',
    name: '赵六',
    address: '深圳市南山区科技园科苑路8号',
    age: 36,
    status: '休假',
  },
  {
    date: '2016-05-05',
    name: '钱七',
    address: '成都市武侯区人民南路四段3号',
    age: 29,
    status: '在职',
  },
])

const tableRef = ref()
const selectedCount = computed(() => tableRef.value?.selectedData?.length || 0)

const handleSelectionChange = (selection) => {
  console.log('选中的数据:', selection)
}

const handleBatchDelete = () => {
  // 批量删除逻辑
  console.log('批量删除被点击')
}
</script>
