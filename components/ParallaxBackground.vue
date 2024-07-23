<template>
    <div ref="container" 
        :style="{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'black',
            transform: `translateX(${tilt*10}px) translateY(${roll*10}px)`
        }"
        class="!opacity-100 fixed pointer-events-none brightness-50 "
            :class="{
                'h-[130vh] w-[130vw] -top-[20%] -left-[20%]':!zoomOut,
                'h-[100vh] w-[100vw]':zoomOut
            }"
        
        >
        
    </div>
</template>

<script setup lang="ts">
defineProps<{
    src:string,
    tilt:number,
    roll:number
}>();

const route = useRoute()

const zoomOut = computed(()=>route.fullPath.includes('lerner') && !route.fullPath.includes('content'))
</script>
