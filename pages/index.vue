<script setup>
import heads from '~/components/element/head.vue';
import button_wha from '~/components/element/button_wha.vue';
import Product_card from '~/components/element/product_card.vue';
import formulario from '~/components/element/formulario.vue';
import foot from '~/components/element/foot.vue';
import { UseDataStore } from '~/store/dataStore';

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const modules = [Pagination, Navigation, Autoplay]

const DataStore = UseDataStore()


const filter = ref("")

const Data_filter = computed(()=>
   DataStore.products.filter(p => p.category.toLowerCase().includes(filter.value.toLowerCase()))
)

const cambiar_filtro = (filtro)=> {filter.value = filtro}

</script>

<template>
<heads></heads>



<main class="flex  bg-cover w-full  sm:h-[100vh] flex-col md:flex-row">
   

    <div class="p-7  flex flex-col mt-[40%] gap-3 sm:w-[60%] sm:mt-[12%] z-10">
    <h1 class="text-5xl text-white font-bold">Tecnología que protege vidas</h1>
    <p class="text-white ">En Especifika diseñamos, instalamos y mantenemos centrales de esterilización completas, con autoclaves de última generación y soporte técnico especializado para garantizar seguridad hospitalaria.</p>
    <div class=" flex gap-4 mt-2">
        <button class=" px-5 p-1 bg-white rounded-full" @click="navigateTo('/productos')">productos</button>
        <button class="text-white px-5 p-1 rounded-full border-2 border-white" @click="navigateTo('/servicios')">Servicios y mantenimiento</button>
    </div>
    </div>
    <div class="sm:max-w-[40%] h-90 sm:h-full z-10 ">
       
       
        <Swiper
    :spaceBetween="10"
      :modules="modules"
      :slides-per-view="1"
      :navigation="false"
      
      :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"

    class="Swiper flex h-full"
   
    >
     
     <SwiperSlide v-for="producto in DataStore.products"
        :key="producto" class="swiper  flex justify-center items-center"
     >
        <Product_card
        :photo="producto.photo"
        :description="producto.description"
        :name="producto.name"
        :producto="producto"
        />
      </SwiperSlide>
      

    </Swiper>



    </div>
     <video
    class="absolute top-0 left-0 w-full h-full object-cover  z-0"
    
    src="/components/ui/videos/fondo.mp4"
    autoplay
    muted
    loop
    playsinline
  ></video>
</main>
<button_wha></button_wha>


<!--productos-->
 
<section>
   

    <div class="px-8 sm:px-20  flex justify-between mt-8 mb-4  ">
        <h2 class="text-3xl sm:text-4xl font-bold">Productos</h2>
        <div class="flex gap-3">
            
            <button @click="cambiar_filtro('')"  class=" bg-gray-200 focus:outline-2 hover:bg-gray-400 focus:bg-black focus:text-white  flex items-center justify-center gap-2 p-2  rounded-full shadow-lg">
            <span class="ml-2">Todos</span>
            <div class="flex items-center bg-gray-300 inset-shadow-sm border-2 border-gray-700 rounded-full p-1">      
                <Icon name="tabler:adjustments-filled"  class="text-white bg-black text-xl "/>
            </div>
           </button>

           <button @click="cambiar_filtro('medico')"  class=" bg-gray-200 hover:bg-gray-400 focus:bg-black focus:text-white flex items-center justify-center gap-2 p-2  rounded-full shadow-lg">
            <span class="ml-2">Médicos</span>
            <div class="flex items-center bg-gray-300 inset-shadow-sm border-2 border-gray-700 rounded-full p-1">      
                <Icon name="medical-icon:i-first-aid"  class="text-white bg-black text-xl "/>
            </div>
           </button>

           <button @click="cambiar_filtro('dental')"  class=" bg-gray-200 hover:bg-gray-400 focus:bg-black focus:text-white flex items-center justify-center gap-2 p-2  rounded-full shadow-lg">
            <span class="ml-2">Dentales</span>
            <div class="flex items-center bg-gray-300 inset-shadow-sm border-2 border-gray-700 rounded-full p-1">      
                <Icon name="medical-icon:i-dental"  class="text-white bg-black text-xl "/>
            </div>
           </button>
    </div>
    </div>
