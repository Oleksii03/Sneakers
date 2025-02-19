<script setup>
defineProps(["id"]);
</script>

<template>
  <svg><use :href="`#${id}`"></use></svg>
</template>
