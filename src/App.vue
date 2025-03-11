<script setup>
import SvgManager from "@components/Base/SvgManager.vue";
import TheHeader from "@components/Base/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <SvgManager />

  <router-view />
</template>

<style lang="scss" scoped>
@use "./assets/style/style.scss";
</style>
