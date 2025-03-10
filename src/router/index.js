import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@pages/MainPage.vue";
import MenPage from "@pages/MenPage.vue";
import WomanPage from "@pages/WomanPage.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/woman", component: WomanPage },
  { path: "/men", component: MenPage },
];

const router = createRouter({
  history: createWebHistory("/Sneakers"),
  routes,
});

export default router;
