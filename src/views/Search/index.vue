<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
      @input="input"
    />
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
        <SongItem
          v-for="(item, index) in searchList"
          :key="index"
          :name="item.name"
          :author="item.ar[0].name"
          :id="item.id"
        ></SongItem>
        <!-- <van-cell
          v-for="(item, index) in searchList"
          :key="index"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        /> -->
      </van-list>
    </template>
  </div>
</template>

<script>
import { getSearchTagsApi, getSearchListApi } from '@/apis/index';
import SongItem from '@/components/SongItem';
export default {
  name: 'MyMusicDemoIndex',

  data() {
    return {
      hotList: [],
      value: '',
      searchList: [],
      loading: false,
      finished: false,
      limit: 20,
      page: 1,
      timer: null,
    };
  },
  components: {
    SongItem,
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
      this.page = 1;
      this.finished = false;
      this.value = val;
      this.searchList = await this.getSearchList();
    },
    async onLoad() {
      this.page++;
      const res = await this.getSearchList();
      if (res.length === 0) {
        this.finished = true;
        this.loading = true;
        return;
      }
      this.searchList = [...this.searchList, ...res];
      this.loading = false;
    },
    async input() {
      /* this.page = 1;
      this.finished = false;
      if (!this.value.trim()) {
        this.searchList = [];
        return;
      }
      this.searchList = await this.getSearchList(); */
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(async () => {
        this.page = 1;
        this.finished = false;
        if (!this.value.trim()) {
          this.searchList = [];
          return;
        }
        this.searchList = await this.getSearchList();
      }, 1000);
    },
    async getSearchList() {
      try {
        const res = await getSearchListApi({
          keywords: this.value,
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        });
        console.log(res);
        return res.data.result.songs || [];
        // this.$toast.success('success');
      } catch (err) {
        // this.$toast.fail(err);
        return [];
      }
    },
  },
};
</script>
