<template>
    <div class="min-h-screen max-h-screen overflow-hidden">
            <ParallaxBackground :tilt="tilt" :roll="roll" :src="initalBgMap[from]"/>
        <div ref="container"
            :class="`${classMap[from]} blurIn min-h-screen max-h-screen overflow-hidden bg-black relative
            transition-[filter,transform]`">
            <ParallaxBackground :tilt="tilt" :roll="roll" :src="backgrounds[`${storyName}/${sceneName}`]"/>
            <button v-if="prevPath" @click="back "class="absolute z-10 left-0 top-0 h-screen p-4 group hover:bg-gradient-to-r from-black to-transparent transition-colors bg-transparent">
                <Icon name="heroicons-outline:chevron-left" class="text-black group-hover:text-white transition-colors"/>
            </button>
            <button v-if="nextPath" @click="next" class="absolute z-10 right-0 top-0 h-screen p-4 group hover:bg-gradient-to-l from-black to-transparent transition-colors bg-transparent">
                <Icon name="heroicons-outline:chevron-right" class="text-black group-hover:text-white transition-colors"/>
            </button>
            <button v-if="up" @click="up" class="absolute z-10 left-0 top-0 w-screen p-4 group hover:bg-gradient-to-b from-black to-transparent transition-colors bg-transparent">
                <Icon name="heroicons-outline:chevron-up" class="text-black group-hover:text-white transition-colors"/>
            </button>
            <button v-if="down" @click="down" class="absolute z-10 right-0 bottom-0 w-screen p-4 group hover:bg-gradient-to-t from-black to-transparent transition-colors bg-transparent">
                <Icon name="heroicons-outline:chevron-down" class="text-black group-hover:text-white transition-colors"/>
            </button>
            <Symbol
                v-for="symbol in symbols"
                :tilt="tilt"
                :roll="roll"
                :style="{
                    opacity: opacity + '%'
                }"
                v-bind="(symbol as any)"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const container = ref(null)
const { tilt, roll } = useParallax(container)
const { from, from_story } = useRoute().query as Record<string,string>
const keys = useMagicKeys();
const { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } = keys

const { sceneName, storyName } = useRoute().params as Record<string,string>

const { data:symbols } = await useAsyncData(`symbol-${sceneName}-${storyName}`,()=>
    queryContent(`/${storyName}/${sceneName}`)
    .only(['title', 'image','icon','_path','description','popover_style','outer_style','no_popover'])
    .where({
        headless:{
            $not: true  
        }
    })
    .find()
)

const opacity = ref(100)

const nextPath = map[storyName][map[storyName]?.findIndex(s=>s===sceneName)+1] ?? null
const prevPath = map[storyName][map[storyName]?.findIndex(s=>s===sceneName)-1] ?? null

const stories = Object.keys(map)
const nextStory = stories[stories.findIndex(s=>s===storyName)+1] ?? null
const prevStory = stories[stories.findIndex(s=>s===storyName)-1] ?? null

const classMap = {
    next: "slideInFromRight",
    back: "slideInFromLeft",
    up: "slideInFromTop",
    down: "slideInFromBottom",
} as Record<string,string>

const initalBgMap = {
    next: (from_story) ? backgrounds[`${from_story}/${findClosestScene(storyName,sceneName,from_story)}`] : backgrounds[`${storyName}/${prevPath}`],
    back: (from_story) ? backgrounds[`${from_story}/${findClosestScene(storyName,sceneName,from_story)}`] : backgrounds[`${storyName}/${nextPath}`],
    up: (from_story) ? backgrounds[`${from_story}/${findClosestScene(storyName,sceneName,from_story)}`] : backgrounds[`${storyName}/${prevPath}`],
    down: (from_story) ? backgrounds[`${from_story}/${findClosestScene(storyName,sceneName,from_story)}`] : backgrounds[`${storyName}/${nextPath}`],
} as Record<string,string>


const next = () => {
    if(!nextPath) return
    opacity.value = 0
    setTimeout(() => {
        navigateTo(`/scene/${storyName}/${nextPath}?from=next`)
    }, 500);
}

const back = () => {
    if(!prevPath) return
    opacity.value = 0
    setTimeout(() => {
        navigateTo(`/scene/${storyName}/${prevPath}?from=back`)
    }, 500);
}

const up = () => {
    if(!nextStory) return
    opacity.value = 0
    setTimeout(() => {
        navigateTo(`/scene/${nextStory}/${findClosestScene(storyName,sceneName,nextStory)}?from=up&from_story=${storyName}`)
    }, 500);
}

const down = () => {
    if(!prevStory) return
    opacity.value = 0
    setTimeout(() => {
        navigateTo(`/scene/${prevStory}/${findClosestScene(storyName,sceneName,prevStory)}?from=down&from_story=${storyName}`)
    }, 500);
}

whenever(ArrowLeft,back);
whenever(ArrowRight,next);
whenever(ArrowUp,up);
whenever(ArrowDown,down);

//Remove query from url
const router = useRouter()
router.replace(`/scene/${storyName}/${sceneName}`)
</script>


<style scoped>
.blurIn{
    animation: blurIn 0.5s ease-in-out;
}

@keyframes blurIn{
    0% {
        filter: blur(1em);
    }
    100% {
        filter: blur(0em);
    }
}

.slideInFromLeft{
    animation: slideInFromLeft 0.5s ease-in-out;
}

@keyframes slideInFromLeft{
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }

}

.slideInFromRight{
    animation: slideInFromRight 0.5s ease-in-out;
}

@keyframes slideInFromRight{
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}

.slideInFromTop{
    animation: slideInFromTop 0.5s ease-in-out;
}

@keyframes slideInFromTop{
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }

}

.slideInFromBottom{
    animation: slideInFromBottom 0.5s ease-in-out;
}

@keyframes slideInFromBottom{
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
}
</style>