// 对axios封装
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/';

// export default axios;

// 生成axios实例
const request = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default request;
