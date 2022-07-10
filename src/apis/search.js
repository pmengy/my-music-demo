// search 相关接口
import request from '@/utils/request';
// /personalized
// /cloudsearch
export const getSearchTags = (params) =>
  request({
    url: '/search/hot',
    params,
  });
export const getSearchList = (params) =>
  request({
    url: '/cloudsearch',
    params,
  });
