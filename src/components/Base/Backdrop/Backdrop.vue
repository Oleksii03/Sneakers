<script setup>
defineProps({
  activeMobMenu: Boolean,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <div
    @click="$emit('close')"
    class="backdrop"
    :class="{ active: activeMobMenu }"
  ></div>
</template>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background-color: #1a18189a;
  transition: all 200ms linear;
  pointer-events: none;
  opacity: 0;
  z-index: 1;

  &.active {
    backdrop-filter: blur(2px);
    pointer-events: auto;
    opacity: 1;
  }
}
</style>
