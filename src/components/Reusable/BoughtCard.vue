<template>
  <div class="bought-card">
    <div class="bought-card__left">
      <PictureComponent :srcset="userSrcset" :src="userSrc" :alt="'user'" />
      <div class="bought-card__left-info">
        <p class="bought-card__left-info-name">Bid placed by 0x6FC0...14A4</p>
        <p class="bought-card__left-info-date">May 19, 2021 at 2:27pm</p>
      </div>
    </div>
    <div class="bought-card__right">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import PictureComponent from "@components/Base/PictureComponent.vue";

const userSrc = new URL("@assets/image/users/user8.png", import.meta.url);
const userSrcset = new URL("@assets/image/users/user8.webp", import.meta.url);
</script>

<style lang="scss">
.bought-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333940;
  padding: 12px 16px;
  width: 100%;

  &__left {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 32px !important;
      height: 32px !important;
    }
  }

  &__left-info-name {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 7px;
  }

  &__left-info-date {
    font-weight: 500;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }
}
</style>
