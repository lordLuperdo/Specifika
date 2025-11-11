<script setup>
import { UseDataStore } from '~/store/dataStore'

const {owners} = UseDataStore()

const visible = ref(false)

const isvisibleactive = ()=>{
     
    !visible.value ? visible.value = true : visible.value  = false
    console.log(visible.value)

}

const cot = (number)=>{
    
     const enlace = `https://wa.me/${number}?text=${encodeURIComponent("sssss")}`;

     window.open(enlace, '_blank')
}

</script>

<template>
<div class="flex fixed bottom-5 right-5 gap-2  items-end z-10">

    <Transition name="visible">
        <div class="bg-black p-1 rounded-md flex p-3" v-if="visible">
            <ul class="flex gap-2 flex-col ">
                <li class="bg-white flex rounded-full px-1 py-1 gap-2" v-for="a in owners"
                :key="a">
                     <p class="ml-3">{{ a.name }}</p>
                     <button @click="cot(a.number)" class="bg-black text-white px-3 rounded-full ">Chatear</button>
                </li>
            </ul>
        </div>


    </Transition>

   

    <button @click="isvisibleactive" class=" z-10 bg-black p-1 rounded-full flex w-16 h-16 justify-center items-center">
        <Icon name="formkit:whatsapp"  class="text-white text-3xl lg:"/>
    </button>

</div>
</template>

<style>

.visible-enter-from{
opacity: 0;
transform: translateX(50px);
}

.visible-enter-to{
opacity: 1;
transform: translateX(0px);
}



.visible-leave-from{
opacity: 1;
transform: translateX(0px);
}

.visible-leave-to{
opacity: 0;
transform: translateX(50px);
}


.visible-enter-active,
.visible-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
</style>