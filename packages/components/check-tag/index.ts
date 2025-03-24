import { withInstall } from '@xianniu-plus/utils'
import CheckTag from './src/check-tag.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElCheckTag: SFCWithInstall<typeof CheckTag> = withInstall(CheckTag)
export default ElCheckTag

export * from './src/check-tag'
