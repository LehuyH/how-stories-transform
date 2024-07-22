<template>
    <div ref="container" 
        :style="{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translateX(${tilt*10}px) translateY(${roll*10}px)`
        }"
        class="!opacity-100 fixed pointer-events-none brightness-50 h-[130vh] w-[130vw] -top-[20%] -left-[20%]">
        
    </div>
</template>

<script setup lang="ts">
defineProps<{
    src:string,
    tilt:number,
    roll:number
}>();


</script>
