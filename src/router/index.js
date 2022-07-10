import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/Layout';
import Home from '@/views/Home';
import Search from '@/views/Search';
Vue.use(VueRouter);
const routes = [
  // 配置路由规则
  {
    path: '/layout',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'search', component: Search },
    ],
  },
  { path: '/', redirect: '/layout/home' },
];
const router = new VueRouter({ routes });
export default router;
