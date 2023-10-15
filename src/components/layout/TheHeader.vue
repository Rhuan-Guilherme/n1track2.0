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
 
<nav class="bg-cinza-100 border-b border-cinza-200 dark:border-cinza-700 dark:bg-cinza-950">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <RouterLink to="/tickets" class="flex items-center">
                <img src="@/assets/img/headset.svg" class="w-10 mr-2" alt="">
                <span class="dark:text-white font-sans text-3xl font-medium leading-tight">N1Track</span>
    </RouterLink>
  <div class="flex items-center justify-end md:order-2 md:w-40">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-11 h-11 rounded-full" src="@/assets/img/avatar.png" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-cinza-950 dark:text-white">{{ dados.nome }}</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ dados.email }}</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">

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
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-cinza-100 dark:bg-gray-800 md:dark:bg-cinza-950 dark:border-gray-700">
      <li>
        <RouterLink to="/tickets" class="dark:text-white font-roboto text-base font-medium leading-tight hover:text-azul-600" aria-current="page">Registrar</RouterLink>
      </li>
      <li>
        <RouterLink to="/desempenho" class="dark:text-white font-roboto text-base font-medium leading-tight hover:text-azul-600">Desempenho</RouterLink>
      </li>
      <li>
        <RouterLink to="/chamados" class="dark:text-white font-roboto text-base font-medium leading-tight hover:text-azul-600">Chamados</RouterLink>
      </li>

    </ul>
  </div>
  </div>
</nav>

</template>