<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import PictureComponent from "@components/Base/PictureComponent.vue";

const props = defineProps(["cards"]);
const emits = defineEmits(["update"]);
const swipers = ref(false);
let activeCard = null;

onMounted(() => {
  activeCard = props.cards[0];

  emits("update", activeCard);

  setTimeout(() => {
    swipers.value = true;
  }, 100);
});

const onSlideChange = (swiper) => {
  if (swiper) {
    const activeIndex = swiper.activeIndex;
    activeCard = props.cards[activeIndex];
    emits("update", activeCard);
  }
};
</script>

<template>
  <div class="stage-swiper__wrapper">
    <div class="swiper stage-swiper">
      <swiper
        v-if="swipers"
        grab-cursor
        slides-per-view="1"
        :modules="[Navigation, EffectCoverflow, Pagination]"
        :pagination="{ el: '.stage-swiper__pagination' }"
        :effect="'coverflow'"
        :coverflowEffect="{
          rotate: -2,
          stretch: '-80%',
          depth: 200,
          modifier: -1,
          slideShadows: false,
        }"
        @slideChange="onSlideChange($event)"
      >
        <swiper-slide
          v-for="(card, index) in props.cards.slice(0, 5)"
          :key="index"
        >
          <div class="stage-swiper__img">
            <PictureComponent
              class="stage-swiper__images"
              :srcset="card.img.webp"
              :src="card.img.default"
              :alt="'nft'"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="stage-swiper__pagination"></div>
  </div>
</template>

<style lang="scss">
@use "@assets/style/utils/mixins.scss" as *;
@use "@assets/style/utils/variables.scss" as *;

.stage-swiper {
  &__wrapper {
    position: relative;
  }

  &__pagination {
    position: absolute;
    bottom: -33px !important;
    left: 50% !important;
    transform: translateX(-50%);
    width: 100%;

    .swiper-pagination-bullet-active {
      border-radius: 99px;
      width: 95px;
      height: 5px;
      background: $basic-gray;
    }

    .swiper-pagination-bullet {
      border-radius: 99px;
      width: 95px;
      height: 5px;
      background: rgba(255, 255, 255, 0.15);
    }
  }

  &__img {
    width: 519px;
  }
}
.swiper-image {
  max-width: 100%;
  max-height: 100%;
}

.swiper-slide img {
  width: 519px;
}
</style>
