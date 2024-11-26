<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

  const appName = 'OKIL'

  const route = useRoute()
  useHead({
    titleTemplate: pageTitle => (pageTitle ? `${pageTitle} | ${appName}` : appName),
    title: computed(() => route.meta.title || '')
  })
</script>