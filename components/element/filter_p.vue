<script setup>
import product_card from './product_card.vue';


defineProps(["data"])


</script>
<template>
 <h3 class="font-bold text-xl">Médicos</h3>
        <div class="flex gap-3 p-5 flex-wrap">
            <product_card v-for="producto in data.products.filter(p => p.category.toLowerCase().includes('medico'))" :key="producto"
             :photo="producto.photo"
             :description="producto.description"
             :name="producto.name"
            >
              
            </product_card>
        </div>


</template>