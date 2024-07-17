<template>
    <button class="absolute">
        <img :src="src" class="w-full h-full object-cover"/>
    </button>

</template>

<script setup lang="ts">
defineProps<{
    src:string
}>()
</script>