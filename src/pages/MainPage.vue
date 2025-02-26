<script setup>
import UserInfo from "@components/Reusable/UserInfo.vue";
import NftInfo from "@components/Reusable/NftInfo.vue";
import PictureComponent from "@components/Base/PictureComponent.vue";
import UIButton from "@components/UI/UIButton.vue";
import UISmallButton from "@components/UI/UISmallButton.vue";
import BaseSvg from "@components/Base/BaseSvg.vue";
import TheCard from "@components/Base/TheCard.vue";
import { cards, users } from "@mixins/data/dataBase.js";
import SwiperNft from "@components/Reusable/SwiperNft.vue";
import SwiperUser from "@components/Reusable/SwiperUser.vue";

const userSrc = new URL("@assets/image/users/user1.png", import.meta.url);
const userSrcset = new URL("@assets/image/users/user1.webp", import.meta.url);
const logoSoldSrc = new URL("@assets/image/logo-sold.png", import.meta.url);
const logoSoldSrcset = new URL("@assets/image/logo-sold.webp", import.meta.url);

import { ref } from "vue";

const data = ref({});
const currentUser = ref({});

function infoActiveCard(value) {
  data.value = value;
  currentUser.value = users.find((user) => user.id === value.userId);
}
</script>

<template>
  <section class="stage">
    <div class="stage__container container">
      <div class="stage__wrapper-left">
        <UserInfo class="user-info__stage-wrapper">
          <template v-slot:image>
            <div class="user-info__image-img">
              <PictureComponent
                :srcset="userSrcset"
                :src="userSrc"
                :alt="'user'"
              />
            </div>
          </template>
          <template v-slot:info-name>
            <p class="user-info__info-name">{{ currentUser.user }}</p>
          </template>
          <template v-slot:info-user-name>
            <p class="user-info__info-user-name">@{{ currentUser.userName }}</p>
          </template>
        </UserInfo>
        <NftInfo>
          <h3 class="nft-info__name">
            {{ data.name }}
          </h3>
          <p class="nft-info__description">
            <span>Description:</span> {{ data.description }}
          </p>
          <div class="nft-info__bottom">
            <p class="nft-info__bottom-sold">
              <span>Sold for:</span>
              <PictureComponent
                :srcset="logoSoldSrcset"
                :src="logoSoldSrc"
                :alt="'logo'"
              />
              {{ data.sold }}
            </p>
            <div class="nft-info__bottom-buttons nft-info__button">
              <UIButton class="nft-info__button-vue">View</UIButton>
              <UISmallButton>
                <BaseSvg :id="'left'" />
              </UISmallButton>
              <UISmallButton>
                <BaseSvg :id="'center'" />
              </UISmallButton>
              <UISmallButton>
                <BaseSvg :id="'right'" />
              </UISmallButton>
            </div>
          </div>
        </NftInfo>
      </div>
      <div class="stage__wrapper-right">
        <SwiperNft :cards="cards" @update="infoActiveCard" />
      </div>
    </div>
  </section>

  <section class="nft-cards">
    <div class="nft-cards__container container">
      <TheCard
        v-for="(card, index) in cards.slice(0, 8)"
        :key="index"
        :card="card"
      >
      </TheCard>
    </div>
  </section>

  <section class="featured">
    <div class="featured__container container">
      <h3 class="featured__title">Featured creators</h3>
      <SwiperUser />
    </div>
  </section>
</template>

<style lang="scss">
@use "@assets/style/utils/mixins.scss" as *;
@use "@assets/style/style.scss";
@use "@assets/style/utils/variables.scss" as *;

.stage {
  margin-bottom: 173px;

  &__container {
    display: flex;
    align-items: flex-end;
    column-gap: 14px;
  }

  &__wrapper-left {
    width: 516px;
  }

  &__wrapper-right {
    max-width: 789px;
  }
}
.nft-info {
  &__button-vue {
    padding: 12px 32px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-sold {
      display: flex;
      align-items: center;
      gap: 5px;

      & > span {
        color: $basic-gray;
        font-size: 14px;
        line-height: 16px;
        text-align: left;
        margin-right: 7px;
      }
    }
  }

  &__bottom-buttons {
    display: flex;
    gap: 9px;
  }
}

.small-button {
  svg {
    width: 20px;
    height: 20px;
  }
}

.user-info {
  &__info-name {
    font-weight: 700;
    font-size: 18px;
  }

  &__image-img {
    width: 49px;
    height: 49px;

    img {
      width: 100%;
    }
  }

  &__info-user-name {
    font-weight: 500;
    font-size: 14px;
    background: $purple-text-gradient;
    background-clip: text;
    color: transparent;
  }

  &__stage-wrapper {
    gap: 12px;
    margin-bottom: 20px;
  }
}

.nft-cards {
  margin-bottom: 82px;

  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }
}

.featured {
  padding-bottom: 80px;

  &__title {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 27px;
  }
}
</style>
