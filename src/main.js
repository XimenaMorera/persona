import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBank, faBuilding, faPencil, faTag, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faPhone)
library.add(faUser)
library.add(faTrash)
library.add(faPencil)
library.add(faTag)
library.add(faBuilding)
library.add(faBank)
library.add(faPlus)


createApp(App).use(router).mount('#app')
