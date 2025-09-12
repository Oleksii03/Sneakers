import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@pages/MainPage.vue";
import Catalog from "@pages/Catalog.vue";

const routes = [
  { path: "/", redirect: "/Sneakers" },

  {
    path: "/Sneakers",
    name: "Home",
    component: MainPage,
  },

  {
    path: "/Catalog",
    name: "Catalog",
    component: Catalog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
