<template>
  <xn-table :data="tableData" :columns="columns">
    <template #column-status="{ row }">
      <el-tag :type="row.status === 'active' ? 'success' : 'danger'">
        {{ row.status === 'active' ? '活跃' : '禁用' }}
      </el-tag>
    </template>
  </xn-table>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElButton } from 'xianniu-plus'

const columns = [
  {
    prop: 'name',
    label: '姓名',
    width: 120,
  },
  {
    prop: 'status',
    label: '状态',
  },
  {
    prop: 'action',
    label: '操作',
    renderCell: ({ row }) =>
      h(
        ElButton,
        {
          size: 'small',
          onClick: () => handleAction(row),
        },
        { default: () => '编辑' }
      ),
  },
]

const tableData = [
  { name: '张三', status: 'active' },
  { name: '李四', status: 'inactive' },
]

const handleAction = (row) => {
  console.log('编辑行:', row)
}
</script>
