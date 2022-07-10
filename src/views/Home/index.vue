<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in recommendList" :key="item.id">
        <van-image width="115" :src="item.picUrl" fit="cover" />
        <p class="music-name van-multi-ellipsis--l2">
          {{ item.name }}
        </p>
      </van-grid-item>
    </van-grid>
    <van-cell title="最佳匹配" class="title" />
    <van-cell
      v-for="item in NewSongList"
      :key="item.id"
      center
      :label="`${
        (item.song &&
          item.song.artists &&
          item.song.artists[0] &&
          item.song.artists[0].name) ||
        'unknown'
      }   ${item.name}`"
      :title="item.name"
    >
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getRecommendListApi } from '@/apis/index';
import { getNewSongApi } from '@/apis/index';
export default {
  data() {
    return {
      recommendList: [],
      NewSongList: [],
    };
  },

  created() {
    this.getPersonalized();
    this.getNewSong();
  },

  methods: {
    async getPersonalized() {
      try {
        const res = await getRecommendListApi({ limit: 6 });
        this.recommendList = res.data.result;
      } catch (err) {
        console.log(err);
      }
    },
    async getNewSong() {
      try {
        const res = await getNewSongApi({ limit: 20 });
        this.NewSongList = res.data.result;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  .title {
    background-color: pink;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }
  .vant-cell_value {
    padding-top: 9px;
    flex: 0 0 30px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
}
</style>
