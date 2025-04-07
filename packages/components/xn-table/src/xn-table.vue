<template>
  <div :class="[ns.b()]">
    <div :class="[ns.e('toolbar')]">
      <div :class="[ns.em('toolbar', 'left')]">
        <slot name="toolbar-left" />
      </div>
      <div :class="[ns.em('toolbar', 'right')]">
        <slot name="toolbar-right" />
        <el-popover trigger="click">
          <template #reference>
            <el-button type="primary" :icon="Menu" />
          </template>
          <div class="column-control">
            <div class="column-list">
              <el-checkbox
                v-model="allColumnsSelected"
                :indeterminate="isIndeterminate"
                :disabled="!props.columns.length"
                @change="handleCheckAllChange"
              >
                全选
              </el-checkbox>
              <el-checkbox-group
                v-model="selectedColumnKeys"
                @change="handleColumnSelectionChange"
              >
                <el-checkbox
                  v-for="col in props.columns"
                  :key="col[props.keyField.toString()]"
                  :value="col[props.keyField.toString()]"
                >
                  {{ col[props.titleField] }}
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </el-popover>
      </div>
    </div>
    <div :class="[ns.e('body')]">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <ElTableV2
            :columns="visibleTableColumns"
            :data="props.data"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
    <div :class="[ns.e('footer')]">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="props.total"
        :page-sizes="[10, 20, 30, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { ElPagination } from '@xianniu-plus/components/pagination'
import { ElAutoResizer, ElTableV2 } from '@xianniu-plus/components/table-v2'
import { ElButton } from '@xianniu-plus/components/button'
import { ElPopover } from '@xianniu-plus/components/popover'
import { ElCheckbox, ElCheckboxGroup } from '@xianniu-plus/components/checkbox'
import { useNamespace } from '@xianniu-plus/hooks'
import { XianniuComponents, debugWarn } from '@xianniu-plus/utils'
import { xnTableEmits, xnTableProps } from './xn-table'
import type { CheckboxValueType } from '@xianniu-plus/components/checkbox'
defineOptions({
  name: 'XnTable',
})
const { Menu } = XianniuComponents
const props = defineProps(xnTableProps)
const emit = defineEmits(xnTableEmits)

const ns = useNamespace('xn-table')

// 列选择相关
const selectedColumnKeys = ref<string[]>([])
const allColumnsSelected = ref(true)
const isIndeterminate = ref(false)

// 计算实际显示的列
const visibleTableColumns = computed(() => {
  const selectedKeys = new Set(selectedColumnKeys.value)

  if (selectedKeys.size === 0) {
    return []
  }

  return props.columns.filter((col) => {
    const key = col[props.keyField.toString()]
    return key !== undefined && key !== null && selectedKeys.has(String(key))
  })
})
const getAllColumnKeys = () => {
  if (!props.columns || props.columns.length === 0) {
    return []
  }
  return props.columns.map((col) => {
    const key = col[props.keyField.toString()]
    if (key === undefined || key === null) {
      debugWarn('XnTable', `Column is missing ${props.keyField} field:`)
      return String(col.key || '')
    }
    return String(key)
  })
}
// 监听选中列的变化
const handleColumnSelectionChange = (values: CheckboxValueType[]) => {
  selectedColumnKeys.value = values as string[]
  const checkedCount = selectedColumnKeys.value.length
  allColumnsSelected.value = checkedCount === props.columns.length
  isIndeterminate.value =
    checkedCount > 0 && checkedCount < props.columns.length
}

// 处理全选/取消全选
const handleCheckAllChange = (val: CheckboxValueType) => {
  selectedColumnKeys.value = val ? getAllColumnKeys() : []
  allColumnsSelected.value = !!val
  isIndeterminate.value = false
}

const currentPage = ref(props.currentPage)
const pageSize = ref(props.pageSize)

const handleSizeChange = (val: number) => {
  pageSize.value = val
  emit('update:pageSize', val)
  emit('size-change', val)
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  emit('update:currentPage', val)
  emit('current-change', val)
}

onMounted(() => {
  // 初始化选中所有列
  selectedColumnKeys.value = props.columns.map(
    (col) => col[props.keyField.toString()]
  )
})
</script>
