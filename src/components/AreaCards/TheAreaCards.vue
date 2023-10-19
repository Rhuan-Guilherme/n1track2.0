<script setup>
import { useReturnStore } from '@/stores/returnTickets'
import { useLoginStore } from '@/stores/login';
import { useDeleteStore } from '@/stores/optionsTicket'
import { ref, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'


onMounted(() => {
    initFlowbite();
})

let modal = ref(false)

function openModal() {
    modal.value = true
}

function doneModal() {
    modal.value = false
}

const deleteStore = useDeleteStore()
const loginSotre = useLoginStore()
const store = useReturnStore()

store.fetchUserData(loginSotre.dadosUsuario.id)

</script>

<template>
    <div class="fundo w-11/12 h-auto p-3 flex flex-wrap items-center justify-center gap-3 ">
        <div v-for="dados in store.userData" :key="dados.id" :class="{ 'ativado': dados.status == 'Fechado' }"
            class="fundoCard text-white p-4 max-w-xs w-full relative ">
            
            <button @click="deleteStore.ReturnConcluiTicket(dados.id)" v-if="dados.status == 'Fechado'" class="absolute inline-flex items-center justify-center w-6 h-6 font-bold hover:scale-125 text-white hover:bg-red-500  bg-green-500 rounded-md -top-2 -right-2 ">
                <span class="material-symbols-outlined">done</span>
            </button>

            <div :class="{ 'ativoDentro': dados.status == 'Fechado' }">
                <div v-if="dados.tipo == 'chamado'" class="flex flex-col gap-3">
                    <div class="flex flex-col gap-2">
                        <div class="text-xs text-cinza-500">
                            {{ dados.created_at }}
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex ">{{ dados.nome }} - {{ dados.ramal }}</div>
                            <div class="specChamado w-auto px-2 h-5 text-[12px] flex items-center justify-center gap-2 font-bold" :class="{ 'econdeAtivo': dados.status == 'Fechado' }"><div class="bolChamado w-2 h-2 rounded-full " :class="{ 'econdeAtivo': dados.status == 'Fechado' }"></div>Chamado</div>
                        </div>
                    </div>
                    <div class="bg-cinza-300 h-[1px] "></div>
                    <div class="flex flex-col gap-2" >
                        <p class="">Prezados, Sr(a). {{ dados.nome }} entrou em contato {{ dados.informacao }}</p>
                        <p>Nome: {{ dados.nome }}</p>
                        <p>Login: {{ dados.login }}</p>
                        <p>Ramal: {{ dados.ramal }}</p>
                        <p>Local: {{ dados.local }}</p>
                        <p>Patrimônio: {{ dados.patrimonio }}</p>
                    </div>
                </div>


                <div v-if="dados.tipo == 'reiteracao'" class="flex flex-col gap-3">
                    <div class="flex flex-col gap-2">
                        <div class="text-xs text-cinza-500">
                            {{ dados.created_at }}
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex ">{{ dados.nome }} - {{ dados.ramal }}</div>
                            <div class="specReiteracao w-auto px-2 h-5 text-[12px] flex items-center justify-center gap-2 font-bold" :class="{ 'econdeAtivo': dados.status == 'Fechado' }"><div class="bolReiteracao w-2 h-2 rounded-full " :class="{ 'econdeAtivo': dados.status == 'Fechado' }"></div>Reiteração</div>
                        </div>
                    </div>
                    <div class="bg-cinza-300 h-[1px] "></div>
                    <div class="flex flex-col gap-2" >
                        <p class="">Senhor(a) {{ dados.nome }} entrou em contato requisitando a reiteração e brevidade no chamado SERVICEDESK-{{ dados.chamado }}.</p>
                        <p>Login: {{ dados.login }}</p>
                        <p>Ramal: {{ dados.ramal }}</p>
                    </div>
                </div>


                <div v-if="dados.tipo == 'transferencia'" class="flex flex-col gap-3">
                    <div class="flex flex-col gap-2">
                        <div class="text-xs text-cinza-500">
                            {{ dados.created_at }}
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex ">{{ dados.nome }} - {{ dados.ramal }}</div>
                            <div class="specTransferencia w-auto px-2 h-5 text-[12px] flex items-center justify-center gap-2 font-bold" :class="{ 'econdeAtivo': dados.status == 'Fechado' }"><div class="bolTransferencia w-2 h-2 rounded-full animate-pulse" :class="{ 'econdeAtivo': dados.status == 'Fechado' }"></div>Transferencia</div>
                        </div>
                    </div>
                    <div class="bg-cinza-300 h-[1px] "></div>
                    <div class="flex flex-col gap-2" >
                        <p class="">Senhor(a) {{ dados.nome }} entrou em contato solicitando transferência de ligação para o(a) senhor(a) {{ dados.destinatario }} </p>
                        <p>Ramal: {{ dados.ramal }}</p>
                    </div>
                </div>


                <div v-if="dados.tipo == 'queda'" class="flex flex-col gap-3">
                    <div class="flex flex-col gap-2">
                        <div class="text-xs text-cinza-500">
                            {{ dados.created_at }}
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="flex ">{{ dados.ramal }}</div>
                            <div class="specQueda w-auto px-2 h-5 text-[12px] flex items-center justify-center gap-2 font-bold" :class="{ 'econdeAtivo': dados.status == 'Fechado' }"><div class="bolQueda w-2 h-2 rounded-full " :class="{ 'econdeAtivo': dados.status == 'Fechado' }"></div>Queda</div>
                        </div>
                    </div>
                    <div class="bg-cinza-300 h-[1px] "></div>
                    <div class="flex flex-col gap-2" >
                        <p class="">Senhor(a) Senhor(a) não identificado entrou em contato com o helpdesk no ramal 3416 e interrompeu a ligação antes do atendimento inicial.</p>
                        <p>Ramal: {{ dados.ramal }}</p>
                    </div>
                </div>
            </div>


            <div class="flex gap-2 justify-center fundoOptionCards p-2 mt-3 " :class="{ 'esconder': dados.status == 'Fechado' }">
                <button @click="deleteStore.deleteTicket(dados.id)"  type="button" class="fundoOptions py-2 px-4">Deletar</button>
                <!-- <button @click="openModal()"  type="button" class="fundoOptions py-2 px-4">Editar</button> -->
                <button  @click="deleteStore.concluiTicket(dados.id)" type="button" class="fundoOptions py-2 px-4">Concluir</button>
            </div>

            

        </div>
    </div>
</template>

<style scoped>
.fundoOptions{
    border-radius: 6px;
    background: rgba(41, 41, 41, 0.60);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
}

.fundoOptions:hover{
    background: #000;
}

.fundoOptionCards{
    border-radius: 6px;
    background: rgba(41, 41, 41, 0.60);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
}

.bolQueda{
    background-color: #CE7C5A;
    filter: drop-shadow(0px 0px 2px #CE7C5A);
}

.specQueda{
    border-radius: 5px;
    border: 1px solid #CE755A;
    color: #DBC4BA;
    background: rgba(206, 110, 90, 0.30);
}

.bolTransferencia{
    background-color: #5ACEB9;
    filter: drop-shadow(0px 0px 2px #5ACEB9);
}

.specTransferencia{
    border-radius: 5px;
    border: 1px solid #5ACEB9;
    background: rgba(90, 206, 185, 0.30);
    color: #BFD7D2;
}

.bolReiteracao{
    background-color: #9B5ACE;
    filter: drop-shadow(0px 0px 2px #9B5ACE);
}

.specReiteracao{
    border-radius: 5px;
    border: 1px solid #9B5ACE;
    background: rgba(155, 90, 206, 0.30);
    color: #BDA2D1;
}

.bolChamado{
    background-color: #5A78CE;
    filter: drop-shadow(0px 0px 2px #5A78CE);
}

.specChamado{
    border-radius: 5px;
    border: 2px solid #5A78CE;
    background: rgba(90, 120, 206, 0.30);
    color: #B2BCD9;
}

.fundo{
    border-radius: 10px;
    background: #3D3D3D;
    box-shadow: 0px 0px 15px 0px rgba(20, 20, 20, 0.25);
}

.fundoCard{
    border-radius: 10px;
    background: #141414;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.40);
}

.econdeAtivo{
    background: rgba(110, 110, 110, 0.3);
    border: 1px solid gray;
    color: #888888;
}

.esconder{
    display: none;
}

.ativado {
    @apply border-2 border-green-500; 
}

.ativoDentro{
    @apply opacity-70;
}


</style>