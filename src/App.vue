<script setup>
import SvgManager from "@components/Base/SvgManager.vue";
import TheHeader from "@components/Base/Header/TheHeader.vue";
</script>

<template>
  <SvgManager />
  <TheHeader />
  <router-view />
</template>

<style lang="scss" scoped>
@use "@assets/style/style.scss";
</style>
