<script setup lang="ts">
import { RouterView } from 'vue-router/auto';
import AppHeader from '@/20-ui/components/AppHeader.vue';
import DefaultLayout from '@/20-ui/layouts/DefaultLayout.vue';
import MainContentLayout from './20-ui/layouts/MainContentLayout.vue';
</script>

<template>
  <DefaultLayout>
    <AppHeader />
    <MainContentLayout>
      <RouterView />
    </MainContentLayout>
  </DefaultLayout>
</template>

<style scoped></style>
