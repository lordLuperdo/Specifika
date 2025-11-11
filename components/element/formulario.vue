<script setup>

</script>

<template>
 
<div class="flex flex-col sm:flex-row  w-full bg-gray-700 rounded-lg overflow-hidden">


    <div class="sm:w-[60%]  flex bg-[url(/components/ui/imgs/bgform.png)] bg-cover min-h-full">
        
        <div class="flex flex-col w-full justify-start items-end h-full">

            <div class="bg-gray-700 p-3 px-5 rounded-[50% 0 0 50%] max-w-40 mt-20">
                <img src="/components/ui/imgs/logo_especifika.webp" class="max-w-full" alt="">
            </div>
            
            <h2 class="sm:text-5xl text-fhite font-bold text-end px-4 text-white">
                Comunicate <br>
                con nosotros
            </h2>
        </div>


    </div>


    <div class="py-10 px-5 flex flex-col  gap-2 items-center justify-center  sm:w-[40%]">

        <div class="flex flex-col gap-2 px-1  w-full">
            <input type="text" class="rounded-lg  p-2 w-full" placeholder="Nombre">
            <input type="text" class="rounded-lg  p-2 w-full" placeholder="Correo">
            <input type="text" class="rounded-lg  p-2 w-full" placeholder="¿Qué necesitas">
        </div>

        <div class=" w-full">
            <textarea class="w-full h-28  rounded-lg p-2" name="" id="" placeholder="Cuéntanos más a fondo tu necesidad "></textarea>
        </div>

        <div class="w-full">
            <button class="bg-yellow-400 p-2 w-full rounded-full">Enviar</button>
        </div>

        <p class="text-white ">Responderemos via Email tu requerimiento</p>
    </div>


</div>


</template>