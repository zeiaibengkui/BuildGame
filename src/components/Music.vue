<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

var pause = ref(true)
var name = ref('--AaBbCcYyZz--')
onMounted(() => {
  $('#musicBar').draggable({ scroll: false })
  const audioEl: HTMLMediaElement = document.querySelector('#audio')
  $('#pause').on('click', () => {
    if (audioEl.paused) audioEl.play()
    else audioEl.pause()
    console.log(audioEl.paused)
  })
})
</script>

<template>
  <div id="musicBar">
    <audio id="audio" src="http://music.163.com/song/media/outer/url?id=836364.mp3"></audio>
    <nav>
      <button class="btn" id="icon" data-bs-target="#musicList" data-bs-toggle="collapse">
        &#xF49F;
      </button>

      <component :is="'marquee'" scrollamount="1" id="musicName" class="content-center">{{
        name
      }}</component>

      <span id="control" class="content-center">
        <button id="last" class="btn content-center">&#xF12C;</button>
        <button id="pause" class="btn content-center" @click="pause = !pause">
          {{ pause ? '&#xF234;' : '&#xF4C4;' }}
        </button>
        <button id="next" class="btn content-center">&#xF135;</button>
      </span>
    </nav>

    <ul class="" id="musicList">
      <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@keyframes musicName {
  to {
    right: 0;
  }
}

#musicBar {
  border-radius: 3px;
  position: absolute;
  z-index: 3;
  left: 10vw;
  top: 10vh;
  width: 100px;
  min-height: 20px;
  height: min-content;
  background-color: #000000;
  backdrop-filter: blur(7px);
  overflow: visible;
  font-family: 'bootstrap-icons', Arial, Helvetica, sans-serif;
  font-size: 50%;
  padding: 2px;

  * {
    border-radius: 3px;
  }

  button {
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
  > nav {
    height: 20px;
    display: flex;
    justify-content: center;

    > * {
      height: 20px;
    }

    > #icon {
      width: 20px;
      border-right: solid 1px rgba(255, 255, 255, 0.5);
      cursor: pointer;
    }

    > #musicName {
      width: 80px;
      //overflow: scroll;
      //scrollbar-width: none;
      //color: transparent;
      //-webkit-background-clip: text;
      //background-image: linear-gradient(to left, transparent, white 10%, white 90%, transparent);
      text-wrap: nowrap;
      /*
      opacity: 1;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0;
      }*/
    }

    > #control {
      position: absolute;
      right: 0;
      top: 0;
      width: 80px;
      transition: all 0.3s;
      background-image: linear-gradient(to left, black, transparent 10%, transparent 90%, black);
      background-color: transparent;
      z-index: 3;

      > button {
        opacity: 0;
      }

      &:hover {
        background-color: black;
        > button {
          opacity: 1;
        }
      }
    }
  }

  > #musicList {
    //position: absolute;
    width: 100%;
    max-height: 50px;
    //height: min-content;
    padding: 0;
    margin: 0;
    //top: 20px;
    //left: 0px;
  }
}
</style>
