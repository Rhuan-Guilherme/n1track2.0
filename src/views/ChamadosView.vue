<script setup>
import Navbar from '@/components/layout/TheHeader.vue'
import Cards from '@/components/chamados/cardChamados.vue'
import TheAreaFiltro from '../components/chamados/TheAreaFiltro.vue';
</script>

<template>
    <Navbar />

    <main class="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4 mt-3 ">
        <div class="fundoForm w-3/7">
            <Cards />
        </div>
    </main>

    <section class="flex justify-center mt-7 mb-7">
      <TheAreaFiltro />
   </section>
</template>

<style scoped>
.fundoForm{
   border-radius: 10px;
   background: #525252;
   box-shadow: 0px 0px 15px 0px rgba(20, 20, 20, 0.25);
}
</style>