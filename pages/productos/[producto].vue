<script setup>
import Heads from '~/components/element/head_visible.vue'
import foot from '~/components/element/foot.vue'
import ProductCard from '~/components/element/product_card.vue'
import { useRoute } from 'vue-router'
import { UseDataStore } from '~/store/dataStore'

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const modules = [Pagination, Navigation, Autoplay]

const route = useRoute()
const producto_id = route.params.producto


const {products} = UseDataStore()




const data = products.find(producto => producto.id === producto_id)


const cot = ()=>{
    
     const enlace = `https://wa.me/3022600280?text=${encodeURIComponent("sssss")}`;

     window.open(enlace, '_blank')
}

</script>

<template>
<heads></heads>


<div class="flex reltive flex-col md:flex-row">

   <div class="fondo2 flex items-end h-56 justify-center p-5 fixed bottom-0 w-full md:hidden">
    
      <button class="bg-black text-white font-bold text-xl p-4 rounded-lg w-full">Cotizar</button>
    
   </div>

   <div class="min-w-[40%] flex flex-col px-10 py-4">

    <div class="bg-black">
        <img :src="data.photo" class="w-full" alt="">
    </div>

    <button class="bg-black p-3 hidden md:flex text-white rounded-lg mt-2">
        Cotizar
    </button> 
   </div>


  <div class="md:max-w-[60%] p-3 overflow-scroll h-[80vh] scrollbar-hide">

  <div class="fondo h-20 hidden md:absolute w-full md:bottom-[0%]  z-10">
    
  </div>

    <h1 class="text-4xl font-bold">
        {{data.name}}
    </h1>
    <p class="mt-6">
     {{ data.description }}
    </p>
    
    

 
  <article class="mb-10">
    
    <h2 class="font-bold text-xl mt-5 mb-2">Caracteristicas</h2>

    <ul class="flex flex-wrap gap-3">
      <li 
      v-for="a in data.points" :key="a"
      class=" rounded-lg bg-blue-50 min-w-[40%] px-5">
        {{ a }}
      </li>
     
    </ul>
  </article>


   <h3 class="font-bold text-xl mt-5 mb-3">Recomendados</h3>
   <Swiper
    :spaceBetween="10"
      :modules="modules"
      :slides-per-view="2"
      navigation
      :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
   
    >
     
     <SwiperSlide v-for="producto in products"
        :key="producto"
     >
        <ProductCard
        :photo="producto.photo"
        :description="producto.description"
        :name="producto.name"
        :producto="producto"
        
        />
      </SwiperSlide>
      

    </Swiper>
      <NuxtLink class="w-full justify-center  mt-3 flex rounded-full bg-black text-white p-3 mb-12" to="/productos">Conoce más</NuxtLink>


</div>



</div>

<foot></foot>

</template>

<style>
.fondo{
  background: linear-gradient(rgba(255, 255, 255, 0),rgb(255, 255, 255));
}
.fondo2{
  background: linear-gradient(rgba(255, 255, 255, 0),rgb(255, 255, 255));
}
</style>
