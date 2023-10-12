<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <div class="h-screen w-screen bg-gray-100 dark:bg-azul-escuro-950">
    <RouterView class="bg-black h-screen" />

  </div>
  
</template>

<style scoped>

</style>
