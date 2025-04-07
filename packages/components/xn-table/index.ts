import { withInstall } from '@xianniu-plus/utils'
import Table from './src/xn-table.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const XnTable: SFCWithInstall<typeof Table> = withInstall(Table)
export default XnTable

export * from './src/xn-table'
export type { XnTableInstance } from './src/instance'
