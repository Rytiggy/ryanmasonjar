import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import App from './App.vue'
import router from './router'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v7/fontawesome-v7.css'

const app = createApp(App)
app.use(router)
app.use(Quasar, quasarUserOptions)
app.mount('#q-app')
