import { componentSizeMap } from '@xianniu-plus/constants'

import type { ComponentSize } from '@xianniu-plus/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
