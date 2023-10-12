<script setup>
import { useSelectStore } from '@/stores/selectForm'
const storeSelect = useSelectStore()
</script>


<template>
  <section>
    <div class="bg-gray-800 p-1.5 rounded-lg flex gap-3 ">
    <button @click="storeSelect.chamado" :class="{ 'ativado': storeSelect.estado == 'chamado' }" class="botao"><span class="material-symbols-outlined">description</span>Chamados</button>

    <button @click="storeSelect.reiteracao" class="botao" :class="{ 'ativado': storeSelect.estado == 'reiteracao' }"><span class="material-symbols-outlined">notification_important</span>Reiteração</button>

    <button @click="storeSelect.transferencia" :class="{ 'ativado': storeSelect.estado == 'transferencia' }" class="botao"><span class="material-symbols-outlined">phone_callback</span>Trasnferencia</button>
    
    <button @click="storeSelect.queda" class="botao" :class="{ 'ativado': storeSelect.estado == 'queda' }"><span class="material-symbols-outlined">phone_missed</span>Queda de ligação</button>
    </div>
  </section>
</template>

<style scoped>
.botao {
   @apply border border-gray-600 text-gray-300 py-1 px-2 rounded-lg bg-gray-700 font-semibold leading-6 flex gap-2 hover:bg-gray-600 hover:text-gray-100 hover:scale-[1.02];
}

.ativado{
    @apply bg-gray-600 text-gray-100 scale-[1.02];
}
</style>