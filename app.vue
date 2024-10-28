<template>
  <div>
    <Nav class="lg:mx-16 xl:mx-20 px-5"/>

    <hr class="mb-7 mt-3">

    <NuxtPage />

    <Footer class="lg:px-16 xl:px-20 px-5 py-20" />
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from './store/useProduct';

onMounted(async () => [
  await useProductsStore().getProducts()
])
</script>
