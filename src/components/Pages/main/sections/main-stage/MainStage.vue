<script setup>
import StageBottom from "./components/StageBottom.vue";
import StageTop from "./components/StageTop.vue";
</script>

<template>
  <section class="stage">
    <StageTop />
    <StageBottom />
  </section>
</template>

<style lang="scss" scoped>
.stage {
  overflow-x: hidden;
  padding-bottom: clamp(1.563rem, 0.991rem + 2.44vw, 3.125rem);
}
</style>
