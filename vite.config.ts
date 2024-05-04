import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import { inject } from 'vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    inject({
      $: 'jquery', // 这里会自动载入 node_modules 中的 jquery   jquery全局变量
      jQuery: 'jquery',
      'windows.jQuery': 'jquery'
    })
  ],
  resolve: {
    //设置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')
    }
  },
  define: {
    'process.env': {}
  },
  server: {
    port: 25566
  }
})
