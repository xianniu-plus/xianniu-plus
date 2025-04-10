<template>
  <el-cascader v-model="value" :options="cascaderAreaData" :props="props" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElCascader } from '@xianniu-plus/components/cascader'
import { useCascaderAreaData } from './cascader-china-area'

import type { CascaderProps } from '@xianniu-plus/components/cascader-panel/src/node'

const value = ref([])
const cascaderAreaData = useCascaderAreaData()

const props: CascaderProps = {
  label: 'text',
}
</script>
