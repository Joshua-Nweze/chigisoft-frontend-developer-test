<template>
    <footer class="bg-[#1E1F21] text-white">
        <NuxtLink to="/" class="text-4xl font-bold mb-10">Logo</NuxtLink>
        
        <div class="grid grid-cols-2 lg:grid-cols-8 gap-10">
            <div class="col-span-2 lg:col-span-4 flex flex-col gap-2">
                <div class="font-bold">New here?</div>
                <div>Subscribe to our newsletter to get updates on our latest offers!</div>
                <div class="flex gap-2">
                    <input
                        type="text"
                        class="block w-72 h-10 rounded-lg border-1 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        placeholder="Email address"
                    />
                    <Button>Subscribe</Button>
                </div>
            </div>

            <div class="font-light flex flex-col gap-5">
                <div class="font-normal">Categories</div>
                <div>Fashion</div>
                <div>Health & Beauty</div>
                <div>Home & Office</div>
                <div>Computing</div>
            </div>

            <div class="font-light flex flex-col gap-5">
                <div class="font-normal">Company</div>
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
                <div>Refunds</div>
                <div>Shipping</div>
            </div>
            
            <div class="font-light flex flex-col gap-5">
                <div class="font-normal">Company</div>
                <div>Company</div>
                <div>Company</div>
                <div>Company</div>
                <div>Company</div>
            </div>


            <div class="flex flex-col gap-5">
                <div class="h-6 w-6 rounded bg-white"></div>
                <div class="h-6 w-6 rounded bg-white"></div>
                <div class="h-6 w-6 rounded bg-white"></div>
                <div class="h-6 w-6 rounded bg-white"></div>
            </div>
        </div>

    </footer>
</template>