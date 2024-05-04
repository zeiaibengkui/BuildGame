import '@popperjs/core' // bootstrap定位文件
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import 'jquery'
import 'jquery-ui-dist/jquery-ui'
import 'jquery-ui-dist/jquery-ui.css'
import './assets/style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
/* import router from './router' */

const app = createApp(App)

app.use($)
app.use(createPinia())
/* app.use(router) */

app.mount('#app')
