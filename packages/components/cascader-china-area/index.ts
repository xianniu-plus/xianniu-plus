import { withInstall } from '@xianniu-plus/utils'
import CascaderChinaArea from './src/cascader-china-area.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const XnCascaderChinaArea: SFCWithInstall<typeof CascaderChinaArea> =
  withInstall(CascaderChinaArea)

export default XnCascaderChinaArea

export * from './src/cascader-china-area'
export * from './src/instances'
