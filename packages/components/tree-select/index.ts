import { withInstall } from '@xianniu-plus/utils'
import TreeSelect from './src/tree-select.vue'

import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElTreeSelect: SFCWithInstall<typeof TreeSelect> =
  withInstall(TreeSelect)

export default ElTreeSelect
