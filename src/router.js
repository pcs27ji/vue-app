import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login_page.vue";
import Signup from "./pages/Signup_page.vue";
import Home from "./pages/Home_page.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
