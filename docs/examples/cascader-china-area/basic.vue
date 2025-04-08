<template>
  <XnCascaderChinaArea
    v-model="value"
    placeholder="请选择"
    clearable
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XnCascaderChinaArea } from 'xianniu-plus'
const value = ref([])
const handleChange = (value: any) => {
  console.log(value)
}
</script>

<style></style>
