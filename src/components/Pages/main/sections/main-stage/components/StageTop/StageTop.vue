<script setup>
import BaseButton from "@components/UI/BaseButton.vue";
</script>

<template>
  <div class="background-top">
    <picture>
      <source
        srcset="@assets/image/pages/main/sections/main-stage/mob/top/bg.png"
        media="(max-width: 568px)"
        type="image/webp"
      />
      <source
        srcset="@assets/image/pages/main/sections/main-stage/desk/top/bg.webp"
        media="(min-width: 569px)"
        type="image/webp"
      />
      <img
        class="background-top__img"
        src="@assets/image/pages/main/sections/main-stage/desk/top/bg.png"
        alt="main-stage"
        width="1400"
        height="300"
      />
    </picture>

    <div class="background-top__container container">
      <div class="background-top__content">
        <h1 class="background-top__title">WE ARE NEVER DONE</h1>

        <p class="background-top__text">
          We are a team of designers and developers that create high quality
          websites and applications.
        </p>

        <BaseButton
          class="background-top__btn"
          label="Celebrate with us"
          type="button"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "./StageTop.scss";
</style>
