<template>
  <div>
    <van-nav-bar title="首页" />
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'MyMusicDemoIndex',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
