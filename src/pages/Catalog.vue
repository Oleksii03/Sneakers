<script setup></script>

<template>
  <div class="catalog-page page-with-header">
    <div class="container">
      <h1 class="catalog-page__title">Каталог</h1>
      <p class="catalog-page__subtitle">Знайдіть ідеальні кросівки для себе</p>

      <!-- Тут буде контент каталогу -->
      <div class="catalog-page__content">
        <p>Каталог товарів буде тут...</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog-page {
  padding: 2rem 0;
  padding-top: 150px; // Відступ для фіксованого хедера
  min-height: 100vh;

  @media (max-width: 768px) {
    padding-top: 120px;
  }

  &__title {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #333;
    text-align: center;
  }

  &__subtitle {
    color: #666;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  &__content {
    text-align: center;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 8px;
  }
}

@media (max-width: 768px) {
  .catalog-page {
    &__title {
      font-size: 2rem;
    }
  }
}
</style>
