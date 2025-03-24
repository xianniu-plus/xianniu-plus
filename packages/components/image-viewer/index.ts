import { withInstall } from '@xianniu-plus/utils'

import ImageViewer from './src/image-viewer.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElImageViewer: SFCWithInstall<typeof ImageViewer> =
  withInstall(ImageViewer)
export default ElImageViewer

export * from './src/image-viewer'
