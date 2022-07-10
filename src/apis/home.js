// home 相关接口
import request from '@/utils/request';
// /personalized
export const getRecommendList = (params) =>
  request({
    url: '/personalized',
    params,
  });
export const getNewSong = (params) =>
  request({
    url: '/personalized/newsong',
    params,
  });
