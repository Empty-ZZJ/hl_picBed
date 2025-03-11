import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "",
    component: () => import('../pages/index/index.vue'),
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});
export default router;