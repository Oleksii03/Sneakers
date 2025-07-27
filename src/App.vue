<script setup>
import SvgManager from "@components/Base/SvgManager.vue";
import TheHeader from "@components/Base/TheHeader.vue";
import MainPage from "@pages/MainPage.vue";
</script>

<template>
  <TheHeader />
  <MainPage />
  <SvgManager />
</template>

<style lang="scss" scoped>
@use "./assets/style/style.scss";
</style>
