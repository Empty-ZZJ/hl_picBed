import { createApp } from 'vue'
import App from './App.vue'
import 'tdesign-vue-next/es/style/index.css';
import router from "./router/index"
const app=createApp(App).use(router).mount('#app');
