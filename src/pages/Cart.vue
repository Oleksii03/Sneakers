<template>
  <div class="cart-page page-with-header">
    <div class="container">
      <div class="cart-page__header">
        <h1 class="cart-page__title">Корзина</h1>
        <p class="cart-page__subtitle">
          {{ itemCount }} {{ getItemText(itemCount) }} у корзині
        </p>
      </div>

      <div v-if="itemCount === 0" class="cart-page__empty">
        <div class="empty-cart">
          <div class="empty-cart__icon">🛒</div>
          <h2 class="empty-cart__title">Ваша корзина порожня</h2>
          <p class="empty-cart__text">
            Додайте товари до корзини, щоб продовжити покупки
          </p>
          <RouterLink to="/Catalog" class="empty-cart__button">
            Перейти до каталогу
          </RouterLink>
        </div>
      </div>

      <div v-else class="cart-page__content">
        <div class="cart-items">
          <div v-for="item in cartItems" :key="item.id" class="cart-item">
            <!-- Зображення -->
            <div class="cart-item__image">
              <img
                :src="item.image"
                :alt="item.name"
                @error="handleImageError"
                loading="lazy"
              />
            </div>

            <!-- Основна інформація -->
            <div class="cart-item__main">
              <div class="cart-item__header">
                <h3 class="cart-item__name">{{ item.name }}</h3>
                <button @click="removeItem(item.id)" class="cart-item__remove">
                  ×
                </button>
              </div>

              <p class="cart-item__price">${{ item.price }} за штуку</p>

              <div class="cart-item__footer">
                <div class="cart-item__quantity">
                  <button
                    @click="decreaseQuantity(item.id)"
                    class="quantity-btn"
                  >
                    -
                  </button>
                  <span class="quantity-value">{{ item.quantity }}</span>
                  <button
                    @click="increaseQuantity(item.id)"
                    class="quantity-btn"
                  >
                    +
                  </button>
                </div>

                <div class="cart-item__total">
                  <span class="total-label">Сума:</span>
                  <span class="total-value"
                    >${{ (item.price * item.quantity).toFixed(2) }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cart-summary">
          <div class="cart-summary__total">
            <strong>Загальна сума: ${{ totalPrice.toFixed(2) }}</strong>
          </div>
          <button class="cart-summary__checkout">Оформити замовлення</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart.js";

// Використовуємо глобальний стан корзини
const {
  cartItems,
  itemCount,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  getItemText,
} = useCart();

function handleImageError(event) {
  // Fallback зображення якщо основне не завантажилося
  event.target.src =
    "https://via.placeholder.com/300x300/f8f9fa/6c757d?text=Sneaker";
}
</script>

<style lang="scss" scoped>
.cart-page {
  padding: 2rem 0;
  padding-top: 150px; // Відступ для фіксованого хедера
  min-height: 100vh;

  @media (max-width: 768px) {
    padding-top: 120px;
  }

  &__header {
    text-align: center;
    margin-bottom: 3rem;
  }

  &__title {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  &__subtitle {
    color: #666;
    font-size: 1.1rem;
  }
}

.empty-cart {
  text-align: center;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  &__icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  &__text {
    color: #666;
    margin-bottom: 2rem;
  }

  &__button {
    display: inline-block;
    padding: 1rem 2rem;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: #0056b3;
    }
  }
}

.cart-items {
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
}

.cart-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #e9ecef;
  border-radius: 16px;
  margin-bottom: 1rem;
  background: white;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-color: #dee2e6;
  }

  &__image {
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid #e9ecef;
    background: #f8f9fa;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  &__name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #212529;
    margin: 0;
    line-height: 1.3;
  }

  &__price {
    color: #6c757d;
    font-size: 0.9rem;
    margin: 0;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 0.5rem;
  }

  &__quantity {
    display: flex;
    align-items: center;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e9ecef;

    .quantity-btn {
      width: 36px;
      height: 36px;
      border: none;
      background: transparent;
      cursor: pointer;
      font-weight: 600;
      font-size: 1.1rem;
      color: #495057;
      transition: all 0.2s ease;

      &:hover {
        background: #e9ecef;
        color: #212529;
      }

      &:first-child {
        border-radius: 7px 0 0 7px;
      }

      &:last-child {
        border-radius: 0 7px 7px 0;
      }
    }

    .quantity-value {
      min-width: 50px;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      padding: 0 0.5rem;
      background: white;
      border-left: 1px solid #e9ecef;
      border-right: 1px solid #e9ecef;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__total {
    text-align: right;

    .total-label {
      display: block;
      font-size: 0.8rem;
      color: #6c757d;
      margin-bottom: 0.25rem;
    }

    .total-value {
      font-size: 1.2rem;
      font-weight: 700;
      color: #28a745;
    }
  }

  &__remove {
    width: 28px;
    height: 28px;
    border: none;
    background: #dc3545;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.2s ease;
    flex-shrink: 0;

    &:hover {
      background: #c82333;
      transform: scale(1.05);
    }
  }
}

