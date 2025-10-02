import { ref, computed } from "vue";

// Глобальний стан корзини
const cartItems = ref([
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 150,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    price: 180,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&crop=center",
  },
]);

export function useCart() {
  // Обчислювані властивості
  const itemCount = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  // Функції для управління корзиною
  function increaseQuantity(id) {
    const item = cartItems.value.find((item) => item.id === id);
    if (item) item.quantity++;
  }

  function decreaseQuantity(id) {
    const item = cartItems.value.find((item) => item.id === id);
    if (item && item.quantity > 1) item.quantity--;
  }

  function removeItem(id) {
    const index = cartItems.value.findIndex((item) => item.id === id);
    if (index > -1) cartItems.value.splice(index, 1);
  }

  function getItemText(count) {
    if (count === 1) return "товар";
    if (count >= 2 && count <= 4) return "товари";
    return "товарів";
  }

  return {
    cartItems,
    itemCount,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    getItemText,
  };
}
