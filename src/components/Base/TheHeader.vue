<script setup>
import { ref } from "vue";
import BaseSvg from "./BaseSvg.vue";
//----/-imports--------------------------------

// const navLinks = [
//   { name: "WOMAN", path: "/woman" },
//   { name: "MEN", path: "/men" },
//   { name: "ALL", path: "/" },
// ];

// const headerIcons = ["icon-user", "icon-search", "icon-basket"];

// const windowWidth = ref(innerWidth);

// const updateWidth = () => (windowWidth.value = innerWidth);

// onMounted(() => addEventListener("resize", updateWidth));

// onBeforeUnmount(() => removeEventListener("resize", updateWidth));
</script>

<template>
  <section class="header">
    <div class="header__container container">
      <div class="header__content">
        <!-- NAV -->
        <nav class="header__nav">
          <ul v-if="windowWidth >= 768" class="header__nav-list">
            <li
              v-for="(link, idx) of navLinks"
              :key="idx"
              class="header__nav-item"
            >
              <router-link
                class="header__nav-link"
                :to="link.path"
                :active-class="'active'"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>

          <button v-else class="burger-menu-btn" aria-label="кнопка меню">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        <!-- LOGO -->
        <div class="header__logo-box">
          <p class="header__logo"><span>your</span>SNEAKER</p>
        </div>
        <!-- ICON-BOX -->
        <div class="header__icon-box">
          <BaseSvg
            class="header__icon"
            v-for="(icon, idx) of headerIcons"
            :key="idx"
            :id="icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@assets/style/utils/variables.scss" as *;
@use "@assets/style/utils/mixins.scss" as *;
// ----------imports----------------------

.header {
  padding: 17px 0px;
  // outline: 1px solid black;

  @include media-min-width(lg) {
    padding: 20px 20px;
  }

  &__content {
    @include flex-align-row;
  }
  // ---NAV-BOX-----------------
  &__nav {
    display: flex;
    align-items: center;

    &-list {
      @include flex-align-row;
      column-gap: clamp(1.25rem, -1.028rem + 4.75vw, 3.125rem);
      transition: opacity 200ms linear;

      &:hover .header__nav-link.active::before {
        opacity: 0;
      }
    }

    &-item {
      font-size: clamp(0.938rem, 0.558rem + 0.79vw, 1.25rem);
      line-height: calc(22px / 20px);
    }

    &-link {
      position: relative;

      &::before {
        pointer-events: none;
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 7px);
        height: 2px;
        background-color: $bg-dark;
        border-radius: 4px;
        opacity: 0;
        transition: opacity 200ms linear;
      }

      &:hover::before {
        opacity: 1;
      }

      &.active {
        font-family: $font-secondary;

        &::before {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% + 7px);
          height: 2px;
          background-color: $bg-dark;
          border-radius: 4px;
          opacity: 1;
        }

        &:hover::before {
          opacity: 1 !important;
        }
      }
    }
  }

  // ---LOGO-BOX-----------------
  &__logo {
    font-family: $font-secondary;
    font-size: clamp(1.25rem, 0.976rem + 1.17vw, 2rem);
    line-height: clamp(1.5rem, 1.157rem + 1.46vw, 2.438rem);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    & > span {
      font-family: $font-primary;
      color: rgb(160, 160, 160);
    }

    &-box {
      margin-left: auto;
      margin-right: auto;
      transition: all 250ms linear;

      @include media-min-width(sm) {
        transform: translateX(-35px);
      }

      @include media-min-width(lg) {
        transform: translateX(-52px);
      }
    }
  }
  // ---ICON-BOX-----------------
  &__icon {
    height: 30px;
    width: 27px;
    fill: transparent;
    stroke: $text-dark;

    @media (max-width: 767px) {
      &:not(:last-child) {
        display: none;
      }
    }

    @include media-min-width(sm) {
      width: clamp(1.25rem, 0.718rem + 1.11vw, 1.688rem);
    }
    @include media-min-width(lg) {
      cursor: pointer;
    }

    &-box {
      @include flex-align-row;
      column-gap: clamp(1.25rem, -0.801rem + 4.27vw, 2.938rem);
    }
  }
}

// burger-menu---
.burger-menu-btn {
  background-color: transparent;
  position: relative;
  width: clamp(1.563rem, 0.966rem + 2.54vw, 2.188rem);
  height: clamp(1rem, 0.523rem + 2.04vw, 1.5rem);

  // &:hover {
  //   & > span:nth-child(1) {
  //     transform: rotate(35deg);
  //   }
  //   & > span:nth-child(2) {
  //     transform: translateX(-500%);
  //   }
  //   & > span:nth-child(3) {
  //     transform: rotate(-35deg);
  //   }
  // }

  & > span {
    transition: all 250ms linear;
    position: absolute;
    height: clamp(0.125rem, 0.065rem + 0.25vw, 0.188rem);
    border-radius: 2px;
    background-color: $text-dark;

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
}
</style>
