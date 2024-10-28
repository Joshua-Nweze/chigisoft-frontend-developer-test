<template>
    <div class="my-10 lg:px-32 px-5">
        <div>
            <NuxtLink to="/">Home /</NuxtLink> {{ product?.category }} / <span class="text-blue-500"> {{ product?.title }} </span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
            <div class="flex gap-5">
                <div class="hidden lg:flex flex-col gap-5">
                    <div class="h-6 w-6 rounded bg-gray-300"></div>
                    <div class="h-6 w-6 rounded bg-gray-300"></div>
                    <div class="h-6 w-6 rounded bg-gray-300"></div>
                    <div class="h-6 w-6 rounded bg-gray-300"></div>
                </div>

                <div class="w-full">
                    <img :src="product?.image" alt="" class="lg:h-[500px] w-full">
                </div>
            </div>
            <div class="grid gap-10">
                <div class="grid gap-3">
                    <div class="font-bold text-2xl">{{ product?.title }}</div>
    
                    <div class="flex gap-5">
                        <div class="text-xl text-[#2A54C7]">${{ product?.price }}.00</div>
                        <div><span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">7 left</span></div>
                    </div>
    
                    <div class="flex gap-2 items-center">
                        <StarSvg v-for="icon in product?.rating?.rate ? Math.floor(product.rating.rate) : 0" :key="icon" />
                        <div class="text-[#1A308F]">({{product?.rating.count}} ratings)</div>
                    </div>
                </div>

                <Button @click="addProductToCart(product)" class="w-full h-fit flex justify-center items-center gap-3">
                    <CartLightSvg class="text-white"/>
                    <div>Add to cart</div>
                </Button>

                <div class="grid gap-3">
                    <div class="uppercase text-gray-500 text-xs font-bold">
                        Product details
                    </div>
    
                    <div>
                        {{ product?.description }}
                    </div>
                </div>
            </div>
        </div>

        <div>
            <ProductCard header="More items to explore" :products="products.slice(10, 13)"/>
        </div>

        <div class="fixed right-5 bottom-5" v-if="feedback">
            <Alert>{{ feedback }}</Alert>
        </div>
    </div>
</template>

<script setup lang="ts">
import StarSvg from '~/assets/icons/Star.svg.vue';
import CartLightSvg from '~/assets/icons/CartLight.svg.vue';
import {IProduct} from '~/types/ProductTypes';
import { useProductsStore } from '~/store/useProduct';
import { useCartStore } from '~/store/useCart';
import { ICart } from '~/types/CartTypes';

// product store
let { getProducts } = useProductsStore()
let { products } = storeToRefs(useProductsStore())

// cart store
let { addToCart } = useCartStore()

let product = ref<IProduct | null>(null)
let route = useRoute()

let feedback = ref<string | null>(null)

function addProductToCart(product: ICart) {
    addToCart(product)

    feedback.value = "Product added to cart"

    // hide alert feedback after 3 seconds
    setTimeout(() => {
        feedback.value = null
    }, 3000)
}

onMounted(async () => {
    console.log(products.value)
    if(products.value.length < 1) {
        await getProducts()
    }
    console.log(products.value)

    const productId = Number(route.params.id)
    product.value = products.value.find(p => p.id === productId) || null
})
</script>