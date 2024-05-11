<!-- eslint-disable @typescript-eslint/no-unused-vars vue/multi-word-component-names -->
<script setup lang="ts">
interface Cell {
  owner: string
  building: {
    type: 'none' | 'attack' | 'store' | 'transportation'
    level: number
  }
}

var cell: Cell = {
  owner: 'me',
  building: {
    type: 'none',
    level: 0
  }
}

defineExpose({ cell })
</script>

<template>
  <span class="cell"></span>
</template>

<style lang="scss">
.cell {
  width: 100px;
  height: 100px;
  border: solid 0.5px #ccc;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: inline-block;
}
</style>
