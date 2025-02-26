<template>
  <div class="user-info__wrapper">
    <div class="user-info__image">
      <slot name="image"></slot>
    </div>
    <div class="user-info__info">
      <slot name="info-name"></slot>
      <slot name="info-user-name"></slot>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" >
.user-info {
  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
</style>