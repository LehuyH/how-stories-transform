<template>
  <div class="min-h-screen bg-white">
    <NuxtPage />
  </div>
</template>

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