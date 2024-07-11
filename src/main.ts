import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from '@/router'
import { GlobalComponents } from '@/globals'

const pinia = createPinia()

createApp(App).use(pinia).use(router).use(GlobalComponents).mount('#app')
