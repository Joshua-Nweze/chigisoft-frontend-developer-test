<template>
    <div class="flex flex-col gap-10 my-20">
        <div class="flex gap-2">
            <div class="w-1 bg-[#2A54C7]"></div>
            <div>{{ header }}</div>
        </div>
        <div v-if="products.length != 0">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-24">
                <div v-for="product in products">
                    <NuxtLink :to="`/product/${product.id}`">
                        <div>
                            <img :src="product.image" :alt="`${product.title} image`" class="h-[306px] w-full">
                        </div>
                        <div class="font-bold"> {{ product.title }} </div>
                        <div class="text-[#787879]">${{ product.price }}</div>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div v-else>
            Loading products...
        </div>
    </div>
</template>

<script setup lang="ts">
import {IProduct} from '~/types/ProductTypes';

defineProps<{
    header : string,
    products: IProduct[]
}>()

</script>