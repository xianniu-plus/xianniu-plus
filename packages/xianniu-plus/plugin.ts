import { ElInfiniteScroll } from '@xianniu-plus/components/infinite-scroll'
import { ElLoading } from '@xianniu-plus/components/loading'
import { ElMessage } from '@xianniu-plus/components/message'
import { ElMessageBox } from '@xianniu-plus/components/message-box'
import { ElNotification } from '@xianniu-plus/components/notification'
import { ElPopoverDirective } from '@xianniu-plus/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
