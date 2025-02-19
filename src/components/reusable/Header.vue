<script setup>
import { ref, onMounted } from "vue";

const search = ref("");

const screenWidth = ref(window.innerWidth);

const updateWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});
</script>

// --------template-----------------------
<template>
  <header class="header">
    <div class="header__container container">
      <!-- logo-box -->
      <div class="header__logo-box">
        <a href="/">
          <picture>
            <source srcset="../../assets/images/logo.webp" type="image/webp" />
            <img
              class="header__logo-img"
              src="../../assets/images/logo.png"
              alt="logo"
              width="40"
              height="40"
            />
          </picture>
        </a>
      </div>
      <!-- search-box -->
      <div class="header__search-box">
        <BaseSvg
          v-show="screenWidth >= 576"
          class="header__search-box-icon"
          :id="'icon-search'"
        ></BaseSvg>

        <input
          type="text"
          v-model="search"
          placeholder="Search for..."
          class="header__search-box-input"
        />
      </div>

      <!-- button -->
      <button class="header__button">
        <span v-if="screenWidth >= 576">Connect wallet</span>
        <BaseSvg
          v-else
          class="header__button-icon"
          :id="'icon-wallet1'"
        ></BaseSvg>
      </button>
    </div>
  </header>
</template>

// --------style------------------
<style lang="scss" scoped>
@use "../../assets/style/utils/variables" as *;
@use "../../assets/style/utils/mixins.scss" as *;
// -----------------------------------------
.header {
  padding: 5px 0;
  background-color: $dark-gray-bg;
  border-radius: 0px 0px 32px 32px;
  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);

  &__container {
    @include flex-align-row;
    column-gap: 10px;

    @include media-min-width(xs) {
      column-gap: 16px;
    }
  }

  &__logo-box {
    @include media-min-width(md) {
      margin-right: 12px;
    }
  }

  &__logo-img {
    width: 45px;
    height: 45px;
  }

  &__search-box {
    position: relative;
    width: 100%;

    &-input {
      display: block;
      width: 100%;
      border-radius: 12px;
      padding: 9px 12px;
      border: none;
      outline: none;
      background-color: $dark-bg;
      color: $light-text;
      font-size: 0.75rem;
      line-height: 0.875rem;
      transition: box-shadow 150ms linear;

      @include media-min-width(xs) {
        padding: 9px 39px;
      }

      &::placeholder {
        color: $basic-gray;
        font-size: 0.75rem;
        line-height: 0.875rem;
        letter-spacing: 0%;
      }

      &:focus {
        box-shadow: 0px 0px 0px 1px rgb(135, 67, 255);
      }
    }

    &-icon {
      position: absolute;
      top: 50%;
      left: 11px;
      transform: translateY(-50%);
      fill: $light-text;
      width: 20px;
      height: 20px;
    }
  }

  &__button {
    @include flex-align-row;
    margin-left: auto;
    background: $purple-bg-gradient;
    padding: 7px;
    border-radius: 50%;
    box-shadow: 0px 15px 30px 0px rgba(20, 102, 204, 0.16);
    white-space: nowrap;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    color: $light-text;

    @include media-min-width(xs) {
      padding: 9px 21px;
      border-radius: 12px;
    }

    &-icon {
      fill: $light-text;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
