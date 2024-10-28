<template>
  <div>
    <Nav class="lg:px-32 px-5"/>
    <NuxtPage />

    <Footer class="lg:px-32 px-5 py-20" />
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from './store/useProduct';

onMounted(async () => [
  await useProductsStore().getProducts()
])
</script>
