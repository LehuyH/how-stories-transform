<template>
    <div :class="`absolute ${outer_style}`">
        <HeadlessPopover class="relative group">
            <HeadlessPopoverButton class="focus:outline-none relative">
                <img :src="image" :style="{
                    transform: `translateX(${tilt * 25}px) translateY(${roll * 25}px)`
                }" class="w-full h-full max-h-[70vh] object-cover image-stroke"/>
            </HeadlessPopoverButton>

            <Transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0" mode="out-in">
                <HeadlessPopoverPanel :class="`absolute w-[24rem] ${popover_style}`">
                    <div class="bg-white rounded p-8 shadow-xl prose">
                        <h2 class="flex items-center gap-1">
                            <Icon :name="icon" />
                            {{ title }}
                        </h2>
                        <p>
                            {{ description }}
                        </p>
                        <IconButton icon="heroicons-outline:arrow-right" class="bg-slate-500 hover:bg-slate-400">
                            Explore
                        </IconButton>
                    </div>
                </HeadlessPopoverPanel>
            </Transition>
        </HeadlessPopover>
    </div>

</template>

<script setup lang="ts">
defineProps<{
    image: string,
    tilt: number,
    description:string,
    roll: number,
    title: string,
    icon:string,
    _path:string,
    popover_style:string,
    outer_style:string
}>()
</script>

<style scoped>
.image-stroke{
    transition: filter 0.15s ease-in-out;
}

.image-stroke:hover{
    filter: drop-shadow(0px 0px 10px #000);
}
</style>