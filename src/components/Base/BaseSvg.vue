<script setup>
defineProps({
  id: String,
});
</script>

<template>
  <svg><use :href="`#${id}`"></use></svg>
</template>
