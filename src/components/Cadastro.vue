<script setup>
import { useCadastroStore } from "@/stores/cadastro";
const cadastroStore = useCadastroStore();
</script>

<template>
  <div class="bg-azul-950 h-screen ">
    <div class="flex items-center justify-center h-full">
      <form @submit.prevent="cadastroStore.cadastrarUsuario" class="w-2/5">
        <div class="mb-6">
          <label
            for="nome"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Nome:</label
          >
          <input
            type="text"
            name="nome"
            id="nome"
            v-model="cadastroStore.nome"
            class="bg-azul-900 w-full rounded-lg border-none text-white"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Email:</label
          >
          <input
            type="text"
            name="email"
            id="email"
            v-model="cadastroStore.email"
            class="bg-azul-900 w-full rounded-lg border-none text-white"
            placeholder=""
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="senha"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Senha:</label
          >
          <input
            type="password"
            name="senha"
            id="senha"
            v-model="cadastroStore.senha"
            class="bg-azul-900 w-full rounded-lg border-none text-white"
            required
          />
        </div>

        <div class="mt-10">
          <button
            type="submit"
            class="text-white bg-azul-600 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-3 text-center"
          >
            CADASTRAR
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
