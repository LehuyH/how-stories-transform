<template>
    <div ref="container" 
        :style="{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translateX(${tilt*50}px) translateY(${roll*50}px)`
        }"
        class="fixed pointer-events-none brightness-50 h-[130vh] w-[130vw] -top-[20%] -left-[20%]">
        
    </div>
</template>

<script setup lang="ts">
defineProps<{
    src:string
}>();

const container = ref(null)
const { tilt, roll, source } = useParallax(container)
</script>