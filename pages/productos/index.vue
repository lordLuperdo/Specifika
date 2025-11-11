<script setup>
import { UseDataStore } from '~/store/dataStore';
import product_card from '~/components/element/product_card.vue';

const data = UseDataStore()
</script>
<template>
    <main>
        <h1>
        Productos
        </h1>
        <p>
            Conoce los equipos de estirilización que tenemos para ti
        </p>
    </main>

    <section>
        <h3 class="">Médicos</h3>
        <div>
            <product_card v-for="producto in data.products.filter(p => p.category.toLowerCase().includes('medico'))" :key="producto"
             :photo="producto.photo"
             :description="producto.description"
             :name="producto.name"
            >
              
            </product_card>
        </div>

        <h3 class="">Dentales</h3>
        <div>
            <product_card v-for="producto in data.products.filter(p => p.category.toLowerCase().includes('dental'))" :key="producto"
             :photo="producto.photo"
             :description="producto.description"
             :name="producto.name"
            >
              
            </product_card>
        </div>
    </section>
</template>