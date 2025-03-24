import { withInstall, withNoopInstall } from '@xianniu-plus/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'
import type { SFCWithInstall } from '@xianniu-plus/utils'

export const ElTimeline: SFCWithInstall<typeof Timeline> & {
  TimelineItem: typeof TimelineItem
} = withInstall(Timeline, {
  TimelineItem,
})
export default ElTimeline
export const ElTimelineItem: SFCWithInstall<typeof TimelineItem> =
  withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
