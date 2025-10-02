# Design Document - Header Code Improvement

## Overview

Цей документ описує дизайн та архітектурні рішення для покращення коду компонента TheHeader.vue та додавання компонента корзини.

## Architecture

### Component Structure

```
src/components/Base/Header/
├── TheHeader.vue (основний компонент)
├── components/
│   ├── MobMenuBtn.vue (існуючий)
│   └── CartIcon.vue (новий)
└── TheHeader.scss (стилі)
```

### Key Design Decisions

#### 1. Модульність компонентів

- **Рішення**: Винести корзину в окремий компонент `CartIcon.vue`
- **Обґрунтування**: Покращує переносимість, тестування та повторне використання
- **Альтернативи**: Залишити як частину основного компонента (відхилено через складність)

#### 2. Управління станом корзини

- **Рішення**: Використовувати props для передачі кількості товарів
- **Обґрунтування**: Дозволяє гнучко підключати різні джерела даних
- **Майбутнє**: Інтеграція з Pinia/Vuex store

#### 3. Візуальні індикатори

- **Рішення**: Badge з кількістю товарів, hover ефекти
- **Обґрунтування**: Покращує UX та надає миттєвий зворотний зв'язок
- **Деталі**: Підтримка великих чисел (99+), анімації

## Implementation Details

### TheHeader.vue Improvements

#### Before

```javascript
const headerIcons = ["icon-user", "icon-basket"];
function setActiveMobMenu() {
  activeMobMenu.value = !activeMobMenu.value;
}
```

#### After

```javascript
// Більш описові назви та структура
const activeMobMenu = ref(false);
const cartItemCount = ref(3); // Демо значення

function toggleMobileMenu() {
  activeMobMenu.value = !activeMobMenu.value;
}
```

### CartIcon.vue Design

#### Props Interface

```typescript
interface Props {
  itemCount: number; // default: 0
}
```

#### Computed Properties

- `showBadge`: показувати badge тільки якщо є товари
- `displayCount`: форматування для великих чисел (99+)

#### Styling Approach

- CSS-in-Vue з scoped стилями
- Flexbox для центрування
- CSS transitions для smooth анімацій
- Responsive дизайн

## Testing Strategy

### Test.vue Component

Створено спеціальний тестовий компонент для демонстрації:

1. **Static Tests**: різні стани корзини (0, 1, 15, 150+)
2. **Interactive Test**: input для динамічної зміни кількості
3. **Visual Testing**: grid layout для порівняння станів

## Accessibility Considerations

### ARIA Support

- `aria-label` для screen readers
- Семантичні HTML елементи
- Keyboard navigation готовність

### Visual Indicators

- Достатній контраст для badge
- Hover states для інтерактивності
- Responsive typography

## Performance Optimizations

### Computed Properties

- Використання computed для похідних значень
- Мемоізація складних обчислень

### Event Handling

- Правильне очищення event listeners
- Оптимізація resize handlers

### Bundle Size

- Мінімальні залежності
- Tree-shaking friendly код

## Future Enhancements

### Phase 2 Features

1. **Store Integration**: підключення до Pinia/Vuex
2. **Click Handlers**: відкриття dropdown корзини
3. **Animations**: більш складні переходи
4. **Internationalization**: підтримка мов

### Technical Debt

1. **TypeScript**: повна типізація всіх компонентів
2. **Unit Tests**: покриття тестами
3. **Storybook**: документація компонентів

## Conclusion

Реалізація успішно покращила якість коду, додала новий функціонал корзини та створила основу для майбутніх розширень. Всі вимоги з requirements.md виконані з дотриманням Vue 3 best practices.
