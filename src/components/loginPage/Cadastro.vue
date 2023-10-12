<script setup>
import { ref } from "vue";
import { useCadastroStore } from "@/stores/cadastro";
import { useSwitchStore } from '@/stores/switchLogin'
const cadastroStore = useCadastroStore();
const Switch = useSwitchStore()

</script>

<template>
  <div class="bg-cinza-950 h-screen flex  items-center justify-center">
    <div class="flex flex-col gap-24">
      <div class="">
        <h1 class="text-7xl leading-[0.8] text-cinza-50 mb-4">Crie <br> sua conta</h1>
        <p class="text-cinza-200">Já é um membro?<span @click="Switch.toggle"  class="text-azul-600 font-bold ml-2 cursor-pointer">Log in</span></p>
      </div>
      <div>
        <form @submit.prevent="cadastroStore.cadastrarUsuario" class="flex flex-col gap-8">
          <div>
            <input v-model="cadastroStore.nome" type="text" placeholder="Nome" class="input">
          </div>
          <div>
            <input v-model="cadastroStore.email" type="email" placeholder="Email" class="input">
          </div>
          <div>
            <input v-model="cadastroStore.senha" type="password" placeholder="Senha" class="input">
          </div>
          <div>
            <button type="submit" class="h-14 w-40 bg-gradient-to-t from-[#0449A4] to-[#006EFF] rounded-full text-lg text-cinza-100 font-bold">
              Cadastre-se
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

.input{
  @apply h-14 w-96 rounded-full bg-cinza-900 border-none text-lg text-cinza-200;
}

</style>