<div class="flex flex-wrap px-6 sm:px-1  gap-2 Px-10  justify-center" >
<product_card v-for="card in Data_filter" :key="card"
:description="card.description"
:name="card.name"
:photo="card.photo"
:producto="card"
></product_card>
</div>

</section>

<div class="p-3">
    <div class="bg-black rounded-lg lg:rounded-full p-3 px-4 flex-col sm:flex-row justify-between gap-4 ">
        <p class=" text-white font-bold text-2xl w-full  text-center">¿Buscas algún repuesto?</p>
       <button class="bg-white p-1 px-3 rounded-full lg:w-36 w-full mt-3 lg:mt-0"> Buscar</button>
    </div>
</div>



<!-- INICIO DEL MENÚ-->

<section class=" bg-black flex relative flex-col sm:mt-20 p-10 py-16 mt-16  sm:p-20  sm:px-30 gap-5">
    <div class="absolute p-2 px-20 flex  bg-black border-white border-4 rounded-full sm:left-20 top-[-1%] sm:top-[-2%]">
        <h2 class=" text-4xl text-white font-semibold">Servicios</h2>
    </div>

    <div class="flex flex-col sm:flex-row">
        <div class=" flex flex-col sm:flex-row  grow gap-3 sm:max-w-[60%] ">
            
         <Swiper
    :spaceBetween="100"
      :modules="modules"
      :slides-per-view="2"
      :navigation="false"
      
     
    class="Swiper2  h-full"
   
    >
     
     <SwiperSlide v-for="producto in DataStore.products"
        :key="producto" class="swiper2  "
     >
        <Product_card
        :photo="producto.photo"
        :description="producto.description"
        :name="producto.name"
        
        />
      </SwiperSlide>
      

    </Swiper>

               
               
            
        </div>
        
        <div class="flex sm:w-[40%] flex-col p-3 sm:p-5 gap-2">
            <h3 class="text-white text-3xl font-bold">Servicios Generales</h3>
            <p class="text-white">En Especifika diseñamos, instalamos y mantenemos centrales de esterilización completas, con autoclaves de última generación y soporte técnico especializado para garantizar seguridad hospitalaria.</p>
            <button class=" px-5 p-1 bg-white  sm:mt-4 sm:w-[40%] rounded-full">Saber más</button>
        </div>
    </div>


    <div class="flex flex-col sm:flex-row">
        <div class=" flex flex-col sm:flex-row  grow gap-3 sm:max-w-[60%] overflow-scroll scrollbar-hide">
            
                   
         <Swiper
      :spaceBetween="100"
      :modules="modules"
      :slides-per-view="2"
      :navigation="false"
      
     
    class="Swiper2  h-full"
   
    >
     
     <SwiperSlide v-for="producto in DataStore.products"
        :key="producto" class="swiper2  "
     >
        <Product_card
        :photo="producto.photo"
        :description="producto.description"
        :name="producto.name"
        
        />
      </SwiperSlide>
      

    </Swiper>
          
            
        </div>
        <div class="flex sm:w-[40%] flex-col p-3 sm:p-5 gap-2">
            <h3 class="text-white text-3xl font-bold">Soluciones Especificas</h3>
            <p class="text-white">En Especifika diseñamos, instalamos y mantenemos centrales de esterilización completas, con autoclaves de última generación y soporte técnico especializado para garantizar seguridad hospitalaria.</p>
            <button class=" px-5 p-1 bg-white  sm:mt-4 sm:w-[40%] rounded-full">Saber más</button>
        </div>
    </div>
</section>

<div class="sm:p-20">
 <formulario></formulario>   
</div>

<foot></foot>


</template>

<style>
.swiper{
    display: flex;
}
.swiper2{
   
    padding: 2rem;
    
}
</style>