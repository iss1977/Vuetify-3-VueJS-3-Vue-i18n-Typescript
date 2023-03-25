/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// vue-i18n
import { i18n } from '@/i18n/index'

// Vue Datepicker - https://vue3datepicker.com/installation/
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App)
registerPlugins(app)
app.use(i18n)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')
