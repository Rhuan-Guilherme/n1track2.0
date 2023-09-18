<script setup>
import { ref } from 'vue'
import cadastro from '@/components/Cadastro.vue'
import login from '@/components/LoginPage.vue'
import lateral from '@/components/PageSide.vue'


const Exibelogin = ref(false)
function logins(){
  Exibelogin.value = !Exibelogin.value;
}
</script>

<template>
     <div class="absolute right-0">
    <button @click="logins()" class="text-white bg-slate-600 p-4">Login</button>
  </div>
  
  <div class="flex">
    <lateral class="hidden md:block md:w-1/2" />
    <cadastro v-if="!Exibelogin" class="w-full md:w-1/2" />
    <login v-else class="w-full md:w-1/2" />
  </div>
</template>