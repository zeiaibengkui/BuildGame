<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Cells from '../components/Cells.vue'
import { onMounted } from 'vue'

const ROW = 10 //行
const COL = 20 //列
var Map = [[Cells]]
for (var i = 0; i < ROW; i++) {
  Map[i] = []
}
Map.forEach((value) => {
  for (var i = 0; i < COL; i++) {
    value[i] = Cells
  }
})

onMounted(() => {
  $('#map').draggable({ scroll: false })
})
</script>

<template lang="html">
  <div id="map">
    <div v-for="map in Map" :key="map[0].owner">
      <!-- <td v-for="(maps, index) in map" :key="maps.owner">{{ maps.owner }}{{ index }}</td> -->
      <Cells v-for="(maps, index) in map" :key="maps.owner">{{ maps.owner }}{{ index }}</Cells>
    </div>
  </div>
</template>

<style scoped lang="scss">
#map {
  border: solid 0.5px #ccc;
  width: max-content;
  background: white;
  > div {
    height: 100px;
  }
}
</style>
