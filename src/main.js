import Vue from 'vue';
import App from './App.vue';
import '@/assets/mobile/flexible'; // 适配
import '@/assets/styles/reset.css'; // 初始化样式

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
