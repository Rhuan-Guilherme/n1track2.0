<script setup>
import { useLoginStore } from '@/stores/login'
import { ref, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { useDark, useToggle } from '@vueuse/core'

onMounted(() => {
    initFlowbite();
})

const isDark = useDark(true)
const toggleDark = useToggle(isDark)

const loginStore = useLoginStore()
const dados = ref(loginStore.dadosUsuario)


</script>

<template>
 
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <h1>{{ dados }}</h1>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <RouterLink to="/home" class="flex items-center">
                <span class="material-symbols-outlined text-4xl text-blue-700 dark:text-blue-600">headset_mic</span>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">N1Track</span>
    </RouterLink>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="@/assets/img/avatar.png" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span v-if="dados" class="block text-sm text-gray-900 dark:text-white">{{ dados.nome }}</span>
          <span  v-if="dados" class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ dados.email }}</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <div href="#" class="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              <div class="flex items-center justify-center">
                <span class="material-symbols-outlined text-[1.2rem]">settings</span>
              </div>
              <div>Configurações</div>
            </div>
          </li>
          <li>
            <div @click="toggleDark()" href="#" class="cursor-pointer flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              <div class="flex items-center justify-center">
                <span v-if="isDark" class="material-symbols-outlined text-[1.2rem]"> light_mode</span>
                <span v-if="!isDark" class="material-symbols-outlined text-[1.2rem]">dark_mode</span>
              </div>
              <div>Tema {{ isDark ? "Claro" : "Escuro" }}</div>
            </div>
          </li>
          <li>
            <div @click="loginStore.fazLogout" href="#" class="flex gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              <div class="flex items-center justify-center">
                <span class="material-symbols-outlined text-[1.2rem]">logout</span>
              </div>
              <div>Sair</div>
            </div>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Registrar</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Desempenho</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Paineis</a>
      </li>

    </ul>
  </div>
  </div>
</nav>

</template>