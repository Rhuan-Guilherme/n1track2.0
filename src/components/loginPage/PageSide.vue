<script setup>

</script>

<template>
  <div class="bg-cinza-950 h-screen p-3">
    <div class="bg-gradient-to-t from-[#001A85] to-[#000F4E] h-full rounded-xl flex justify-center items-center">
        <div class="flex flex-col items-center ">
            <img class="w-72 elemento" src="@/assets/img/headset.svg" alt="Logo de headset do N1Track">
            <div>
                <h1 class="text-white text-[7.5rem] font-semibold text-center leading-[0.99]">N1Track</h1>
                <p class="text-center text-cinza-200">Sua solução completa para o gerenciamento eficiente <br> e o registro de chamados em 1º nível</p>
            </div>
        </div>
    </div>
 </div>
</template>

<style scoped>
@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
}

.elemento {
  animation: moveUpDown 2s ease-in-out infinite;
}
</style>