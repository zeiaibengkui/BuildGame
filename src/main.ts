import $ from 'jquery'
import 'jqueryui/jquery-ui'
import 'jqueryui/jquery-ui.css'
import '@popperjs/core' // bootstrap定位文件
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.scss'
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
