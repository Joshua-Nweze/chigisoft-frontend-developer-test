<template>
    <div class="my-10 lg:px-32 px-5">
        <div>Shopping cart</div>

        <div class="grid lg:grid-cols-3 gap-16">
            <div class="lg:col-span-2 divide-y">
                <div
                    v-if="cart.length > 0"
                    v-for="(product, index) in cart" 
                    :key="index"
                    class="py-5"
                >
                
                    <div class="flex gap-5">
                        <div class="w-1/5  flex justify-center">
                            <img :src="product.image" alt="" class="h-[80px] lg:w-1/2">
                        </div>
    
                        <div class="flex flex-col w-4/5">
                            <div class="flex">
                                <div class="w-2/3">{{ product.title }}</div>
                                <div class="hidden lg:flex w-1/3 justify-end">${{ product.price }}</div>
                            </div>
                            <div class="flex">
                                <div @click="removeProductFromCart(index)" class="w-2/3 text-red-500 underline text-sm hover:cursor-pointer">Remove item</div>
                                <div class="hidden lg:flex w-1/3 text-[#787879] line-through justify-end text-sm">$45.00</div>
                            </div>
                            <div class="mt-4 hidden lg:flex">
                                <div class="flex w-2/3">
                                    Qty: 
                                    <button @click="decreaseQuantity(index)" class="px-3">-</button>
                                    <input type="text" class="ps-2 w-8 border border-slate-500 rounded" :value="product.quantity" readonly> 
                                    <button @click="increaseQuantity(index)" class="px-3">+</button>
                                </div>
                                <div class="flex w-1/3 justify-end font-semibold">${{ product.price * product.quantity }}</div>
                            </div>
                        </div>
                    </div>
    
                    <!-- show only on mobile -->
                    <div class="lg:hidden grid grid-cols-3">
                        <div class="flex gap-2 items-center">
                            <div class="flex w-1/3 justify-end">${{product.price}}</div>
                            <div class="flex w-1/3 text-[#787879] line-through justify-end text-sm">$45.00</div>
                        </div>
                        <div>
                            <div class="flex">
                                Qty: 
                                <button @click="decreaseQuantity(index)" class="px-3">-</button>
                                <input type="text" class="ps-2 w-8 border border-slate-500 rounded" :value="product.quantity" readonly> 
                                <button @click="increaseQuantity(index)" class="px-3">+</button>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-end font-semibold">${{product.price * product.quantity}}</div>
                        </div>
                    </div>
                </div>

                <div v-else>
                    No product to show
                </div>
            </div>


            <div>
                <div class="rounded border border-slate-200 py-8 px-5 grid gap-5 text-slate-500 text-sm">
                    <div class="font-bold">SUMMARY</div>
                    <div class="flex">
                        <div class="flex w-1/2">Subtotal</div>
                        <div class="flex w-1/2 justify-end">${{ totalCartPrice.toFixed(2) }}</div>
                    </div>
                    <div class="flex">
                        <div class="flex w-1/2">Shipping fee</div>
                        <div class="flex w-1/2 justify-end">$0</div>
                    </div>
                    <div class="flex">
                        <div class="flex w-1/2">Total</div>
                        <div class="flex w-1/2 justify-end text-lg font-bold">${{ totalCartPrice.toFixed(2) }}</div>
                    </div>
                    <Button>Proceed to checkout</Button>

                </div>
            </div>
        </div>

        <ProductCard header="More items to explore" :products="products.slice(0, 3)" />

        <div class="fixed right-5 bottom-5" v-if="feedback">
            <Alert>{{ feedback }}</Alert>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/useCart';
import { useProductsStore } from '~/store/useProduct';
import { ICart } from '~/types/CartTypes'

let { products } = storeToRefs(useProductsStore())
let { cart, totalCartPrice } = storeToRefs(useCartStore())

let { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore()

let feedback = ref<string | null>(null)

function removeProductFromCart(index: number) {
    removeFromCart(index)

    feedback.value = "Product removed to cart"

    // hide alert feedback after 3 seconds
    setTimeout(() => {
        feedback.value = null
    }, 3000)
}
</script>