import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BaseCard from './components/UI/BaseCard.vue';

createApp(App)
    .use(store)
    .use(router)
    .component('BaseCard', BaseCard)
    .mount('#app')
