<script setup>
import BaseSvg from "../Base/BaseSvg.vue";
</script>

<template>
  <div class="running-line-wrapper">
    <div class="running-line">
      <p v-for="n of 8" :key="n" class="running-line-text">
        &#160;JUST DO I &#160;
        <BaseSvg class="icon" id="icon-logo-nike" />
        &#160;JUST DO IT &#160;
        <BaseSvg class="icon" id="icon-logo-nike" />
        &#160;JUST DO IT &#160;
        <BaseSvg class="icon" id="icon-logo-nike" />
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.running-line-wrapper {
  bottom: -30px;
  left: -50%;
  width: 200%;
  z-index: 1;
  overflow: hidden;
}

.running-line {
  padding: clamp(0.125rem, 0.034rem + 0.39vw, 0.375rem) 0px;
  display: flex;
  align-items: center;
  overflow: hidden;

  &-text {
    display: flex;
    align-items: center;
    font-family: "Montserrat-Black";
    font-size: clamp(0.563rem, 0.014rem + 2.34vw, 2.063rem);
    line-height: 1.1;
    flex-shrink: 0;
    white-space: nowrap;
    animation: running-line 15s linear infinite;
    overflow: hidden;

    @keyframes running-line {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
}

.icon {
  fill: #3b1010;
  height: clamp(0.5rem, 0.043rem + 1.95vw, 1.75rem);
  width: clamp(2.188rem, 1.502rem + 2.93vw, 4.063rem);
}
</style>
