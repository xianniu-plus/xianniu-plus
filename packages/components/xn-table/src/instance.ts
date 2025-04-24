import type XnTable from './xn-table.vue'
import type { ElTable } from 'xianniu-plus'

export interface XnTableMethods {
  clearSelection: () => void
  toggleRowSelection: (row: Record<string, any>, selected: boolean) => void
  getTableRef: () => InstanceType<typeof ElTable> | undefined
}

export type XnTableInstance = InstanceType<typeof XnTable> & XnTableMethods

export interface XnTableExpose {
  tableRef: InstanceType<typeof ElTable> | undefined
  selectedData: Record<string, any>[]
  clearSelection: () => void
  toggleRowSelection: (row: Record<string, any>, selected: boolean) => void
}
