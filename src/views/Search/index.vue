<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 热门搜索 -->
    <template v-if="searchList.length === 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          @click="click(item.first)"
          style="margin-right: 6px"
          color="#ccc"
          text-color="#000"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in hotList"
          :key="index"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" />

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in searchList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        />
      </van-list>
    </template>
  </div>
</template>

<script>
import { getSearchTagsApi, getSearchListApi } from '@/apis/index';
export default {
  name: 'MyMusicDemoIndex',

  data() {
    return {
      hotList: [],
      value: '',
      searchList: [],
      loading: false,
      finished: false,
    };
  },

  created() {
    this.getHotList();
  },

  methods: {
    async getHotList() {
      try {
        const res = await getSearchTagsApi();
        this.hotList = res.data.result.hots;
      } catch (err) {
        console.log(err);
      }
    },

    async click(val) {
      this.value = val;
      try {
        const res = await getSearchListApi({
          keywords: this.value,
        });
        this.searchList = res.data.result.songs;
        this.$toast.success('success');
      } catch (err) {
        this.$toast.fail(err);
      }
    },
    onLoad() {
      // console.log(111);
    },
  },
};
</script>
