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
  width: 25px;
  height: 25px;

  &__icon {
    width: 9.53px;
    height: 7.17px;
    fill: $bg-dark;
  }
}
</style>
