import { createApp } from 'vue';
import {router, pinia} from './providers';
import App from './AppSetup.vue';

export const app = createApp(App).use(router).use(pinia);