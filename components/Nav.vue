<template>
    <div class="py-4">
        <div class="flex items-center">
            <div class="flex w-2/3 items-center">
                <NuxtLink to="/" class="font-semibold text-2xl">LOGO</NuxtLink>
        
                <div class="min-[1100px]:flex gap-2 xl:gap-5 font-semibold ms-8 xl:ms-16 hidden">
                    <div>Electronics</div>
                    <div>Health & Beauty</div>
                    <div>Home & Office</div>
                    <div>Computing</div>
                </div>
            </div>
    
            <div class="flex gap-2 xl:gap-5 w-1/3 justify-end items-center">
                 <div class="hidden md:block relative mt-2 rounded-md shadow-sm">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                        <span class="text-black sm:text-sm z-90">
                            <SearchSvg />
                        </span>
                    </div>
                    <input
                        type="text"
                        class="block h-10 rounded-2xl border-1 py-1.5 pl-9 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black sm:text-sm sm:leading-6"
                        placeholder="Search"
                    />
                </div>
    
                <div class="flex gap-2 items-center"> <UserSvg/> <span class="hidden md:block">Account</span> </div>

                <NuxtLink to="/cart" class="relative flex items-center gap-2 p-2">
                    <CartSvg/> <span class="hidden md:block">Cart</span> 
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2">{{ totalCartProducts }}</div>
                </NuxtLink>
                
                <div class="flex min-[1100px]:hidden gap-2 items-center"> <MenuSvg/> <span class="hidden md:block" >Menu</span> </div>
            </div>
        </div>
    
        <div class="block md:hidden relative mt-2 rounded-md shadow-sm">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                <span class="text-black sm:text-sm z-90">
                    <SearchSvg />
                </span>
            </div>
            <input
                type="text"
                class="block w-full h-10 rounded-2xl border-1 py-1.5 pl-9 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black sm:text-sm sm:leading-6"
                placeholder="Search"
            />
        </div>

        <!-- <hr class="mt-5"> -->

    </div>
</template>

<script setup>
import CartSvg from '~/assets/icons/cart.svg.vue';
import UserSvg from '~/assets/icons/user.svg.vue';
import SearchSvg from '~/assets/icons/search.svg.vue';
import MenuSvg from '~/assets/icons/menu.svg.vue';

import { useCartStore } from '~/store/useCart';

let { totalCartProducts } = storeToRefs(useCartStore())
</script>
