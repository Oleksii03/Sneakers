<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards, Pagination],
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
    };
  },
};
</script>

<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="1.5"
    :spaceBetween="-100"
    :pagination="pagination"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img
        src="../../../../assets/images/pages/main/slider/slide-1.png"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="../../../../assets/images/pages/main/slider/slide-2.png"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="../../../../assets/images/pages/main/slider/slide-3.png"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="../../../../assets/images/pages/main/slider/slide-4.png"
        alt=""
      />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  width: 550px;
  height: 490px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 450px;
  background-color: transparent !important;
  transition: transform 0.3s ease;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

// Пагінація
.swiper-pagination {
  position: absolute;
  bottom: 10px;
}

.swiper-pagination .swiper-pagination-bullet {
  width: 95px !important;
  height: 5px;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  width: 95px !important;
  height: 15px;
}
</style>
