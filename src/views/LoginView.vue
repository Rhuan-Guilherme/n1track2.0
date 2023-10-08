<script setup>
import { ref } from 'vue'
import cadastro from '@/components/loginPage/Cadastro.vue'
import login from '@/components/loginPage/LoginPage.vue'
import lateral from '@/components/loginPage/PageSide.vue'
import { useSwitchStore } from '@/stores/switchLogin'
const Switch = useSwitchStore()

</script>

<template>
     <div class="absolute right-0">
  
  </div>
  
  <div class="flex bg-cinza-950">
    <cadastro v-if="!Switch.exibelogin" class="w-full md:w-1/2 cadastro-page" />
    <login v-else class="w-full md:w-1/2 login-page" />
    <lateral class="hidden md:block md:w-1/2" />
  </div>
</template>

<style scoped>
.login-page {
  
  animation: fade-in 0.5s ease-in-out forwards;
}

.cadastro-page {

  animation: fade-in 0.5s ease-in-out forwards;
}

/* Animação de desvanecimento (fade-in) */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px)
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>