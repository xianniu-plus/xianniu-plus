<template>
  <div style="max-width: 600px">
    <el-alert
      title="Success alert"
      type="success"
      description="More text description"
      show-icon
    />
    <el-alert
      title="Info alert"
      type="info"
      description="More text description"
      show-icon
    />
    <el-alert
      title="Warning alert"
      type="warning"
      description="More text description"
      show-icon
    />
    <el-alert
      title="Error alert"
      type="error"
      description="More text description"
      show-icon
    />
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
