import { withInstall } from '@xianniu-plus/utils'

import Divider from './src/divider.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElDivider: SFCWithInstall<typeof Divider> = withInstall(Divider)
export default ElDivider

export * from './src/divider'
