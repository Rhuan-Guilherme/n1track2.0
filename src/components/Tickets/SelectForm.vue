<script setup>
import { useSelectStore } from '@/stores/selectForm'
const storeSelect = useSelectStore()
</script>


<template>
  <section>
    <div class="fundo bg-[#F3F3F3] dark:bg-[#525252] flex justify-center gap-3 p-3">
    <button @click="storeSelect.chamado" class="fundoBotao botao bg-[#F3F3F3] dark:bg-[#3D3D3D] dark:text-[#A3A3A3] dark:hover:bg-[#252525]" :class="{ 'ativado': storeSelect.estado == 'chamado' }"><span class="material-symbols-outlined">description</span><span class="span">Chamados</span></button>

    <button @click="storeSelect.reiteracao" class="fundoBotao botao bg-[#F3F3F3] dark:bg-[#3D3D3D] dark:text-[#A3A3A3] dark:hover:bg-[#252525]" :class="{ 'ativado': storeSelect.estado == 'reiteracao' }"><span class="material-symbols-outlined">notification_important</span><span class="span">Reiteração</span></button>

    <button @click="storeSelect.transferencia" class="fundoBotao botao bg-[#F3F3F3] dark:bg-[#3D3D3D] dark:text-[#A3A3A3] dark:hover:bg-[#252525]" :class="{ 'ativado': storeSelect.estado == 'transferencia' }" ><span class="material-symbols-outlined">phone_callback</span><sapn class="span">Trasnferencia</sapn></button>
    
    <button @click="storeSelect.queda" class="fundoBotao botao bg-[#F3F3F3] dark:bg-[#3D3D3D] dark:text-[#A3A3A3] dark:hover:bg-[#252525]" :class="{ 'ativado': storeSelect.estado == 'queda' }"><span class="material-symbols-outlined">phone_missed</span><span class="span">Queda de ligação</span></button>
    </div>
  </section>
</template>

<style scoped>
.fundo{
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(20, 20, 20, 0.25);
}

.span{
  @apply hidden md:inline;
}

.botao{
  @apply p-3 md:text-base;
}

.fundoBotao{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
}

.fundoBotao:hover{
  
  scale: 1.019;
  box-shadow: 0px 0px 0px;
}

.ativado{
  scale: 1.019;
  box-shadow: 0px 0px 0px;
}
</style>