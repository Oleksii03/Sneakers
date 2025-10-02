<script setup>
import { onMounted, onUnmounted, ref, Teleport, watch } from "vue";
import BaseSvg from "@components/Base/BaseSvg.vue";
import Backdrop from "@components/Base/Backdrop/Backdrop.vue";
import MobMenuBtn from "./components/MobMenuBtn.vue";
import MobMenu from "@components/Base/MobMenu/MobMenu.vue";
import CartIcon from "./components/CartIcon.vue";

const pages = [
  { path: "/Catalog", name: "CATALOG" },
  { path: "/Sneakers", name: "HOME" },
  { path: "/Cart", name: "CART" },
];

const activeMobMenu = ref(false);
const cartItemCount = ref(3); // Демо значення

function setActiveMobMenu() {
  activeMobMenu.value = !activeMobMenu.value;
}

function handleResize() {
  if (window.innerWidth < 768) return;
  activeMobMenu.value = false;
  document.body.style.overflow = "";
}

watch(activeMobMenu, (isActive) => {
  document.body.style.overflow = isActive ? "hidden" : "";
});

onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  document.body.style.overflow = "";
});
</script>

<template>
  <Teleport to="#backdrop">
    <Backdrop :active-mob-menu="activeMobMenu" @close="setActiveMobMenu" />
    <MobMenu :active-mob-menu="activeMobMenu" @close="setActiveMobMenu" />
  </Teleport>

  <Teleport to="body"> </Teleport>

  <section class="header">
    <div class="header__container container">
      <div class="header__content">
        <MobMenuBtn
          @toggle="setActiveMobMenu"
          :active-mob-menu="activeMobMenu"
        />

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
          <RouterLink to="/Sneakers" class="header__logo">
            <span>your</span>SNEAKER
          </RouterLink>
        </div>

        <div class="header__icon-box">
          <BaseSvg class="header__icon" id="icon-user" />
          <CartIcon class="header__icon" :item-count="cartItemCount" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped src="./TheHeader.scss"></style>
