<script setup>
import Navbar from '@/components/layout/TheHeader.vue'
import { useReturnUsuarioStore } from '@/stores/retornaUsuarios'
const store = useReturnUsuarioStore()
</script>

<template>
    <Navbar />
    <main class="flex justify-center mx-auto p-4 mt-3 ">
        <div class="fundoForm w-11/12">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-cinza -700 uppercase bg-gray-50 dark:bg-cinza-800 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cargo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total Chamados
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="dados in store.userData"
                            class="bg-white border-b dark:bg-cinza-950 dark:border-cinza-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                            </td>
                            <th scope="row"
                                class="flex items-center px-6 py-4 text-cinza-900 whitespace-nowrap dark:text-white">
                                <img class="w-10 h-10 rounded-full" src="@/assets/img/avatar.png"
                                    alt="Jese image">
                                <div class="pl-3">
                                    <div class="text-base font-semibold">{{ dados.nome }}</div>
                                    <div class="font-normal text-cinza-500">{{ dados.email }}</div>
                                </div>
                            </th>
                            <td v-if="dados.supervisor == 0" class="px-6 py-4">
                                Analista N1
                            </td>
                            <td v-else class="px-6 py-4">
                                Supervisor N1
                            </td>
                          
                            <td class="px-6 py-4">
                                <p>{{ dados.total_chamados }}</p>
                            </td>
                        </tr>
                       
                </tbody>
            </table>
        </div>
    </div>
</main></template>

<style scoped>.fundoForm {
    border-radius: 10px;
    background: #525252;
    box-shadow: 0px 0px 15px 0px rgba(20, 20, 20, 0.25);
}</style>