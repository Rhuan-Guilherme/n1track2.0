<script setup>
import { useTicketStore } from '@/stores/ticket'
const store = useTicketStore()

</script>


<template>
<div>
      <div>
         <form @submit.prevent="store.cadastraTicket('queda')" class="flex flex-col gap-6">
           
            <div class="flex gap-3">
               <div class="flex flex-col w-full">
                  <label class="label" for="ramal">Ramal da queda</label>
                  <input v-model="store.ramal" id="ramal" class="input h-10" type="text">
               </div>
            </div>

            <div>
               <button type="submit" class="h-10 w-36 bg-gradient-to-t from-[#0449A4] to-[#006EFF] rounded-md text-md text-cinza-100 font-bold">Registrar</button>
            </div>
         </form>
      </div>
   </div>


      <!-- <div class="p-4 flex justify-center w-full mt-5">
         <div class="w-full xl:w-4/5">
            <form  class="flex flex-col gap-5">
               <div class="w-full flex gap-4">
                  <div class="w-full">
                     <div class="flex">
                        <span class="span">
                           Ramal da queda
                        </span>
                        <input v-model="store.ramal" type="text" id="website-admin" class="input">
                     </div>

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
   -->


</template>

<style scoped>


.label{
   color: #B8B8B8;
   font-style: normal;
   font-weight: 600;
   line-height: 98%; 
   margin-bottom: 5px;
}

.input {
   color: white;
   border-radius: 10px;
   background: #292929;
   border: none;
}

</style>