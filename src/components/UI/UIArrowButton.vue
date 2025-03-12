<script setup>
import BaseSvg from "@components/Base/BaseSvg.vue";
</script>

<template>
  <button class="base-btn">
    <BaseSvg class="base-btn__icon" id="icon-arrow-small" />
  </button>
</template>

<style lang="scss" scoped>
@use "@assets/style/utils/variables.scss" as *;
@use "@assets/style/utils/mixins.scss" as *;
// --imports -------------

.base-btn {
  border-radius: 35px;
  width: clamp(1.563rem, 0.877rem + 2.93vw, 3.438rem);
  height: clamp(1.563rem, 0.877rem + 2.93vw, 3.438rem);
  background-color: $bg-light;

  &__icon {
    width: clamp(0.625rem, 0.396rem + 0.98vw, 1.25rem);
    height: clamp(0.438rem, 0.232rem + 0.88vw, 1rem);
    fill: $bg-dark;
  }
}
</style>
