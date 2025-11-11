<script setup>

defineProps(["name", "description", "photo"])


const product_detail = (name)=> {
  navigateTo(`/servicio/${name}`)
}
</script>

<template>

 <div class="sm:max-w-[25%] p-2  shadow-xl  border border-gray-100 border-2 rounded-md duration-300 hover:shadow-sm flex flex-col justify-end items-center sm:min-w-[290px]  h-[21rem] bg-contain"
 :style="{ backgroundImage: `url(${photo})` }"
 >
        
         

        
          <div class="    bg-black flexflex-col w-full justify-center items-center p-2 rounded-lg">
            <h3 class="text-center text-xl text-gray-100 font-bold mt-2">
             {{ name }}
            </h3>
            <p class="text-center text-gray-400 text-sm">{{description?.slice(0,30)}} ...</p>
            <button @click="product_detail(name)" class="bg-white  flex p-2 rounded-full justify-center font-semibold  mt-3  w-full">Conocer más</button>
            </div>
          
       
        
      </div>


</template>