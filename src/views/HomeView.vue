<script setup>
import Navbar from '@/components/layout/TheHeader.vue'
import Formulario from '@/components/cadastro/TheForm.vue'
import { useLoginStore } from '@/stores/login'
const loginStore = useLoginStore()
const dados = loginStore.dadosUsuario


</script>

<template>
   <Navbar />
   <Formulario />
</template>
