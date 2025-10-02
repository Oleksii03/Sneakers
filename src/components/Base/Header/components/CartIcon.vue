<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import BaseSvg from "@components/Base/BaseSvg.vue";

const props = defineProps({
  itemCount: {
    type: Number,
    default: 0,
  },
});

const router = useRouter();

const showBadge = computed(() => props.itemCount > 0);

const displayCount = computed(() => {
  return props.itemCount > 99 ? "99+" : props.itemCount.toString();
});

function goToCart() {
  router.push("/Cart");
}
</script>

<template>
  <div
    class="cart-icon"
    @click="goToCart"
    role="button"
    tabindex="0"
    @keydown.enter="goToCart"
    @keydown.space.prevent="goToCart"
    :aria-label="`Корзина з ${itemCount} товарами. Натисніть для переходу до корзини`"
  >
    <BaseSvg id="icon-basket" class="cart-icon__svg" />
    <span
      v-if="showBadge"
      class="cart-icon__badge"
      :aria-label="`${itemCount} товарів у корзині`"
    >
      {{ displayCount }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.cart-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;

  // Забираємо padding, щоб іконка була того ж розміру що й інші
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 0, 0, 0.3);
    outline-offset: 2px;
  }

  &:active {
    transform: scale(0.95);
  }

  &__svg {
    transition: color 0.2s ease;
    // Наслідуємо розміри від батьківського .header__icon
    height: inherit;
    width: inherit;
    fill: inherit;
    stroke: inherit;
  }

  &__badge {
    position: absolute;
    top: -8px;
    right: -8px;
    min-width: 18px;
    height: 18px;
    background-color: #ff4444;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    padding: 0 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}
</style>
