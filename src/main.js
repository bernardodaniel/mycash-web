import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import moment from 'moment'
import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$filters = {
    currency(value) {
        var formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
        return formatter.format(value);
    },

    date(value) {
        return moment(value).format('D/MM/yyyy');
    }
  }

const http = axios.create({
    baseURL: 'http://localhost:9090/mycash'
})

http.interceptors.request.use(config  => {
    const token = localStorage.getItem('mycash_token')
    if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config
}
);

app.provide('http', http)

app.use(router).use(store).mount('#app')