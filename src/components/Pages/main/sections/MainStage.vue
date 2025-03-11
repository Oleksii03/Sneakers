<script setup></script>

<template>
  <section class="stage">
    <div class="stage__content-top content-top">
      <div class="content-top__top">
        <picture>
          <source
            srcset="
              @assets/image/pages/main/sections/main-stage/mob/top/bg-top.webp
            "
            type="image/webp"
          />
          <img
            class="content-top__top-img"
            src="@assets/image/pages/main/sections/main-stage/mob/top/bg-top.png"
            alt="background top"
          />
        </picture>
      </div>

      <!-- content-bottom -->

      <div class="content-top__bottom">
        <picture class="content-top__bottom-picture">
          <source
            srcset="
              @assets/image/pages/main/sections/main-stage/mob/top/bg-bottom.webp
            "
            type="image/webp"
          />
          <img
            class="content-top__bottom-img"
            src="@assets/image/pages/main/sections/main-stage/mob/top/bg-bottom.png"
            alt="background bottom"
          />
        </picture>
        <!-- text content -->
        <div class="content-top__bottom-text">
          <div class="container">
            <div>
              <h2 class="content-top__bottom-text-title">WE ARE NEVER DONE</h2>

              <p class="content-top__bottom-text-description">
                Celebrating 50 years of Nike from May 16th! Exclusive products,
                experiences and much more await you for five days. Scan and join
                the Nike app!
              </p>

              <button type="button" class="content-top__bottom-text-btn">
                Celebrate with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@assets/style/utils/variables.scss" as *;
@use "@assets/style/utils/mixins.scss" as *;
// --imports -------------

.content-top {
  &__top {
    &-img {
      width: 100%;
      height: auto;
    }
  }

  // content-bottom
  &__bottom {
    position: relative;

    &-picture {
      position: absolute;
      inset: 0;
      z-index: -1;
    }

    &-img {
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
    }

    &-text {
      padding: clamp(1rem, -0.193rem + 5.09vw, 2.25rem) 0px;
      color: $text-light;
      font-family: $font-tertiary;
      height: 100%;

      & div {
        display: flex;
        flex-direction: column;
        gap: clamp(0.75rem, -0.383rem + 4.83vw, 1.938rem);
      }

      &-title {
        font-size: clamp(1rem, 0.165rem + 3.56vw, 1.875rem);
        line-height: clamp(1.25rem, 0.654rem + 2.54vw, 1.875rem);
      }

      &-description {
        font-family: "Montserrat-Black";
        font-size: clamp(0.75rem, 0.154rem + 2.54vw, 1.375rem);
        line-height: clamp(0.938rem, -0.255rem + 5.09vw, 2.188rem);
        max-width: clamp(18.063rem, -1.379rem + 82.95vw, 38.438rem);
      }

      &-btn {
        align-self: flex-start;
        color: $text-dark;
        font-family: "Montserrat-SemiBold";
        font-size: clamp(0.625rem, 0.148rem + 2.04vw, 1.125rem);
        line-height: 12px;
        padding: clamp(0.563rem, 0.145rem + 1.78vw, 1rem)
          clamp(0.813rem, 0.634rem + 0.76vw, 1rem);
        border-radius: 5px;
      }
    }
  }
}
</style>
