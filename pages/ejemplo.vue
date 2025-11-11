<template>
  <div>
    <button @click="show = !show">Toggle</button>

    <transition name="slide-fade">
      <div v-if="show" class="box">
        ¡Hola! Soy animado
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
</script>

<style>
.box {
  width: 200px;
  height: 100px;
  background: lightblue;
  margin-top: 20px;
}

/* Estado inicial al entrar */
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

/* Estado final al entrar */
.slide-fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Tiempo de la transición */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

/* Al salir (opcional) */
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.slide-fade-leave-active {
  transition: all 0.5s ease;
}
</style>