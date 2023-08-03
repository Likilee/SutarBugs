import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    VueRouter({
      routesFolder: 'src/20-ui/pages',
      extensions: ['page.vue'],
      dts: 'src/20-ui/router/typed-router.d.ts',
      importMode: 'async',
    }), //
    vue(),
  ],
});
