import { createWebHistory } from 'vue-router/auto';
import { createRouter } from 'vue-router/auto';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
