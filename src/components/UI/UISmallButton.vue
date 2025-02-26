<template>
  <button class="small-button">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.small-button {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  background: transparent;
}
</style>
