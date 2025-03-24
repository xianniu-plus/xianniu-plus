import { withInstall } from '@xianniu-plus/utils'
import Switch from './src/switch.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElSwitch: SFCWithInstall<typeof Switch> = withInstall(Switch)
export default ElSwitch

export * from './src/switch'
