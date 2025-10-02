<script setup>
defineProps({
  activeMobMenu: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <button
    :class="['burger-menu-btn', { active: activeMobMenu }]"
    @click="$emit('toggle')"
  >
    <span v-for="i of 3" :key="i"></span>
  </button>
</template>

<style lang="scss" scoped>
@use "@assets/style/utils/variables.scss" as *;

.burger-menu-btn {
  background-color: transparent;
  position: relative;
  width: 28px;
  height: 18px;
  display: block;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 0, 0, 0.3);
    outline-offset: 2px;
  }

  & > span {
    transition: all 200ms linear;
    position: absolute;
    height: 2px;
    border-radius: 2px;
    background-color: $text-dark;
    transform-origin: left;

    &:nth-child(1) {
      transform-origin: top left;
      top: 0;
      left: 0;
      width: 70%;
    }
    &:nth-child(2) {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
      width: 70%;
    }
  }

  &.active > span {
    &:nth-child(1) {
      top: 0;
      left: 0;
      width: 100%;
      transform: rotate(34deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      bottom: 0;
      left: 0;
      width: 100%;
      transform: rotate(-36deg);
    }
  }
}
</style>
