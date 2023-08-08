<template>
  <div class="font-bold text-4xl">새 음료</div>
  <form id="newBeverage">
    <div class="border p-4 rounded-lg">
      <div class="flex justify-between">
        <label for="category">분류</label>
        <!-- 분류는 select로 -->
        <select name="분류" id="category">
          <option v-for="분류 in 음료의분류" :key="분류" value="분류">
            {{ 분류 }}
          </option>
        </select>
      </div>
    </div>
    <div class="border p-4 rounded-lg">
      <label class="flex justify-between">
        <span class="w-40">이름</span>
        <input
          class="border rounded-md w-full text-end"
          type="text"
          name="이름"
        />
      </label>
    </div>
    <div class="border p-4 rounded-lg">
      <div class="flex justify-between">
        <div>온도</div>
        <div class="flex gap-1">
          <label v-for="온도 in 음료의온도" :key="온도">
            <input type="radio" name="온도" :value="온도" />{{ 온도 }}
          </label>
        </div>
      </div>
    </div>
    <div class="border p-4 rounded-lg">
      <div class="flex justify-between">
        <div>샷</div>
        <div class="flex gap-1">
          <label v-for="샷수 in 기본샷수" :key="샷수">
            <input type="radio" name="샷수" :value="샷수" />{{ 샷수 }}
          </label>
        </div>
      </div>
    </div>

    <button
      class="border p-4 w-full rounded-2xl my-2 bg-green-600 text-white text-xl hover:bg-green-500"
      type="submit"
      form="newBeverage"
    >
      등록
    </button>
  </form>
</template>

<script setup lang="ts">
import { 음료의분류, 기본샷수, 음료의온도 } from '@/00-domain/beverage/entity';
</script>
