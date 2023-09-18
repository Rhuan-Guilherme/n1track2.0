<script setup>
import { ref } from "vue";
import { useLoginStore } from "@/stores/login";
const loginStore = useLoginStore();
</script>

<template>
  <div class="bg-azul-950 h-screen w-1/2">
    <div class="flex items-center justify-center h-full">
      <form @submit.prevent="loginStore.logaUsuario" class="w-2/5">
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Email</label
          >
          <input
            type="text"
            name="email"
            id="email"
            v-model="loginStore.email"
            class="bg-azul-900 w-full rounded-lg border-none text-white"
          />
        </div>
        <div class="mb-6">
          <label
            for="senha"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Senha</label
          >
          <input
            type="password"
            name="senha"
            id="senha"
            v-model="loginStore.senha"
            class="bg-azul-900 w-full rounded-lg border-none text-white"
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Logar
        </button>
      </form>
    </div>
  </div>
</template>
