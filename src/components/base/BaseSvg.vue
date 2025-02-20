<script setup>
defineProps({
  id: String,
  require: true,
});
</script>

<template>
  <svg><use :href="`#${id}`"></use></svg>
</template>
