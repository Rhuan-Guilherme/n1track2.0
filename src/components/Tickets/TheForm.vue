<script setup>
import { useTicketStore } from '@/stores/ticket'
const store = useTicketStore()



</script>


<template>
   <div>
      <div>
         <form @submit.prevent="store.cadastraTicket('chamado')" class="flex flex-col gap-6">
            <div class="flex flex-col md:flex-row gap-3">
               <div class="flex flex-col w-full">
                  <label class="label" for="nome">Nome do Usuário</label>
                  <input v-model="store.nome" id="nome" class="input h-10" type="text">
               </div>
               <div class="flex flex-col w-full">
                  <label class="label" for="login">Login do Usuário</label>
                  <input v-model="store.login" id="login" class="input h-10" type="text">
               </div>
            </div>

            <div class="flex flex-col md:flex-row gap-3">
               <div class="flex flex-col w-full">
                  <label class="label" for="ramal">Ramal</label>
                  <input v-model="store.ramal" id="ramal" class="input h-10" type="text">
               </div>
               <div class="flex flex-col w-full">
                  <label class="label" for="patrimonio">Patrimônio</label>
                  <input v-model="store.patrimonio" id="patrimonio" class="input h-10" type="text">
               </div>
            </div>

            <div class="flex gap-3">
               <div class="flex flex-col w-full">
                  <label class="label" for="informacao">Informação</label>
                  <input v-model="store.informacao" id="informacao" class="input h-10" type="text">
               </div>
            </div>

            <div class="flex gap-3">
               <div class="flex flex-col w-full">
                  <label class="label" for="local">Local</label>
                  <input v-model="store.local" id="local" class="input h-10" type="text">
               </div>
            </div>

            <div>
               <button type="submit" class="h-10 w-36 bg-gradient-to-t from-[#0449A4] to-[#006EFF] rounded-md text-md text-cinza-100 font-bold">Registrar</button>
            </div>
         </form>
      </div>
   </div>
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