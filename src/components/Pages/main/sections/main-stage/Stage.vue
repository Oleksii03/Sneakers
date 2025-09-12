<script setup>
import StageTop from "@components/Pages/main/sections/main-stage/components/StageTop/StageTop.vue";
import StageBottom from "@components/Pages/main/sections/main-stage/components/StageBottom/StageBottom.vue";
</script>

<template>
  <section class="main-stage">
    <StageTop />
    <StageBottom />
  </section>
</template>

<style leng="scss" scoped>
.main-stage {
  padding-top: 64px;
}
</style>
