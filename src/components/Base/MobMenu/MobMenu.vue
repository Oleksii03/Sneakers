<script setup>
import { RouterLink } from "vue-router";

defineProps({
  activeMobMenu: Boolean,
});

defineEmits(["close"]);
</script>

<template>
  <div :class="['mob-menu', { active: activeMobMenu }]">
    <div class="mob-menu__container container">
      <div class="mob-menu__content">
        <ul>
          <li class="mob-menu__item">
            <RouterLink
              to="/Sneakers"
              class="mob-menu__link"
              @click="$emit('close')"
            >
              HOME
            </RouterLink>
          </li>
          <li class="mob-menu__item">
            <RouterLink
              to="/Catalog"
              class="mob-menu__link"
              @click="$emit('close')"
            >
              CATALOG
            </RouterLink>
          </li>
          <li class="mob-menu__item">
            <RouterLink
              to="/Cart"
              class="mob-menu__link"
              @click="$emit('close')"
            >
              CART
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@assets/style/utils/variables.scss" as *;

.mob-menu {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  max-width: 375px;
  height: calc(100dvh - 64px);
  max-height: 700px;
  background-color: #fff;
  transform: translateX(-100%);
  transition: transform 250ms linear;
  z-index: 100;

  @media (min-width: $sm) {
    display: none;
  }

  &__container {
    height: 100%;
    padding: 60px 20px;
    overflow: auto;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  &__link {
    color: $text-dark;
    font-size: 24px;
    transition: color 200ms linear, background-color 200ms linear;
  }

  &.active {
    transform: translateX(0);
  }
}

.router-link-active {
  position: relative;
  font-family: $font-secondary;

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: $bg-dark;
    border-radius: 4px;
    font-weight: 700;
    color: $bg-dark;
  }
}
</style>
