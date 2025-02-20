<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
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
    <swiper-slide class="one">
      <img
        src="../../../../assets/images/pages/main/slider/slide-1.png"
        alt=""
      />
    </swiper-slide>
    <swiper-slide class="one">
      <img
        src="../../../../assets/images/pages/main/slider/slide-2.png"
        alt=""
      />
    </swiper-slide>
    <swiper-slide class="one">
      <img
        src="../../../../assets/images/pages/main/slider/slide-3.png"
        alt=""
      />
    </swiper-slide>
    <swiper-slide class="one">
      <img
        src="../../../../assets/images/pages/main/slider/slide-4.png"
        alt=""
      />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  width: 519px;
  height: 519px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 0px;
  width: 100%;
  height: 100%;
  background: transparent !important;
  box-shadow: none;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// ==========================================
// .swiper-slide:nth-child(1n) {
//   background-color: rgb(206, 17, 17);
// }

// .swiper-slide:nth-child(2n) {
//   background-color: rgb(0, 140, 255);
// }

// .swiper-slide:nth-child(3n) {
//   background-color: rgb(10, 184, 111);
// }

// .swiper-slide:nth-child(4n) {
//   background-color: rgb(211, 122, 7);
// }

// .swiper-slide:nth-child(5n) {
//   background-color: rgb(118, 163, 12);
// }
</style>
