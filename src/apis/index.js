import { getRecommendList, getNewSong } from './home';
import { getSearchTags, getSearchList } from './search';
import { getSongById, getLyricById } from './Play.js';

export const getRecommendListApi = getRecommendList;
export const getNewSongApi = getNewSong;
export const getSearchTagsApi = getSearchTags;
export const getSearchListApi = getSearchList;
export const getSongByIdApi = getSongById;
export const getLyricByIdApi = getLyricById;
