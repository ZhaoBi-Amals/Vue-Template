import App from './App'
import './assets/style/main.css'
import router from './router'
import utils from './utils/utils'
import Cookies from 'Cookies'

Vue.prototype.Cookies = Cookies
Vue.config.productionTip = false
Vue.use(utils)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
