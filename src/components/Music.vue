<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
var pause = ref(true)
var name = ref('none')
onMounted(() => {
  $('#musicBar').draggable({ scroll: false })
})
</script>

<template>
  <div id="musicBar">
    <span id="icon">&#xF49F;</span>
    <span id="musicName" class="content-center">{{ name }} </span>
    <span id="control" class="content-center">
      <button id="last" class="btn content-center">&#xF12C;</button>
      <button id="pause" class="btn content-center" @click="pause = !pause">
        {{ pause ? '&#xF4C4;' : '&#xF234;' }}
      </button>
      <button id="next" class="btn content-center">&#xF135;</button>
    </span>
  </div>
</template>

<style scoped lang="scss">
#musicBar {
  position: absolute;
  z-index: 3;
  left: 10vw;
  top: 10vh;
  width: 100px;
  height: 20px;
  background-color: #0000005e;
  backdrop-filter: blur(7px);
  overflow: hidden;
  border-radius: 3px;
  font-family: 'bootstrap-icons', Arial, Helvetica, sans-serif;

  > * {
    height: 100%;
    display: inline-flex;
  }

  > #icon {
    width: 20px;
    border-right: solid 1px rgba(255, 255, 255, 0.5);
  }

  > #musicName {
    width: 80px;
    opacity: 1;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0;
    }
  }

  > #control {
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
    opacity: 0;
    transition: all 0.3s;
    backdrop-filter: blur(8px);
    z-index: 3;

    &:hover {
      opacity: 1;

      & + #musicName {
        opacity: 0;
      }
    }

    > button {
      display: inline-flex;
      width: 33.33%;
      padding: 0;
      color: rgba(255, 255, 255, 0.7);
      --bs-btn-active-border-color: transparent;
      transition: all 0.3s;
      font-weight: bold;

      &:hover {
        text-shadow: rgba(255, 255, 255, 0.5) 0 0 3px;
        color: white;
      }
    }
  }
}
</style>
