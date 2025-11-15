<script setup>
import { UseDataStore } from '~/store/dataStore';
import product_card from '~/components/element/product_card.vue';
import head_visible from '~/components/element/head_visible.vue';
import foot from '~/components/element/foot.vue';

const data = UseDataStore()
</script>
<template>
    <head_visible></head_visible>
    <main class="bg-red-300 flex flex-col  justify-center items-center w-full h-[30vh]">
        <h1 class="text-4xl font-bold">
        Productos
        </h1>
        <p class="">
            Conoce los equipos de estirilización que tenemos para ti
        </p>
    </main>

    <section class="p-5 flex flex-col">
        <h3 class="font-bold text-xl">Médicos</h3>
        <div class="flex gap-3 p-5 flex-wrap">
            <product_card v-for="producto in data.products.filter(p => p.category.toLowerCase().includes('medico'))" :key="producto"
             :photo="producto.photo"
             :description="producto.description"
             :name="producto.name"
            >
              
            </product_card>
        </div>

        <h3 class="font-bold text-xl">Dentales</h3>
        <div class="flex gap-3 p-5 flex-wrap">
            <product_card v-for="producto in data.products.filter(p => p.category.toLowerCase().includes('dental'))" :key="producto"
             :photo="producto.photo"
             :description="producto.description"
             :name="producto.name"
            >
              
            </product_card>
        </div>
    </section>

    <foot></foot>
</template>