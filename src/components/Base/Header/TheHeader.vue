<script setup>
import { ref, Teleport } from "vue";
import BaseSvg from "@components/Base/BaseSvg.vue";
import Backdrop from "@components/Base/Backdrop/Backdrop.vue";
import MobMenuBtn from "./components/MobMenuBtn.vue";

const headerIcons = ["icon-user", "icon-basket"];
const pages = [
  {
    path: "/Catalog",
    name: "CATALOG",
  },

  {
    path: "/Sneakers",
    name: "HOME",
  },
];

const activeMobMenu = ref(false);

function setActiveMobMenu() {
  activeMobMenu.value = !activeMobMenu.value;
}
</script>

<template>
  <Teleport to="#backdrop">
    <Backdrop :activeMobMenu="activeMobMenu" @close="setActiveMobMenu" />
  </Teleport>

  <section class="header">
    <div class="header__container container">
      <div class="header__content">
        <MobMenuBtn v-model:activeMobMenu="activeMobMenu" />

        <nav class="header__nav">
          <ul class="header__nav-list">
            <li
              v-for="({ name, path }, i) of pages"
              :key="name + i"
              class="header__nav-item"
            >
              <RouterLink :to="path" class="header__nav-link">
                {{ name }}</RouterLink
              >
            </li>
          </ul>
        </nav>

        <div class="header__logo-box">
          <a href="#" class="header__logo"><span>your</span>SNEAKER</a>
        </div>

        <div class="header__icon-box">
          <BaseSvg
            class="header__icon"
            v-for="(icon, idx) of headerIcons"
            :key="idx"
            :id="icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped src="./TheHeader.scss"></style>
