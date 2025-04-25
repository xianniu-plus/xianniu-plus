<template>
  <div :class="[ns.b()]">
    <div :class="[ns.e('toolbar')]">
      <div :class="[ns.em('toolbar', 'left')]">
        <slot name="toolbar-left" />
        <template
          v-if="isSelection && showSelectionCount && selectedData.length > 0"
        >
          <span>已选择 {{ selectedData.length }} 项</span>
          <el-button type="primary" link @click="clearSelection">
            取消选择
          </el-button>
        </template>
      </div>
      <div :class="[ns.em('toolbar', 'right')]">
        <slot name="toolbar-right" />
        <el-button
          v-if="showRefresh"
          :icon="Refresh"
          type="primary"
          plain
          @click="handleRefresh"
        />
      </div>
    </div>
    <div :class="[ns.e('body')]">
      <!--
    border 是表格边框和表头拖拽
    stripe 是表格斑马线
    highlight-current-row 是否支持单选
  -->
      <el-table
        ref="tableRef"
        :data="data"
        :border="border"
        :stripe="stripe"
        :highlight-current-row="highlightCurrentRow"
        style="width: 100%; height: 100%"
        @selection-change="handleSelectionChange"
      >
        <!-- 选择框 -->
        <el-table-column v-if="isSelection" type="selection" width="40" />
        <!-- 序号 -->
        <el-table-column
          label="序号"
          width="60"
          type="index"
          :index="1"
          align="center"
        />

        <!-- 通过columns配置生成的列 -->
        <template v-if="columns.length">
          <el-table-column
            v-for="(col, index) in columns"
            :key="index"
            v-bind="col"
          >
            <template #header>
              <span>{{ col.label }}</span>
              <el-tooltip
                v-if="col.labelMsg"
                :content="col.labelMsg"
                placement="top"
              >
                <div class="caret-wrapper">
                  <el-icon><QuestionFilled /></el-icon>
                </div>
              </el-tooltip>
            </template>
            <template #default="scope">
              <template v-if="col.renderCell">
                <component
                  :is="
                    col.renderCell({
                      value: scope.row[col.prop],
                      row: scope.row,
                      column: col,
                      index: scope.$index,
                    })
                  "
                />
              </template>
              <template v-else-if="col.formatter">
                {{ col.formatter(scope.row[col.prop], scope.row) }}
              </template>
              <template v-else>
                <slot :name="`column-${col.prop}`" v-bind="scope">
                  {{ scope.row[col.prop] }}
                </slot>
              </template>
            </template>
          </el-table-column>
        </template>
        <!-- 自定义列插槽 -->
        <slot />
      </el-table>
    </div>
    <!-- 分页 -->
    <div v-if="showPagination" :class="[ns.e('pagination')]">
      <el-pagination
        v-model:current-page="currentPageSync"
        v-model:page-size="pageSizeSync"
        :total="total"
        layout="total, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElTable, ElTableColumn } from '@xianniu-plus/components/table'
import { ElPagination } from '@xianniu-plus/components/pagination'
import { ElButton } from '@xianniu-plus/components/button'
import { ElTooltip } from '@xianniu-plus/components/tooltip'
import { ElIcon } from '@xianniu-plus/components/icon'
import { useNamespace } from '@xianniu-plus/hooks'
import { XianniuComponents } from '@xianniu-plus/utils'
import { xnTableEmits, xnTableProps } from './xn-table'

const { Refresh, QuestionFilled } = XianniuComponents

defineOptions({
  name: 'XnTable',
})

const props = defineProps(xnTableProps)
const emit = defineEmits(xnTableEmits)

const ns = useNamespace('xn-table')
const tableRef = ref<InstanceType<typeof ElTable>>()
const selectedData = ref<InstanceType<typeof props.data>>([])

// 分页相关的计算属性
const currentPageSync = computed({
  get: () => props.currentPage,
  set: (val) => emit('update:currentPage', val),
})

const pageSizeSync = computed({
  get: () => props.pageSize,
  set: (val) => emit('update:pageSize', val),
})

// 分页事件处理
const handleSizeChange = (val: number) => {
  emit('size-change', val)
}

const handleCurrentChange = (val: number) => {
  emit('current-change', val)
}

// 刷新处理
const handleRefresh = () => {
  // 触发当前页的刷新
  emit('current-change', props.currentPage)
}
// 选择变化事件处理
const handleSelectionChange: ((...args: any[]) => void) | undefined = (
  selection
) => {
  selectedData.value = selection
  emit('selection-change', selection)
}

// 清除选择
const clearSelection = () => {
  tableRef.value?.clearSelection()
  selectedData.value = []
}

// 暴露方法
defineExpose({
  tableRef,
  selectedData,
  clearSelection,
  toggleRowSelection: (row: any, selected: boolean) => {
    tableRef.value?.toggleRowSelection(row, selected)
  },
})
</script>
