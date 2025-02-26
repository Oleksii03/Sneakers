<template>
  <picture>
    <source :srcset="srcset" type="image/webp" />
    <img :src="src" :alt="alt ? alt : 'img'" />
  </picture>
</template>

<script setup>
defineProps(["srcset", "src", "alt"]);
</script>
