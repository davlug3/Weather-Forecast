import './assets/main.css'




import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import authConfig from "../auth_config.json";
import { createAuth0 } from '@auth0/auth0-vue';



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createAuth0({
    domain: authConfig.domain,
    clientId: authConfig.clientId,
    authorizationParams: {
        redirect_uri: window.location.origin
      }
}))

app.mount('#app')


