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

  {
    path: "/Cart",
    name: "Cart",
    component: () => import("@pages/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/Sneakers"),
  routes,
});

export default router;
