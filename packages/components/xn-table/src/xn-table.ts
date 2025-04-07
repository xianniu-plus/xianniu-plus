import { buildProps } from '@xianniu-plus/utils'
import { columns, dataType } from '../../table-v2/src/common'
import type { ExtractPropTypes } from 'vue'

export const xnTableEffects = ['light', 'dark'] as const
export const xnTableProps = buildProps({
  /**
   * @description table data
   */
  data: dataType,
  /**
   * @description table columns configuration
   */
  columns,
  /**
   * @description 列配置中作为唯一标识的字段名
   */
  keyField: {
    type: String,
    default: 'key',
  },
  /**
   * @description 列配置中作为显示标题的字段名
   */
  titleField: {
    type: String,
    default: 'title',
  },
  // /**
  //  * @description visible columns keys
  //  */
  // visibleColumns: {
  //   type: Array,
  //   default: () => [],
  // },
  /**
   * @description total number of data items
   */
  total: {
    type: Number,
    default: 0,
  },
  /**
   * @description current page number
   */
  currentPage: {
    type: Number,
    default: 1,
  },
  /**
   * @description number of items per page
   */
  pageSize: {
    type: Number,
    default: 10,
  },
} as const)
export type XnTableProps = ExtractPropTypes<typeof xnTableProps>

export const xnTableEmits = {
  'update:currentPage': (page: number) => typeof page === 'number',
  'update:pageSize': (size: number) => typeof size === 'number',
  'size-change': (size: number) => typeof size === 'number',
  'current-change': (page: number) => typeof page === 'number',
}
export type XnTableEmits = typeof xnTableEmits
