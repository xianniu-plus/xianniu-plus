<template>
  <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link">
      Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
        <el-dropdown-item divided>Action 6</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@xianniu-plus/icons-vue'
</script>

<style scoped>
.example-showcase .xn-dropdown + .xn-dropdown {
  margin-left: 15px;
}
.example-showcase .xn-dropdown-link {
  cursor: pointer;
  color: var(--xn-color-primary);
  display: flex;
  align-items: center;
}
</style>
