import Vue from 'vue';
import App from './App.vue';
import '@/assets/mobile/flexible'; // 适配
import '@/assets/styles/reset.css'; // 初始化样式
import router from '@/router/index';

import {
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Image as VanImage,
  Icon,
  Search,
  Tag,
  List,
  Toast,
} from 'vant';

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tag);
Vue.use(List);
Vue.use(Toast);
Vue.config.productionTip = false;

// import { getRecommendListApi } from '@/apis/index';
// async function getRecommendList() {
//   try {
//     const res = await getRecommendListApi();
//     console.log(res);
//   } catch (e) {
//     console.log('getRecommendList error');
//   }
// }
// getRecommendList();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
