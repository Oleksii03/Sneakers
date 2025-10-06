<template>
  <div class="test-container">
    <h2>Тест компонента корзини</h2>

    <div class="test-cases">
      <div class="test-case">
        <h3>Порожня корзина</h3>
        <CartIcon :item-count="0" />
      </div>

      <div class="test-case">
        <h3>1 товар</h3>
        <CartIcon :item-count="1" />
      </div>

      <div class="test-case">
        <h3>15 товарів</h3>
        <CartIcon :item-count="15" />
      </div>

      <div class="test-case">
        <h3>150+ товарів</h3>
        <CartIcon :item-count="150" />
      </div>
    </div>

    <div class="interactive-test">
      <h3>Інтерактивний тест</h3>
      <input
        v-model.number="itemCount"
        type="number"
        min="0"
        placeholder="Кількість товарів"
      />
      <CartIcon :item-count="itemCount" />
      <p class="test-note">
        💡 Натисніть на корзину, щоб перейти на сторінку корзини
      </p>
    </div>

    <div class="navigation-test">
      <h3>Тест навігації</h3>
      <div class="nav-buttons">
        <RouterLink to="/Cart" class="nav-button">
          Перейти до корзини
        </RouterLink>
        <RouterLink to="/Catalog" class="nav-button">
          Перейти до каталогу
        </RouterLink>
        <RouterLink to="/Sneakers" class="nav-button"> На головну </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartIcon from "./Base/Header/components/CartIcon.vue";
import { useCart } from "@/composables/useCart.js";

const { itemCount } = useCart();
</script>

<style lang="scss" scoped>
.test-container {
  padding: 2rem;
  padding-top: 150px; // Відступ для фіксованого хедера
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding-top: 120px;
  }
}

.test-cases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.test-case {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }
}

.interactive-test {
  margin-top: 3rem;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;

  input {
    margin: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
  }
}
</style>
