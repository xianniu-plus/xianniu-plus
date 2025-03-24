import { withInstall } from '@xianniu-plus/utils'
import CascaderPanel from './src/index.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElCascaderPanel: SFCWithInstall<typeof CascaderPanel> =
  withInstall(CascaderPanel)

export default ElCascaderPanel
export * from './src/types'
export * from './src/config'
export * from './src/instance'
