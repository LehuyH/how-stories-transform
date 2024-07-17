<template>
    <div ref="container" class="min-h-screen max-h-screen overflow-hidden bg-black relative">
        <ParallaxBackground :tilt="tilt" :roll="roll" src="https://storage.prompt-hunt.workers.dev/clidqyn7l0011lg0fqpafo144_1"/>
        <Symbol 
            v-for="symbol in symbols"
            :tilt="tilt" 
            :roll="roll" 
            v-bind="(symbol as any)"/>
    </div>
</template>

<script setup lang="ts">


const container = ref(null)
const { tilt, roll, source } = useParallax(container)

const { sceneName, storyName } = useRoute().params as Record<string,string>

const { data:symbols } = await useAsyncData(`symbol-${sceneName}-${storyName}`,()=>
    queryContent(`/${storyName}/${sceneName}`)
    .only(['title', 'image','icon','_path','description','popover_style','outer_style'])
    .find()
)
</script>