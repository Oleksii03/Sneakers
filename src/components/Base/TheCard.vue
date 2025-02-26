<script setup>
import PictureComponent from "@components/Base/PictureComponent.vue";
import UserInfo from "@components/Reusable/UserInfo.vue";
import { users } from "@mixins/data/dataBase.js";

const logoCardSrc = new URL("@assets/image/logo-card.png", import.meta.url);
const logoCardSrcset = new URL("@assets/image/logo-card.webp", import.meta.url);

const props = defineProps({
  card: Object,
  search: Object,
});

const getId = (id) => () => users.find((item) => item.id === id);

const getUserById = getId(props.card.userId);
</script>

<template>
  <div class="card">
    <div class="card__img">
      <PictureComponent
        :srcset="props.card.img.webp"
        :src="props.card.img.default"
        :alt="'nft'"
      />
      <div class="card__img-info-card">
        <UserInfo class="card__wrapper-user-info">
          <template v-slot:image>
            <div class="card__wrapper-image">
              <PictureComponent
                class="card__img-image"
                :srcset="getUserById().img.webp"
                :src="getUserById().img.default"
                :alt="'user'"
              />
            </div>
          </template>
          <template v-slot:info-name>
            <p class="card__info-name-black">{{ getUserById().user }}</p>
          </template>
          <template v-slot:info-user-name>
            <p class="card__info-user-name">@{{ getUserById().userName }}</p>
          </template>
        </UserInfo>
      </div>
    </div>
    <div class="card__info">
      <h4 class="card__info-name">
        {{ props.card.name }}
      </h4>
      <div class="card__info-sold-wrapper">
        <p class="card__info-sold-text">Sold for:</p>
        <p class="card__info-sold-current">
          <PictureComponent
            :srcset="logoCardSrcset"
            :src="logoCardSrc"
            :alt="'logo'"
          />
          {{ props.card.sold }}
        </p>
      </div>
      <div class="card__info-ending-wrapper">
        <p class="card__info-ending-text">Ending in:</p>
        <p class="card__info-ending-time">
          {{ props.card.ending }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@assets/style/utils/mixins.scss" as *;
@use "@assets/style/utils/variables.scss" as *;

.card {
  border: 1px solid #333940;
  cursor: pointer;

  &__img {
    position: relative;

    img {
      width: 100%;
      max-height: 315px;
      @include media-min-width(sm) {
        max-height: 700px;
      }
    }
  }

  &__image-skeleton {
    border-radius: 8px;
    width: 26px;
    height: 26px;
    box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.15);
    background: #f2f2f2;
  }

  &__info-name-black {
    font-weight: 700;
    font-size: 14px;
    color: #1d2228;
  }

  &__info-user-name {
    font-weight: 500;
    font-size: 12px;
    background: linear-gradient(270deg, #8743ff 90%, #d8c2ff 100%);
    color: transparent;
    background-clip: text;
  }

  &__img-info-card {
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    background: #fff;
    border-radius: 12px;
    width: fit-content;
    padding: 6px 8px;
    position: absolute;
    top: 12px;
    left: 13px;
  }

  &__info {
    padding: 25px 19px 17px 16px;
  }

  &__info-name {
    font-weight: 700;
    font-size: 20px;
    color: #fff;
  }

  &__info-sold-wrapper,
  &__info-ending-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__info-sold-text,
  &__info-ending-text {
    font-weight: 600;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }

  &__info-ending-time {
    color: #fff;
  }

  &__info-sold-current {
    color: #fff;
  }

  &__info-sold-wrapper {
    margin-bottom: 15px;
  }

  &__wrapper-user-info {
    gap: 8px;
  }

  &__wrapper-image {
    width: 26px;
    height: 26px;

    img {
      width: 100%;
    }
  }
}
</style>
