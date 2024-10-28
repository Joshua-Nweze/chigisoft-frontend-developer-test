<template>
    <div>
        <div class="relative">
            <img src="~/assets/images/hero.png" alt="" class="lg:h-[600px] w-full">
            
            <div class="absolute inset-0 mt-10 lg:mt-20 flex flex-col items-center text-2xl font-bold">
                New Arrivals in Computing

                <Button class="mt-3">Shop now</Button>
            </div>
        </div>

        <div class="lg:px-32 px-5">
            <ProductCard header="Best sellers" :products="products.slice(0, 3)"/>

            <ProductCard header="New arrivals" :products="products.slice(3, 6)"/>

            <ProductCard header="Top picks" :products="products.slice(8)"/>

        </div>
    </div>
</template>

<script setup>
import { useProductsStore } from "@/store/useProduct";

let { getProducts } = useProductsStore()
let { products } = storeToRefs(useProductsStore())

onMounted(async () => {
    await getProducts()
    console.log(products)
})
</script>

<style scoped>
/* .hero {
    background-image: url('~/assets/images/hero.png');
    background-size: contain;
    background-repeat: no-repeat;
    height: 507px;
} */
</style>