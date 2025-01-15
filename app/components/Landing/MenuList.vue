<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <LandingMenuCard v-for="item in filteredItems" :key="item.name" v-bind="item" @order="handleOrder(item)" />
  </div>
</template>

<script setup>
import { useMenuStore } from '@/store/menuStore'

const menuStore = useMenuStore()
const filteredItems = computed(() => menuStore.filteredItems)

const handleOrder = (item) => {
  console.log('Ordenar:', item)
}
</script>