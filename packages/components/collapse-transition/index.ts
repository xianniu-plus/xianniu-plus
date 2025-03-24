import { withInstall } from '@xianniu-plus/utils'
import CollapseTransition from './src/collapse-transition.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElCollapseTransition: SFCWithInstall<typeof CollapseTransition> =
  withInstall(CollapseTransition)

export default ElCollapseTransition
