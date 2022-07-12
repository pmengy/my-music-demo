<template>
  <van-cell center :label="`${author || 'unknown'}   ${name}`" :title="name">
    <template>
      <van-icon color="#000" name="play-circle-o" size="28" @click="play" />
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'MyMusicDemoSongItem',
  props: {
    author: String,
    name: String,
    id: Number,
  },

  mounted() {},

  methods: {
    play() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id, // 歌曲id, 通过路由跳转传递过去
        },
      });
    },
  },
};
</script>
