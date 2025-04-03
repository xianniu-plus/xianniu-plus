<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition name="xn-fade-in">
    <div v-if="show" />
  </Transition>
</template>
