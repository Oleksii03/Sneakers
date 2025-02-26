<script setup>
import SvgManager from "@components/Base/SvgManager.vue";
</script>

<template>
  <TheHeader />

  <MainPage />

  <SvgManager />
</template>

<style lang="scss" scoped>
@use "./assets/style/style.scss";
.header {
  margin-bottom: 40px;
}
</style>
