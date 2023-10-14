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

console.log(store.userData);
</script>

<template>
    <div class="fundo w-11/12 h-auto p-3 flex flex-wrap-reverse items-center justify-center gap-3 ">
        <div v-for="dados in store.userData" :key="dados.id" :class="{ 'ativado': dados.status == 'Fechado' }"
            class="fundoCard text-white p-4 max-w-xs w-full ">


            <div>
                <div v-if="dados.tipo == 'chamado'" class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                        <div class="flex ">{{ dados.nome }} - {{ dados.ramal }}</div>
                        <div class="specChamado w-auto px-2 h-5 text-[12px] flex items-center justify-center gap-2 font-bold"><div class="bolChamado w-2 h-2 rounded-full "></div>Chamado</div>
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
                    <div class="flex items-center gap-2">
                        <div class="flex ">{{ dados.nome }} - {{ dados.ramal }}</div>
                        <div class="specReiteracao w-auto px-2 h-5 text-[12px] flex items-center justify-center gap-2 font-bold"><div class="bolReiteracao w-2 h-2 rounded-full "></div>Reiteração</div>
                    </div>
                    <div class="bg-cinza-300 h-[1px] "></div>
                    <div class="flex flex-col gap-2" >
                        <p class="">Senhor(a) {{ dados.nome }} entrou em contato requisitando a reiteração e brevidade no chamado SERVICEDESK-{{ dados.chamado }}.</p>
                        <p>Login: {{ dados.login }}</p>
                        <p>Ramal: {{ dados.ramal }}</p>
                    </div>
                </div>


                <div v-if="dados.tipo == 'transferencia'" class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                        <div class="flex ">{{ dados.nome }} - {{ dados.ramal }}</div>
                        <div class="specTransferencia w-auto px-2 h-5 text-[12px] flex items-center justify-center gap-2 font-bold"><div class="bolTransferencia w-2 h-2 rounded-full "></div>Transferencia</div>
                    </div>
                    <div class="bg-cinza-300 h-[1px] "></div>
                    <div class="flex flex-col gap-2" >
                        <p class="">Senhor(a) {{ dados.nome }} entrou em contato solicitando transferência de ligação para o(a) senhor(a) {{ dados.destinatario }} </p>
                        <p>Ramal: {{ dados.ramal }}</p>
                    </div>
                </div>


                <div v-if="dados.tipo == 'queda'" class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                        <div class="flex ">{{ dados.ramal }}</div>
                        <div class="specQueda w-auto px-2 h-5 text-[12px] flex items-center justify-center gap-2 font-bold"><div class="bolQueda w-2 h-2 rounded-full "></div>Queda</div>
                    </div>
                    <div class="bg-cinza-300 h-[1px] "></div>
                    <div class="flex flex-col gap-2" >
                        <p class="">Senhor(a) Senhor(a) não identificado entrou em contato com o helpdesk no ramal 3416 e interrompeu a ligação antes do atendimento inicial.</p>
                        <p>Ramal: {{ dados.ramal }}</p>
                    </div>
                </div>
            </div>


            <div class="flex gap-2 justify-center fundoOptionCards p-2 mt-3">
                <button @click="deleteStore.deleteTicket(dados.id)"  type="button" class="fundoOptions py-2 px-4">Deletar</button>
                <button @click="openModal()"  type="button" class="fundoOptions py-2 px-4">Editar</button>
                <button  @click="deleteStore.concluiTicket(dados.id)" type="button" class="fundoOptions py-2 px-4">Concluir</button>
            </div>

            <!-- Main modal -->
            <div v-if="modal == true"
                class="fixed top-0 left-0 z-50 right-0 flex items-center justify-center bg-opacity-60 bg-gray-950 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full">
                <div v-if="dados.tipo == 'chamado'" class="relative w-full max-w-md max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="authentication-modal">
                            <span @click="doneModal()"><span
                                    class="material-symbols-outlined">close</span></span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Editar chamados</h3>
                            <form class="space-y-6">
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                                    <input v-model="deleteStore.nome" type="text" :placeholder="dados.nome"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                <div>
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Login</label>
                                    <input v-model="deleteStore.login" type="text" :placeholder="dados.login"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                <div>
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ramal</label>
                                    <input v-model="deleteStore.ramal" type="text" 
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                <div>
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patrimônio</label>
                                    <input v-model="deleteStore.patrimonio" type="text"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                <div>
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Informação</label>
                                    <input v-model="deleteStore.informacao" type="text"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>
                                <div>
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Local</label>
                                    <input v-model="deleteStore.local" type="text"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                                </div>


                                <div>
                                    <button @click="deleteStore.atualizaTicket(dados.id), doneModal()" type="submit"
                                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Salvar Alterações
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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

.ativado {
    @apply bg-green-500;
}


</style>