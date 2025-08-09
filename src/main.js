import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const theme = localStorage.getItem('theme') || 'light'
document.documentElement.classList.toggle('dark', theme === 'dark')

const app = createApp(App).use(store)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
