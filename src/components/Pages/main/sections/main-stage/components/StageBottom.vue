<script setup>
import { cardsMainStage } from "@mixins/data/dataBase";
import UIArrowButton from "../../../../../UI/UIArrowButton.vue";
// ---/-refs------------------------
</script>

<template>
  <div class="stage__bottom">
    <picture>
      <source
        srcset="
          @assets/image/pages/main/sections/main-stage/desk/bottom/bg.webp
        "
        media="(min-width: 576px)"
        type="image/webp"
      />
      <source
        srcset="@assets/image/pages/main/sections/main-stage/mob/bottom/bg.webp"
        type="image/webp"
      />
      <img
        class="stage__bottom-img"
        src="@assets/image/pages/main/sections/main-stage/mob/bottom/bg.png"
        alt="Stage bottom background"
      />
    </picture>
    <!-- cards -->
    <div class="container">
      <div class="stage__bottom-cards cards">
        <ul class="cards__list">
          <li class="cards__item" v-for="card of cardsMainStage" :key="card.id">
            <picture class="cards__item-picture">
              <source :srcset="card.img.webp" type="image/webp" />
              <img
                class="cards__item-img"
                :src="card.img.png"
                alt="product card"
              />
            </picture>

            <div class="cards__item-content">
              <p class="cards__item-title">{{ card.name }}</p>
              <h3 class="cards__item-description">{{ card.description }}</h3>

              <UIArrowButton />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@assets/style/utils/variables.scss" as *;
@use "@assets/style/utils/mixins.scss" as *;
// --imports -------------

.stage__bottom {
  &-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

// cards
.cards {
  margin-top: -19px;

  @include media-min-width(lg) {
    margin-top: -32px;
  }

  &__list {
    display: grid;
    gap: 50px;

    @include media-min-width(sm) {
      grid-template-columns: repeat(2, 1fr);
      gap: clamp(1.438rem, -0.157rem + 3.32vw, 2.75rem);
    }
  }

  &__item {
    position: relative;
    border-radius: 18px;
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.25);
    background: $bg-gray;
    padding: 34px 130px 14px 43px;
    height: clamp(8.5rem, 5.345rem + 13.46vw, 17.125rem);

    @media (max-width: 376px) {
      width: 310px;
    }

    @include media-min-width(md) {
      padding: 62px 131px 24px 74px;
      max-width: 610px;
    }

    &-picture {
      position: absolute;
      width: 273px;
      height: 229px;
      right: -56px;
      top: -49px;
      pointer-events: none;

      @media (min-width: 376px) {
        right: -45px;
      }

      @include media-min-width(sm) {
        top: -10px;
        width: clamp(17.063rem, -0.33rem + 36.23vw, 31.375rem);
        height: clamp(14.313rem, 5.123rem + 19.15vw, 21.875rem);
      }

      @include media-min-width(md) {
        // width: clamp(17.063rem, 11.826rem + 22.34vw, 31.375rem);
        // height: clamp(14.313rem, 11.546rem + 11.8vw, 21.875rem);

        top: -25px;
        right: -60px;
      }

      @include media-min-width(lg) {
        top: -46px;
        right: -72px;
      }
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    &-title {
      color: $text-danger;
      font-family: $font-quaternary;
      font-size: clamp(1rem, 0.268rem + 3.12vw, 3rem);
      line-height: clamp(1.25rem, 0.358rem + 3.8vw, 3.688rem);
      text-transform: uppercase;
    }

    &-description {
      font-family: "WorkSans-Regular";
      font-size: clamp(0.75rem, 0.567rem + 0.78vw, 1.25rem);
      line-height: clamp(0.938rem, 0.732rem + 0.88vw, 1.5rem);
      font-weight: 400;
      letter-spacing: 0.5px;

      @include media-min-width(sm) {
        max-width: 229px;
      }
    }
  }
}
</style>
