<script setup lang="ts">
import Map from './components/Map.vue'
</script>

<template>
  <nav><h1>Build Game</h1></nav>
  <Map></Map>
</template>

<style scoped lang="scss">
nav {
  z-index: 2;
  font-family: fantasy;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: min-content;
  background-color: rgba(120, 120, 120, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
}
</style>
