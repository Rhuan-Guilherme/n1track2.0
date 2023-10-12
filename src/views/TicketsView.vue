<script setup>
import Navbar from '@/components/layout/TheHeader.vue'
import SelectForm from '@/components/Tickets/SelectForm.vue';
import Formulario from '@/components/Tickets/TheForm.vue'
import Queda from '@/components/Tickets/TheFormQueda.vue'
import Reiteracao from '@/components/Tickets/TheFormReiteracao.vue'
import Transferencia from '@/components/Tickets/TheFormTransferencia.vue'
import AreaCards from '../components/AreaCards/TheAreaCards.vue';
import { useLoginStore } from '@/stores/login'
import { useSelectStore } from '@/stores/selectForm'
const storeSelect = useSelectStore()

const loginStore = useLoginStore()
const dados = loginStore.dadosUsuario


</script>

<template>
   <Navbar />
   <main class="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4 mt-5">
      <SelectForm />
      <Formulario v-if="storeSelect.estado === 'chamado'" />
      <Reiteracao v-if="storeSelect.estado === 'reiteracao'" />
      <Transferencia v-if="storeSelect.estado === 'transferencia'" />
      <Queda v-if="storeSelect.estado === 'queda'" />

   </main>
   
   <section>
      <AreaCards />
   </section>
</template>
