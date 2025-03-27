<template>
  <div class="custom-style">
    <el-segmented v-model="value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Delicacy')

const options = ['Delicacy', 'Desserts&Drinks', 'Fresh foods', 'Supermarket']
</script>

<style scoped>
.custom-style .xn-segmented {
  --xn-segmented-item-selected-color: var(--xn-text-color-primary);
  --xn-segmented-item-selected-bg-color: #ffd100;
  --xn-border-radius-base: 16px;
}
</style>
