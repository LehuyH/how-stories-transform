<template>
    <button class="group relative flex items-center overflow-hidden rounded px-8 py-3 text-white focus:outline-none focus:ring"
        href="#">
        <span class="absolute flex items-center -end-full transition-all group-hover:end-4">
            <Icon :name="icon"/>
        </span>

        <span class="text-sm font-medium transition-all group-hover:me-4">
            <slot />
        </span>
    </button>
</template>

<script setup lang="ts">
defineProps<{
    icon:string
}>()
</script>