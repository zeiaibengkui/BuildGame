<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Cells from '../components/Cells.vue'
import { onMounted, ref } from 'vue'

const ROW = 10 //行
const COL = 20 //列
var Map = [[ref(Cells)]]
for (var i = 0; i < ROW; i++) {
  Map[i] = []
}
Map.forEach((value) => {
  for (var i = 0; i < COL; i++) {
    value[i] = ref(Cells)
  }
})

onMounted(() => {
  $('#map').draggable({ scroll: false })
  // console.log(Map[0][0].value[0].cell)
})
</script>

<template lang="html">
  <div id="map">
    <div v-for="(map, index) in Map" :key="map[0].owner">
      <Cells :ref="maps" v-for="(maps, index2) in map" :key="maps.owner"> </Cells>
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
