import { buildProps } from '@xianniu-plus/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export type ColumnsType = {
  prop?: string
  label: string
  width?: string | number
  fixed?: 'left' | 'right' | boolean
  sortable?: boolean
  labelMsg?: string
  showOverflowTooltip?: boolean
  /**
   * @description 格式化单元格内容
   */
  formatter?: (value: any, row: Record<string, any>) => string | VNode
  /**
   * @description 自定义渲染单元格内容
   */
  renderCell?: (data: {
    value: any
    row: Record<string, any>
    column: ColumnsType
    index: number
  }) => VNode | string
  [key: string]: any
}

/**
 * XnTable component props
 */
export const xnTableProps = buildProps({
  /**
   * @description table的数据
   */
  data: {
    type: Array as PropType<Record<string, any>[]>,
    required: true,
    default: () => [],
  },

  /**
   * @description 是否带有纵向边框
   */
  border: {
    type: Boolean,
    default: false,
  },

  /**
   * @description 是否为斑马纹表格
   */
  stripe: {
    type: Boolean,
    default: false,
  },

  /**
   * @description 是否要高亮当前行
   */
  highlightCurrentRow: {
    type: Boolean,
    default: false,
  },

  /**
   * @description 是否显示分页
   */
  showPagination: {
    type: Boolean,
    default: true,
  },

  /**
   * @description 总条目数
   */
  total: {
    type: Number,
    default: 0,
  },

  /**
   * @description 每页显示条目个数
   */
  pageSize: {
    type: Number,
    default: 10,
  },

  /**
   * @description 当前页数
   */
  currentPage: {
    type: Number,
    default: 1,
  },

  /**
   * @description 是否显示刷新按钮
   */
  showRefresh: {
    type: Boolean,
    default: true,
  },

  /**
   * @description 是否显示选择列
   */
  isSelection: {
    type: Boolean,
    default: false,
  },

  /**
   * @description 是否显示选择数量
   */
  showSelectionCount: {
    type: Boolean,
    default: true,
  },

  /**
   * @description 表格列配置
   */
  columns: {
    type: Array as PropType<Array<ColumnsType>>,
    default: () => [],
  },
} as const)

export type XnTableProps = ExtractPropTypes<typeof xnTableProps>

/**
 * XnTable component events
 */
export const xnTableEmits = {
  /**
   * @description 当选择项发生变化时会触发该事件
   */
  'selection-change': (selection: any[]) => Array.isArray(selection),

  /**
   * @description 当前页改变时触发
   */
  'update:currentPage': (page: number) => typeof page === 'number',

  /**
   * @description 每页条数改变时触发
   */
  'update:pageSize': (size: number) => typeof size === 'number',

  /**
   * @description 当前页改变时触发
   */
  'current-change': (page: number) => typeof page === 'number',

  /**
   * @description 每页条数改变时触发
   */
  'size-change': (size: number) => typeof size === 'number',
}

export type XnTableEmits = typeof xnTableEmits
