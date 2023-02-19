/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import "@fontsource/tajawal"
const app = createApp(App)

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, fab)

import easySpinner from 'vue-easy-spinner';

import VueSplash from 'vue-splash';

app.use(router)

app
    .component('fa', FontAwesomeIcon)
    .use(easySpinner, {prefix: 'easy',})
    .use(VueSplash)
    .mount('#app')
