import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@/20-ui/router';
import '@/20-ui/styles/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
