<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '~/components/ui/imgs/logo_especifika.webp'
import { UseDataStore } from '~/store/dataStore'

const visible = ref(false)

const {products} = UseDataStore()

const Active = ref(false)

const search = ref("")

const data = computed(()=>
    products.filter(p => p.name.toLowerCase().includes(search.value.toLowerCase()))
)

const isvisibleactive = () => {
  visible.value = !visible.value
}

onMounted(() => {
  const onScroll = () => {
    const header = document.querySelector('header')
    if (header) {
      header.classList.toggle('abajo', window.scrollY > 0)
    }
  }

  window.addEventListener('scroll', onScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
})
</script>

<template>
    <header class="flex flex-col sm:flex-row  p-5 py-10  sm:p-3 justify-around items-center fixed w-[100%] cambio z-20 ">

        <div class="flex items-center justify-center sm:py-5 gap-3">
                  
                  <NuxtLink to="/" class=""><img :src="logo" alt="especifika" class="w-32"></NuxtLink>
                
                 
                    <div class="sm:hidden flex items-center gap-3">

                            <button  @click="isvisibleactive" class=" w-8 h-8 bg-white flex justify-center items-center rounded-full">
                            <Icon v-if="visible" name="charm:arrow-right"  class=" text-1xl" />
                            <Icon v-if="!visible" name="dashicons:editor-justify"  class=" text-1xl" />
                            </button>  
                     
                    <Transition name="heads"> 
                        <ul v-if="visible" class="text-white  flex sm:hidden gap-4 text-sm">
                            <li class="">
                                <NuxtLink to="">Contacto</NuxtLink>
                            </li>
                            <li class="">
                                <NuxtLink to="/nosotros">Nosotros</NuxtLink>
                            </li>
                        </ul>
                    </Transition>
                  
                </div>
               

                  
        </div>
        <input @focus="Active=true" @blur="Active=false" v-model="search" type="text" placeholder="¿Qué estás Buscando?" name="" id="" class="rounded-full w-[90%] sm:w-[45%] p-2 mt-3 sm:mt-0 sm:py-2 sm:px-3 text-center sm:text-start">

        <nav>
            <ul class="text-white  hidden sm:flex gap-4 text-sm">
                <li class="">
                    <NuxtLink to="">Contacto</NuxtLink>
                </li>
                <li class="">
                    <NuxtLink to="/nosotros">Nosotros</NuxtLink>
                </li>
            </ul>
        </nav>

        <div v-if="Active" class="bg-white gap-3  w-[48%] flex flex-col p-2 items-center absolute top-[80%] left-[25%] rounded-lg">
            <div class="flex gap-3 p-2" v-for="producto in data" :key="producto">
                <div class="">
                    {{ producto.name }}
                    {{ producto.category }}
                </div>
                <div class="">
                    <button @mousedown="navigateTo(`/productos/${producto.id}`)" class="bg-black text-white rounded-full p-2 px-4">Conoce más</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
.heads-enter-from{
    opacity: 0;
    transform: translateX(10px);
}
.heads-enter-to{
    opacity: 1;
    transform: translateX(0px);
}
.heads-enter-active{
    transition: all 0.2s ease;
}

.heads-leave-from{
    opacity: 1;
    transform: translateX(0px);
}
.heads-leave-to{
    opacity: 0;
    transform: translateX(10px);
}
.heads-leave-active{
    transition: all 0.1s ease;
}


.cambio{
    transition: 0.9s ease-out;
}


.abajo{
    background-color: black;
}

</style>