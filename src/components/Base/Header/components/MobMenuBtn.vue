<script setup>
const model = defineModel("activeMobMenu", { type: Boolean });

function toggleMobMenu() {
  model.value = !model.value;

  document.body.style.overflow = model.value ? "" : "hidden";
}
</script>

<template>
  <button
    class="burger-menu-btn"
    :class="{ active: model }"
    @click="toggleMobMenu"
  >
    <span class="" v-for="i of 3" :key="i"></span>
  </button>
</template>

<style lang="scss" scoped>
@use "@assets/style/utils/variables.scss" as *;

.burger-menu-btn {
  background-color: transparent;
  position: relative;
  width: clamp(1.563rem, 0.966rem + 2.54vw, 2.188rem);
  height: clamp(1rem, 0.523rem + 2.04vw, 1.5rem);
  display: block;

  @media (min-width: 768px) {
    display: none;
  }

  & > span {
    transition: all 200ms linear;
    position: absolute;
    height: clamp(0.125rem, 0.065rem + 0.25vw, 0.188rem);
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
