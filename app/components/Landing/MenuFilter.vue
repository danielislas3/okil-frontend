<template>
  <div class="mb-8 rounded-xl bg-white/60 p-6 shadow-sm backdrop-blur-sm">
    <div class="flex flex-wrap items-end gap-6">
      <!-- Tipo de Bebida -->
      <div class="w-full flex-1 sm:w-auto">
        <label
          for="type-select"
          class="mb-2 block text-sm font-medium text-[#4A3425]"
        >
          Tipo de Bebida
        </label>
        <div class="relative">
          <select
            id="type-select"
            v-model="filters.type"
            class="w-full appearance-none rounded-lg border border-[#E8D9C5] bg-white px-4 py-3 pr-10 text-[#4A3425] shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            @change="applyFilter"
          >
            <option value="">Todos los Tipos</option>
            <option
              v-for="type in types"
              :key="type"
              :value="type"
            >
              {{ type }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8B5E3C]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Categoría -->
      <div class="w-full flex-1 sm:w-auto">
        <label
          for="tag-select"
          class="mb-2 block text-sm font-medium text-[#4A3425]"
        >
          Categoría
        </label>
        <div class="relative">
          <select
            id="tag-select"
            v-model="filters.tag"
            class="w-full appearance-none rounded-lg border border-[#E8D9C5] bg-white px-4 py-3 pr-10 text-[#4A3425] shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            @change="applyFilter"
          >
            <option value="">Todas las Categorías</option>
            <option
              v-for="tag in tags"
              :key="tag"
              :value="tag"
            >
              {{ tag }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#8B5E3C]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Botón de limpiar filtros -->
      <button
        class="flex items-center gap-2 rounded-lg bg-[#8B5E3C] px-6 py-3 text-white shadow-md transition-all duration-300 hover:bg-[#6B4E2C]"
        @click="clearFilters"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Limpiar Filtros
      </button>
    </div>

    <!-- Filtros activos -->
    <div
      v-if="hasActiveFilters"
      class="mt-4 flex flex-wrap gap-2"
    >
      <span class="text-sm text-[#6B5D4F]">Filtros activos:</span>
      <div
        v-if="filters.type"
        class="inline-flex items-center gap-1 rounded-full bg-[#E8D9C5] px-3 py-1 text-sm text-[#4A3425]"
      >
        {{ filters.type }}
        <button
          class="focus:outline-none"
          @click="clearTypeFilter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        v-if="filters.tag"
        class="inline-flex items-center gap-1 rounded-full bg-[#E8D9C5] px-3 py-1 text-sm text-[#4A3425]"
      >
        {{ filters.tag }}
        <button
          class="focus:outline-none"
          @click="clearTagFilter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useMenuStore } from '@/store/menuStore'
  import { computed } from 'vue'

  const menuStore = useMenuStore()

  const filters = menuStore.filters
  const types = menuStore.types
  const tags = menuStore.tags

  // Verificar si hay filtros activos
  const hasActiveFilters = computed(() => {
    return filters.type || filters.tag
  })

  const applyFilter = () => {
    menuStore.updateFilters({ ...filters })
  }

  const clearFilters = () => {
    menuStore.updateFilters({ type: '', tag: '' })
  }

  const clearTypeFilter = () => {
    menuStore.updateFilters({ ...filters, type: '' })
  }

  const clearTagFilter = () => {
    menuStore.updateFilters({ ...filters, tag: '' })
  }
</script>
