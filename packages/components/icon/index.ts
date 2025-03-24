import { withInstall } from '@xianniu-plus/utils'

import Icon from './src/icon.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElIcon: SFCWithInstall<typeof Icon> = withInstall(Icon)
export default ElIcon

export * from './src/icon'
