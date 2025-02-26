<script setup>
import PictureComponent from "@components/Base/PictureComponent.vue";

const props = defineProps({
  user: Object,
});
</script>

<template>
  <div class="user-card">
    <div class="user-card__img">
      <PictureComponent
        class="user-card__image"
        :srcset="props.user.img.webp"
        :src="props.user.img.default"
        :alt="'user'"
      />
    </div>
    <p class="user-card__name">{{ props.user.user }}</p>
    <p class="user-card__user-name">@{{ props.user.userName }}</p>
    <p class="user-card__sales">{{ props.user.sales }}</p>
  </div>
</template>

<style lang="scss">
@use "@assets/style/utils/mixins.scss" as *;
@use "@assets/style/utils/variables.scss" as *;

.user-card {
  border: 1px solid #333940;
  width: 245px;
  height: 222px;

  @include media-min-width(xxs) {
    width: 245px;
  }

  &__img {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    margin-top: 24px;
    margin-bottom: 20px;
  }

  &__image {
    img {
      width: 100%;
    }
  }

  &__name,
  &__user-name {
    text-align: center;
    margin-bottom: 8px;
  }

  &__name {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 14px;
  }

  &__user-name {
    font-family: $font-quaternary;
    background: $purple-text-gradient;
    background-clip: text;
    color: transparent;
  }

  &__sales {
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    color: $basic-gray;
  }
}
</style>
