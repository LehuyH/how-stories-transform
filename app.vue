<template>
  <div class="min-h-screen bg-white">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const showControls = useState('showControls',()=>false)
const router = useRouter()
router.afterEach((_,from)=>{
  if(from.fullPath === '/'){
    showControls.value = true
  }
})

</script>

<style>
.fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>