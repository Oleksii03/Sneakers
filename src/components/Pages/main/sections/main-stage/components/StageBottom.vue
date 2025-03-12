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
  &__list {
    display: grid;
    gap: clamp(3.375rem, 3.055rem + 1.37vw, 4.25rem);
  }

  &__item {
    position: relative;
    border-radius: 18px;
    box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.25);
    background: $bg-gray;
    padding: 34px 130px 14px 43px;
    width: 310px;
    height: 136.22px;

    &-picture {
      position: absolute;
      width: 273px;
      height: 229px;
      right: -56px;
      top: -49px;
      pointer-events: none;
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
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0%;
      text-transform: uppercase;
    }

    &-description {
      font-family: "WorkSans-Regular";
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 1%;
      font-weight: 400;
    }
  }
}
</style>
