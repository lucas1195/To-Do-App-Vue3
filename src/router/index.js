// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/pages/home"),
      },
    ],
  },
  {
    path: "/about",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: "About",
        component: () => import("@/pages/about"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
