<template>
  <slot></slot>
</template>

<style lang="scss">
@use "@assets/style/utils/variables.scss" as *;

.nft-info {
  &__name {
    font-family: $font-tertiary;
    font-size: 32px;
    margin-bottom: 15px;
  }

  &__description {
    font-family: $font-quaternary;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 14px;
    line-height: 129%;
    height: 72px;

    span {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
