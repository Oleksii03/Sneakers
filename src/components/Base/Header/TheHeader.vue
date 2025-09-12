<script setup>
import BaseSvg from "@components/Base/BaseSvg.vue";

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
</script>

<template>
  <section class="header">
    <div class="header__container container">
      <div class="header__content">
        <button class="header__burger-menu-btn">
          <span v-for="i of 3" :key="i"></span>
        </button>
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

<style lang="scss" scoped>
@use "./TheHeader.scss";
</style>
