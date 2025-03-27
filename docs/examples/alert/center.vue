<template>
  <div style="max-width: 600px">
    <el-alert title="Success alert" type="success" center show-icon />
    <el-alert title="Info alert" type="info" center show-icon />
    <el-alert title="Warning alert" type="warning" center show-icon />
    <el-alert title="Error alert" type="error" center show-icon />
  </div>
</template>

<style scoped>
.xn-alert {
  margin: 20px 0 0;
}
.xn-alert:first-child {
  margin: 0;
}
</style>
