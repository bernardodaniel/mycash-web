import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import moment from 'moment'

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

app.use(router).use(store).mount('#app')