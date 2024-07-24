<template>
   <div class="min-h-screen md:p-12 bg-black">
      <div class="prose prose-invert mx-auto">
         <div data-content-id="content:index.md">
            <h1 id="how-do-stories-transform">How Do Stories Transform?</h1>
            <div 
               :style="{
                  backgroundImage: `url(/${img}.webp)`,
                  transition: 'background-image 0.5s ease-in-out'
               }"
               class="w-full py-64 bg-contain bg-no-repeat bg-center mx-auto">

            </div>
            <p>In literature, it is common for stories to be later <strong>interpreted, adapted, and transformed by
                  other authors.</strong></p>
            <b>
               An author's personal experiences, culture, and intended audience all influences their adaptation process and the changes they make to a story.
            </b>
            <p>In this website, you'll explore how the story of <strong>Pygmalion &amp; Galatea</strong> was transformed
               by Shaw's <strong>Pygmalion</strong> and Lerner's <strong>My Fair Lady</strong>.</p>
            <h2 id="get-started-with-a-story-below">Get Started With A Story Below 👇</h2>
            <p><NuxtLink to="/scene/ovid-pygmalion/intro?start" class="">Explore the Pygmalion &amp; Galatea myth</NuxtLink></p>
            <p><NuxtLink to="/scene/shaw-pygmalion/act-1?start" class="">Explore Shaw's Pygmalion</NuxtLink></p>
            <p><NuxtLink to="/scene/lerner-my-fair-lady/act-1?start" class="">Explore Lerner's My Fair Lady</NuxtLink></p>
            <h2 id="resources">Resources</h2>
            <ul>
               <li><NuxtLink to="/content/controls" class="">Controls</NuxtLink></li>
               <li><NuxtLink to="/content/credits" class="">Image Credits</NuxtLink></li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
   const imgQueue = ['ga','do2','l-e2','py1','hi1','l-hande']
   const currentIndex = ref(0)
   const img = computed(()=>imgQueue[currentIndex.value])

   useIntervalFn(()=>{
      currentIndex.value = (currentIndex.value + 1) % imgQueue.length
   }, 2500  )
</script>