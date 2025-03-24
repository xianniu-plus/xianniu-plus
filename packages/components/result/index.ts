import { withInstall } from '@xianniu-plus/utils'
import Result from './src/result.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElResult: SFCWithInstall<typeof Result> = withInstall(Result)

export default ElResult

export * from './src/result'
