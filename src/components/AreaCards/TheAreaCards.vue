<script setup>
import { useReturnStore } from '@/stores/returnTickets'
import { useLoginStore } from '@/stores/login';
const loginSotre = useLoginStore()
const store = useReturnStore()

store.fetchUserData(loginSotre.dadosUsuario.id)

console.log(store.userData);
</script>

<template>
    <div class="bg-azul-900 p-3 h-auto flex flex-wrap justify-center gap-3">
        <div v-for="dados in store.userData" :key="dados.id" class="w-52 bg-azul-950 border text-white p-2 rounded-lg">
            <div>
                {{ dados.tipo }}
                {{ dados.id }}
            </div>

            <div v-if="dados.tipo == 'chamado'">
                <p>Prezados, Sr(a). {{ dados.nome }} entrou em contato {{ dados.informacao }}</p>
                <p>Nome: {{ dados.nome }}</p>
                <p>Login: {{ dados.login }}</p>
                <p>Ramal: {{ dados.ramal }}</p> 
                <p>Local: {{ dados.local }}</p>
                <p>Patrimônio: {{ dados.patrimonio }}</p>
            </div>

            <div class="bg-yellow-200" v-if="dados.tipo == 'reiteracao'">
                <p>Prezados, Sr(a). {{ dados.nome }} entrou em contato solicitando a reiteração do chamado: {{ dados.chamado }}</p>
                <p>Login: {{ dados.login }}</p>
                <p>Ramal: {{ dados.ramal }}</p>
            </div>

            <div class="bg-azul-500" v-if="dados.tipo == 'transferencia'">
                <p>Prezados, Sr(a). {{ dados.nome }} entrou em contato solicitando a transferencia de ligação para o Sr(a). {{ dados.chamado }}</p>
                <p>Ramal: {{ dados.ramal }}</p>
            </div>

            <div class="bg-red-300" v-if="dados.tipo == 'queda'">
                <p>Queda de ligação!</p>
                <p>Ramal: {{ dados.ramal }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>