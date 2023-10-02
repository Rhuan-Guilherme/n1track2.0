<script setup>
import { useTicketStore } from "@/stores/ticket";
import { useReturnStore } from "@/stores/returnTickets"
const returnTikets = useReturnStore()
const ticketStore = useTicketStore();

</script>


<template>
   <main class="w-screen h-screen bg-azul-950 flex justify-center pt-10">
      <div class="bg-azul-800 w-5/6 rounded-md p-4">
         <h1 class="font-semibold text-xl mb-4">Registro de chamados</h1>

         <div>
            <form @submit.prevent="ticketStore.cadastraTicket" class="flex flex-col gap-3">
               <div class="flex flex-col gap-3 md:flex-row">
                  <div class="flex w-full">
                     <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                       Nome
                     </span>
                     <input v-model="ticketStore.nome" name="nome" type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
                  
                  <div class="flex w-full">
                     <span class="inline-flex items-center px-2.5 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                       Login
                     </span>
                     <input v-model="ticketStore.login" name="login" type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
               </div>

               <div class="flex flex-col gap-3 md:flex-row">
                  <div class="flex w-full">
                     <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                       Ramal
                     </span>
                     <input v-model="ticketStore.ramal" name="ramal" type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
                  
                  <div class="flex w-full">
                     <span class="inline-flex items-center px-2.5 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                       Patrimônio
                     </span>
                     <input v-model="ticketStore.patrimonio" name="patrimonio" type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
               </div>

               <div class="flex flex-col gap-3">
                  <div class="flex">
                     <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                       Informação
                     </span>
                     <input v-model="ticketStore.informacao" name="informacao" type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
                  
               </div>

               <div class="flex flex-col gap-3">
                  <div class="flex">
                     <span class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                       Localização
                     </span>
                     <input  v-model="ticketStore.local" name="local" type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
                  
               </div>

               <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>

            </form>
         </div>

      </div>
   </main>

   <div>
      <div>
         <div v-for="tiket in returnTikets.userData">
            <p class="mt-20">{{ tiket.created_at }}</p>
         </div>
      </div>
   </div>
</template>