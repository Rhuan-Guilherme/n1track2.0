<script setup>
import { useSelectStore } from '@/stores/selectForm'
import { useFiltroStore } from '@/stores/filtroTicket'
const storeSelect = useSelectStore()
const storeFiltro = useFiltroStore()

console.log(storeFiltro.userData);
</script>


<template>
  <div>
  </div>
  <section>
    <div class="fundo  flex justify-center gap-3 p-3">
    <button @click="storeFiltro.setTicketTypeFilter()"  class="fundoBotao botao" ><span class="span">Total</span></button>
    <button @click="storeFiltro.setTicketTypeFilter('chamado')"  class="fundoBotao botao " ><span class="span">Chamados</span></button>

    <button @click="storeFiltro.setTicketTypeFilter('reiteração')" class="fundoBotao botao" ><span class="span">Reiteração</span></button>

    <button @click="storeFiltro.setTicketTypeFilter('transferencia')" class="fundoBotao botao"  ><sapn class="span">Trasnferencia</sapn></button>
    
    <button @click="storeFiltro.setTicketTypeFilter('queda')" class="fundoBotao botao"><span class="span">Queda de ligação</span></button>
    </div>
  </section>
</template>

<style scoped>
.fundo{
  border-radius: 10px;
  background: #525252;
  box-shadow: 0px 0px 15px 0px rgba(20, 20, 20, 0.25);
}

.span{
  @apply hidden md:inline;
}

.botao{
  @apply p-3 md:text-base;
}

.fundoBotao{
  color: #A3A3A3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #3D3D3D;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
}

.fundoBotao:hover{
  background: #252525;
  scale: 1.019;
  box-shadow: 0px 0px 0px;
}


</style>