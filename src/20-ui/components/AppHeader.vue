<script setup lang="ts">
import LogoImage from './LogoImage.vue';
</script>

<template>
  <header
    class="p-4 bg-neutral-100 flex row justify-between gap-4 items-center border-b-neutral-200 border"
  >
    <div class="flex items-center gap-2 md:gap-4">
      <RouterLink to="/">
        <button class="md:w-20 w-16 hover:scale-110 transition-transform">
          <LogoImage />
        </button>
      </RouterLink>
      <div class="text-green-700 md:text-4xl text-3xl font-extrabold">
        서타벅스 커피
      </div>
    </div>
    <RouterLink to="/new">
      <button
        class="flex gap-1 border p-2 rounded-lg bg-green-700 text-white hover:bg-green-600 hover:scale-110 transition-transform"
      >
        NEW
      </button>
    </RouterLink>
  </header>
</template>
