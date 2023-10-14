<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <div class="w-screen h-full bg-gray-100 dark:bg-cinza-900">
    <RouterView />
  </div>
  
</template>

<style scoped>

</style>