.cart-summary {
  text-align: right;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;

  &__total {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  &__checkout {
    padding: 1rem 2rem;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #218838;
    }
  }
}

// Планшети
@media (max-width: 1024px) and (min-width: 769px) {
  .cart-item {
    gap: 1.25rem;
    padding: 1.25rem;

    &__image {
      width: 90px;
      height: 90px;
    }

    &__name {
      font-size: 1rem;
    }

    &__quantity {
      .quantity-btn {
        width: 34px;
        height: 34px;
      }

      .quantity-value {
        height: 34px;
        min-width: 48px;
      }
    }
  }

  .cart-summary {
    padding: 1.5rem;
  }
}

// Мобільні пристрої (горизонтальний layout для 425px+)
@media (max-width: 768px) and (min-width: 426px) {
  .cart-page {
    padding: 1rem 0;

    &__title {
      font-size: 2rem;
    }

    &__header {
      margin-bottom: 2rem;
    }
  }

  .cart-item {
    flex-direction: row;
    padding: 1rem;
    gap: 1rem;
    align-items: center;

    &__image {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
    }

    &__main {
      flex: 1;
      gap: 0.5rem;
    }

    &__header {
      margin-bottom: 0.5rem;
    }

    &__name {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }

    &__price {
      font-size: 0.85rem;
    }

    &__footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.5rem;
      border-top: 1px solid #e9ecef;
      gap: 1rem;
    }

    &__quantity {
      .quantity-btn {
        width: 30px;
        height: 30px;
        font-size: 0.9rem;
      }

      .quantity-value {
        height: 30px;
        min-width: 40px;
        font-size: 0.9rem;
      }
    }

    &__total {
      text-align: right;

      .total-label {
        font-size: 0.75rem;
      }

      .total-value {
        font-size: 1rem;
      }
    }

    &__remove {
      width: 24px;
      height: 24px;
      font-size: 0.9rem;
    }
  }

  .cart-summary {
    padding: 1.5rem;
    text-align: center;

    &__total {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    &__checkout {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
    }
  }
}

// Дуже маленькі мобільні (вертикальний layout для <425px)
@media (max-width: 425px) {
  .cart-page {
    padding: 0.75rem 0;

    &__title {
      font-size: 1.75rem;
    }

    &__header {
      margin-bottom: 1.5rem;
      padding: 0 0.5rem;
    }
  }

  .container {
    padding: 0 0.75rem;
    max-width: 100%;
  }

  .cart-item {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    text-align: center;

    &__image {
      width: 70px;
      height: 70px;
      align-self: center;
    }

    &__main {
      gap: 0.5rem;
    }

    &__header {
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    &__name {
      font-size: 0.95rem;
    }

    &__price {
      font-size: 0.8rem;
    }

    &__footer {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      padding-top: 1rem;
      border-top: 1px solid #e9ecef;
    }

    &__quantity {
      .quantity-btn {
        width: 28px;
        height: 28px;
        font-size: 0.85rem;
      }

      .quantity-value {
        height: 28px;
        min-width: 35px;
        font-size: 0.85rem;
      }
    }

    &__total {
      text-align: center;

      .total-label {
        font-size: 0.7rem;
      }

      .total-value {
        font-size: 1rem;
      }
    }

    &__remove {
      width: 22px;
      height: 22px;
      font-size: 0.8rem;
      align-self: center;
    }
  }

  .cart-summary {
    padding: 1rem;
    text-align: center;

    &__total {
      font-size: 1.1rem;
      margin-bottom: 1.25rem;
    }

    &__checkout {
      width: 100%;
      padding: 0.875rem;
      font-size: 0.95rem;
    }
  }

  .empty-cart {
    padding: 2rem 1rem;

    &__icon {
      font-size: 3rem;
    }

    &__title {
      font-size: 1.25rem;
    }

    &__button {
      padding: 0.875rem 1.5rem;
      font-size: 0.95rem;
    }
  }
}
</style>
// Дуже маленькі екрани @media (max-width: 480px) { .cart-page { padding: 0.5rem
0; &__header { margin-bottom: 1.5rem; padding: 0 1rem; } &__title { font-size:
1.75rem; } } .container { padding: 0 0.5rem; } .cart-item { margin-bottom:
0.75rem; padding: 0.75rem; &__image img { width: 50px; height: 50px; } &__info
h3 { font-size: 0.9rem; } &__price { font-size: 0.85rem; } &__quantity { button
{ width: 22px; height: 22px; font-size: 0.8rem; } span { font-size: 0.9rem;
min-width: 25px; } } &__total { font-size: 0.9rem; } &__remove { width: 22px;
height: 22px; font-size: 0.9rem; } } .cart-summary { padding: 1rem; &__total {
font-size: 1.1rem; } &__checkout { padding: 0.875rem; font-size: 0.95rem; } }
.empty-cart { padding: 2rem 1rem; &__icon { font-size: 3rem; } &__title {
font-size: 1.25rem; } &__button { padding: 0.875rem 1.5rem; font-size: 0.95rem;
} } }
