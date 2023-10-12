<script setup>
import { useTicketStore } from '@/stores/ticket'
const store = useTicketStore()



</script>


<template>
      <div class="p-4 flex justify-center w-full mt-5">
         <div class="w-full xl:w-4/5">
            <form @submit.prevent="store.cadastraTicket('chamado')" class="flex flex-col gap-5">
               <div class="w-full flex gap-4">
                  <div class="w-full">
                     <div class="flex">
                        <span class="span ">
                           Nome
                        </span>
                        <input v-model="store.nome" type="text" id="website-admin" class="input">
                     </div>

                  </div>
                  <div class="w-full">
                     <div class="flex">
                        <span class="span">
                           Login
                        </span>
                        <input v-model="store.login" type="text" id="website-admin" class="input">
                     </div>
                  </div>
               </div>
               <div class="w-full flex gap-4">
                  <div class="w-full">
                     <div class="flex">
                        <span class="span">
                           Ramal
                        </span>
                        <input v-model="store.ramal" type="text" id="website-admin" class="input">
                     </div>

                  </div>
                  <div class="w-full">
                     <div class="flex">
                        <span class="span">
                           Patrimônio
                        </span>
                        <input v-model="store.patrimonio" type="text" id="website-admin" class="input">
                     </div>
                  </div>
               </div>
               <div>
                  <div class="flex">
                     <span class="span">
                        Informação
                     </span>
                     <input v-model="store.informacao" type="text" id="website-admin" class="input">
                  </div>
               </div>
               <div>
                  <div class="flex">
                     <span class="span">
                        Localização
                     </span>
                     <input v-model="store.local" type="text" id="website-admin" class="input">
                  </div>
               </div>

               <div>
                  <button type="submit" class="h-10 w-32 bg-gradient-to-t from-[#0449A4] to-[#006EFF] rounded-md text-md text-cinza-100 font-bold">
              Registrar
            </button>
               </div>
            </form>
         </div>


      </div>
  


</template>

<style scoped>


.input {
   @apply rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}

.span {
   @apply inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-100 dark:border-gray-600 font-semibold;
}
</style>