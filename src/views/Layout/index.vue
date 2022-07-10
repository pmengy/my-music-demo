<template>
  <div style="padding-bottom: 48px">
    <van-nav-bar :title="$route.meta.title" />
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
    return {
      title: '',
    };
  },

  mounted() {
    // this.title = this.$route.meta.title;
  },
  watch: {
    // $route(newVal) {
    //   this.title = newVal.meta.title;
    // },
  },

  methods: {},
};
</script>
