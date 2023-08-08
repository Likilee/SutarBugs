<script setup lang="ts">
import BeverageCard from '../components/BeverageCard.vue';
</script>

<template>
  <div class="font-bold text-4xl">음료</div>
  <!-- 필터 -->
  <div class="border p-4 rounded-lg">
    <div class="flex justify-between">
      <div>분류 보기</div>
      <button>토글</button>
    </div>
  </div>
  <!-- 음료 리스트 -->
  <div class="grid grid-cols-3 gap-4">
    <BeverageCard
      :beverage="{
        분류: '에스프레소',
        이름: '아메리카노',
        온도: '핫',
        샷: 1,
        크기: '톨',
        시럽: [],
        토핑: [],
      }"
    />
    <BeverageCard
      :beverage="{
        분류: '에스프레소',
        이름: '아이스 아메리카노',
        온도: '아이스',
        샷: 2,
        크기: '톨',
        시럽: [],
        토핑: [],
      }"
    />
    <BeverageCard
      :beverage="{
        분류: '에스프레소',
        이름: '카페 라떼',
        온도: '핫',
        샷: 1,
        크기: '톨',
        우유: '통',
        시럽: [],
        토핑: [],
      }"
    />
    <BeverageCard
      :beverage="{
        분류: '에스프레소',
        이름: '아이스 카페라떼',
        온도: '아이스',
        샷: 2,
        크기: '톨',
        우유: '통',
        시럽: [],
        토핑: [],
      }"
    />
  </div>
</template>
