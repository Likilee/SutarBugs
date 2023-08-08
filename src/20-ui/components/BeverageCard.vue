<template>
  <div class="border p-4 rounded-lg">
    <div class="font-bold text-xl">{{ beverage.이름 }}</div>
    <div class="text-gray-500">온도: {{ beverage.온도 }}</div>
    <div class="text-gray-500">샷: {{ beverage.샷 }}</div>
    <div v-if="beverage.시럽.length > 0" class="text-gray-500">
      시럽: {{ beverage.시럽.join(', ') }}
    </div>
    <div v-if="beverage.우유" class="text-gray-500">
      우유: {{ beverage.우유 }}
    </div>
    <div v-if="beverage.크림" class="text-gray-500">
      크림: {{ beverage.크림 }}
    </div>
    <div v-if="beverage.토핑.length > 0" class="text-gray-500">
      토핑: {{ beverage.토핑.join(', ') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { 에스프레소 } from '@/00-domain/beverage/entity';

interface Props {
  beverage: 에스프레소;
}
defineProps<Props>();
</script>
