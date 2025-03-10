<script setup>
const navLinks = [
  { name: "WOMAN", path: "/woman" },
  { name: "MEN", path: "/men" },
  { name: "ALL", path: "/" }, // Головна сторінка
];
</script>

<template>
  <section class="header">
    <div class="header__container container">
      <div class="header__content">
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li
              v-for="(link, idx) of navLinks"
              :key="idx"
              class="header__nav-item"
            >
              <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.header {
  background-color: #1466b8;
  padding: 20px;
}
</style>
