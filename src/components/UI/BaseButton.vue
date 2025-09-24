<script setup>
defineProps({
  label: {
    type: String,
    default: "Button",
  },

  type: {
    type: String,
    default: "button",
  },
});
</script>

<template>
  <button class="button" :type="type">
    <span class="button__inner">{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use "@assets/style/utils/variables.scss" as *;

.button {
  border: none;
  cursor: pointer;
  background-color: $basic-white;
  padding: 9px;

  border-radius: 5px;

  &__inner {
    font-size: 10px;
    font-weight: 600;
    line-height: normal;
  }
}
</style>
