<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import './style.css';

// import required modules
import { EffectCards } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>

<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="one">Slide 1</swiper-slide>
    <swiper-slide class="two">Slide 2</swiper-slide>
    <swiper-slide class="three">Slide 3</swiper-slide>
    <swiper-slide class="four">Slide 4</swiper-slide>
    <swiper-slide class="five">Slide 5</swiper-slide>
    <!-- <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide> -->
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide.swiper-slide-next.two {
  transform: translate3d(calc(7.25% - 190px), 0px, -53px) rotateZ(0deg) scale(1) !important;
}
.swiper-slide.swiper-slide-next.three {
  transform: translate3d(calc(7.25% - 410px), 0px, -120px) rotateZ(0deg)
    scale(1) !important;
}
.swiper-slide.swiper-slide-next.four {
  transform: translate3d(calc(7.25% - 650px), 0px, -120px) rotateZ(0deg)
    scale(1) !important;
}
.swiper-slide.swiper-slide-next.five {
  transform: translate3d(calc(-267% - 210px), 0px, -120px) rotateZ(0deg)
    scale(1) !important;
}
// ------------------------

.swiper-slide.swiper-slide-prev.one {
  transform: translate3d(calc(-7.25% + 10px), 0px, -100px) rotateZ(0deg)
    scale(1) !important;
}
// -------------------------
.swiper-slide.three {
  transform: translate3d(calc(7.25% - 360px), 0px, -120px) rotateZ(0deg)
    scale(1) !important;
}
.swiper-slide.four {
  transform: translate3d(calc(7.25% - 557px), 0px, -230px) rotateZ(0deg)
    scale(1) !important;
}
.swiper-slide.five {
  transform: translate3d(calc(-267% - -5px), 0px, -442px) rotateZ(0deg) scale(1) !important;
}
// ==========================================
.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}
</style>
