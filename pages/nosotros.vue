<script setup>
import heads from '~/components/element/head.vue';
import { UseDataStore } from '~/store/dataStore';
import button_wha from '~/components/element/button_wha.vue';
import team_card from '~/components/element/team_card.vue';

const dataStore = UseDataStore()
</script>

<template>
   <heads></heads>
   <div class="bg-black h-28 w-full "></div>
   <article class="bg-gray-300 p-20 text-center">
    <h2 class=" font-bold text-3xl">¿Quiénes somos?</h2>
    <p class="">ESPECIFIKA SAS se constituyó con el propósito fundamental de garantizar la óptima funcionalidad y seguridad de los equipos médicos, a través de un servicio de mantenimiento integral y personalizado, orientado a cumplir con las expectativas de nuestros clientes y contribuyendo a la mejora continua de la atención médica.</p>
   </article>
   <article class="bg-gray-200 p-20 text-center">
    <h2 class=" font-bold text-3xl">Misión</h2>
    <p class="">ESPECIFIKA SAS se constituyó con el propósito fundamental de garantizar la óptima funcionalidad y seguridad de los equipos médicos, a través de un servicio de mantenimiento integral y personalizado, orientado a cumplir con las expectativas de nuestros clientes y contribuyendo a la mejora continua de la atención médica.</p>
   </article>
   <article class="">
    <h2 class=""></h2>
    <p class=""></p>
   </article>

   {{ dataStore.owners }}

   <div class="flex gap-3 flex-wrap">
     <team_card v-for="team in dataStore.owners" :key="team" :name="team.name">
      {{ team.name }}
     </team_card>
   </div>
</template>