<template>
    <div ref="container" class="min-h-screen max-h-screen md:p-12">
        <ParallaxBackground v-if="symbol" :tilt="tilt" :roll="roll" :src="backgrounds[`${storyName}/${sceneName}`]"/>
        <div class="bg-white max-w-4xl w-full mx-auto rounded fadeIn z-20 relative">
            <main class="prose rounded mx-auto py-12 px-8">
                <button @click="goBack" class="flex items-center mb-4 text-blue-500 hover:text-blue-400 transition-colors hover:underline">
                        <Icon name="heroicons-outline:arrow-left"/>
                        <span class="ml-2">
                            Back
                        </span>
                    </button>
                <template v-if="symbol">
                    <h1 class="md:text-4xl text-3xl font-bold flex items-center gap-2">
                       <Icon :name="symbol.icon"/> <span>{{ symbol.title }}</span>
                    </h1>
                    <p class="md:text-xl text-lg">
                        {{ symbol.description }}
                    </p>
                    <img :src="symbol.image" class="w-full h-full max-h-[50vh] object-contain"/>
                </template>
                <ContentDoc :path="path"/>
                <IconButton icon="heroicons-outline:arrow-right" @click="goBack" class="bg-slate-500 hover:bg-slate-400">
                    Continue
                </IconButton>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">

const container = ref(null)
const { tilt, roll } = useParallax(container)
//@ts-ignore
const path = (Array.isArray(useRoute().params.path)) ? useRoute().params.path.join('/').trim() : useRoute().params.path

const [storyName, sceneName] = path.split('/')

const { data:symbols } = await useAsyncData(`symbol-${sceneName}-${storyName}`,()=>
    queryContent(`/${storyName}/${sceneName}`)
    .only(['title', 'image','icon','_path','description','popover_style','outer_style'])
    .find()
)

const symbol = computed(()=>symbols.value?.find(s=>s._path?.includes(path)))

const router = useRouter()
const goBack = () => {
    router.back()
}
</script>