<template>
  <div class="flex gap-4 flex-wrap mb-6">
    <select v-model="selectedType" @change="applyFilter" class="p-2 border rounded-lg">
      <option value="">Todos los Tipos</option>
      <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
    </select>
    <select v-model="selectedTag" @change="applyFilter" class="p-2 border rounded-lg">
      <option value="">Todas las Categorías</option>
      <option v-for="tag in tags" :key="tag" :value="tag">{{ tag }}</option>
    </select>
  </div>
</template>

<script setup>

const selectedType = ref('')
const selectedTag = ref('')

const  emit = defineEmits(['filter-changed'])
const types = ['Café Caliente', 'Café Frío', 'Té Caliente', 'Té Frío', 'Especial']
const tags = ['Clásico', 'Dulce', 'Refrescante', 'Intenso', 'Con Alcohol']

const applyFilter = () => {
  const filters = {
    type: selectedType.value,
    tag: selectedTag.value
  }
  // Emitir el evento con los filtros seleccionados
  emit('filter-changed', filters)
}
</script>