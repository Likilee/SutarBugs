import type { 음료 } from '@/00-domain/beverage/entity';
import { useStorage } from '@vueuse/core';
import { beverageMockData } from './useBeverage.data';

const BEVERAGE_STORAGE_KEY = 'beverage';
export function useBeverage(): {
  beverages: ReturnType<typeof useStorage>;
  newBeverage: (beverage: 음료) => void;
} {
  const beverages = useStorage<음료[]>(
    BEVERAGE_STORAGE_KEY,
    beverageMockData,
    localStorage,
    { writeDefaults: true },
  );

  const newBeverage = (beverage: 음료) => {
    beverages.value.push(beverage);
  };

  return {
    beverages,
    newBeverage,
  };
}
