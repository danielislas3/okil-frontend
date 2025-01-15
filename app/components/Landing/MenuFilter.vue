<template>
  <div class="flex flex-wrap gap-x-4 gap-y-4 items-center mb-6">
    <div class="w-full sm:w-auto">
      <label for="type-select" class="block text-sm font-medium text-gray-600 mb-1">
        Tipo de Bebida
      </label>
      <select id="type-select" v-model="filters.type" @change="applyFilter"
        class="w-full sm:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option value="">Todos los Tipos</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

    <div class="w-full sm:w-auto">
      <label for="tag-select" class="block text-sm font-medium text-gray-600 mb-1">
        Categoría
      </label>
      <select id="tag-select" v-model="filters.tag" @change="applyFilter"
        class="w-full sm:w-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option value="">Todas las Categorías</option>
        <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
      </select>
    </div>

    <div class="w-full sm:w-auto h-4">
      <button @click="clearFilters"
        class="w-full sm:w-auto px-4 py-2 bg-accent text-white rounded-lg shadow-md hover:bg-accent/90 focus:ring-2 focus:ring-bg-accent/20 transition-all">
        Limpiar Filtros
      </button>
    </div>
  </div>
</template>

<script setup>
import { useMenuStore } from '@/store/menuStore'

const menuStore = useMenuStore()

const filters = menuStore.filters
const types = menuStore.types
const tags = menuStore.tags

const applyFilter = () => {
  menuStore.updateFilters({ ...filters })
}

const clearFilters = () => {
  menuStore.updateFilters({ type: '', tag: '' })
}
</script>