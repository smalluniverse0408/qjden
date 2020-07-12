import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {Timeline, TimelineItem, Card, Col, Row} from 'element-ui'
import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.scss'

Vue.config.productionTip = false;

Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
