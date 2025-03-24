import { withInstall } from '@xianniu-plus/utils'
import Row from './src/row.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElRow: SFCWithInstall<typeof Row> = withInstall(Row)
export default ElRow

export * from './src/row'
export * from './src/constants'
