import { withInstall } from '@xianniu-plus/utils'
import Teleport from './src/teleport.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElTeleport: SFCWithInstall<typeof Teleport> = withInstall(Teleport)

export default ElTeleport

export * from './src/teleport'
