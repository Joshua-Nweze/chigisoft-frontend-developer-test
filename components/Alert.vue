<template>
    <div class="flex rounded-3xl p-3 border w-fit gap-3 bg-white">
        <TickSvg />

        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import TickSvg from '~/assets/icons/Tick.svg.vue';
</script>