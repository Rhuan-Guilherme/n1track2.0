<script setup>
import Navbar from '@/components/header/TheHeader.vue'
import { useLoginStore } from '@/stores/login'
const loginStore = useLoginStore()
const dados = loginStore.dadosUsuario


</script>

<template>
   <Navbar />
</template>
