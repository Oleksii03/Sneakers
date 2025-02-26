<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import UserCard from "@components/Reusable/UserCard.vue";
import { users } from "@mixins/data/dataBase.js";
import { ref, watchEffect } from "vue";

const swiperSlidesPerView = ref(5.2);

watchEffect(() => {
  if (window.innerWidth < 586) {
    swiperSlidesPerView.value = 1.2;
  } else if (window.innerWidth < 834) {
    swiperSlidesPerView.value = 2.2;
  } else if (window.innerWidth < 1080) {
    swiperSlidesPerView.value = 3.2;
  } else if (window.innerWidth < 1320) {
    swiperSlidesPerView.value = 4.2;
  } else {
    swiperSlidesPerView.value = 5.2;
  }
});
</script>

<template>
  <div class="user-swiper__wrapper">
    <div class="swiper user-swiper">
      <swiper
        grab-cursor
        :slides-per-view="swiperSlidesPerView"
        :modules="[Navigation, Pagination, Scrollbar]"
        :pagination="{ el: '.user-swiper__pagination' }"
        :scrollbar="{ draggable: true }"
        space-between="16"
      >
        <swiper-slide v-for="(user, index) in users" :key="index">
          <UserCard :user="user" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="user-swiper__pagination"></div>
  </div>
</template>

<style lang="scss">
@use "@assets/style/utils/mixins.scss" as *;
@use "@assets/style/utils/variables.scss" as *;

.user-swiper {
  &__wrapper {
    position: relative;

    .swiper-wrapper {
      margin-bottom: 16px;
    }
  }

  &__pagination {
    display: none;
  }
}

.swiper-scrollbar {
  left: 0;
  height: 5px;
  background: rgba(255, 255, 255, 0);
}

.swiper-scrollbar-drag {
  background: $basic-gray;
  border-radius: 99px;
  height: 5px;
}
</style>
