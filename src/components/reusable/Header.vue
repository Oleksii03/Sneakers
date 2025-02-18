<script setup>
import { ref } from "vue";

const search = ref("");
</script>

// --------template-----------------------
<template>
  <header class="header">
    <div class="header__container container">
      <!-- logo-box -->
      <div class="header__logo-box">
        <picture>
          <source srcset="../../assets/images/logo.webp" type="image/webp" />
          <img
            class="header__logo-img"
            src="../../assets/images/logo.png"
            alt="logo"
            width="39"
            height="36"
          />
        </picture>
      </div>
      <!-- search-box -->
      <div class="header__search-box">
        <input
          type="text"
          v-model="search"
          placeholder="Search for..."
          class="header__search-input"
        />
      </div>

      <!-- button -->
      <button class="header__button">Connect wallet</button>
    </div>
  </header>
</template>

// --------style------------------
<style lang="scss" scoped>
@use "../../assets/style/utils/variables" as *;
@use "../../assets/style/utils/mixins.scss" as *;
// -----------------------------------------
.header {
  padding: 0.75rem 0;
  background-color: $dark-gray-bg;
  border-radius: 0px 0px 32px 32px;
  box-shadow: 0px 25px 40px 0px rgba(0, 0, 0, 0.05);

  &__container {
    @include flex-align-row;
    column-gap: 1rem;
  }

  &__logo-box {
    margin-right: 0.75rem;
  }

  &__search-box {
    width: 100%;
  }

  &__search-input {
    display: block;
    width: 100%;
  }

  &__button {
    display: block;
    margin-left: auto;
    background: $purple-bg-gradient;
    padding: 0.5625rem 1.1875rem;
    border-radius: 0.75rem;
    box-shadow: 0rem 0.9375rem 1.875rem 0rem rgba(20, 102, 204, 0.16);
    white-space: nowrap;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.875rem;
    letter-spacing: 0%;
    color: $light-text;
  }
}
</style>
