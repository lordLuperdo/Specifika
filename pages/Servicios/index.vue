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
        Servicios
        </h1>
        <p class="">
            Conoce los servicios que tenemos para ti
        </p>
    </main>

    <section class="p-5  flex-col flex xl:flex-row flex-wrap gap-5">


        <div class=" bg-black rounded-xl py-5 xl:w-[49%] ">
         <h3 class="font-bold text-3xl text-center text-white">Souciones Especifikas</h3>
         <p class="text-white text-center">Nuestros servicios siiii soos ssjkks os sjjs</p>
        <div class="flex  justify-center gap-3 px-5 mt-4 flex-wrap">
            <product_card v-for="producto in data.products.slice(0,2)" :key="producto"
             :photo="producto.photo"
             :description="producto.description"
             :name="producto.name"
            
            >
              
            </product_card>
        </div>
   
        </div>

         <div class=" bg-black rounded-xl py-5 xl:w-[49%]">
         <h3 class="font-bold text-3xl text-center text-white">Souciones Especifikas</h3>
         <p class="text-white text-center">Nuestros servicios siiii soos ssjkks os sjjs</p>
        <div class="flex gap-3 px-5 mt-4 flex-wrap">
            <product_card v-for="producto in data.products.slice(0,2)" :key="producto"
             :photo="producto.photo"
             :description="producto.description"
             :name="producto.name"
            
            >
              
            </product_card>
        </div>
   
        </div>
        
    </section>

    <foot></foot>
</template>