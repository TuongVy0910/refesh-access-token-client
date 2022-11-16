import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import 'bootstrap'
import '@popperjs/core/dist/umd/popper';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')