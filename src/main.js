import Vue from 'vue';
import App from './App.vue';
import '@/assets/mobile/flexible'; // 适配
import '@/assets/styles/reset.css'; // 初始化样式
import router from '@/router/index';
import { NavBar, Tabbar, TabbarItem } from 'vant';
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
