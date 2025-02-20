<script setup>
import ProfileCard from "../components/partials/pages/main/ProfileCard.vue";
</script>

<template>
  <section class="main-page">
    <div class="main-page__container container">
      <div class="main-page__stage">
        <ProfileCard class="main-page__profile" />
        <main-slider />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/style/utils/mixins.scss" as *;

.main-page {
  &__stage {
    @include media-min-width(sm) {
      display: grid;
      column-gap: 16px;
      grid-template-columns: 40% calc(60% - 16px);
      align-items: end;
    }
  }

  &__profile {
    margin-bottom: 16px;
  }
}
</style>
