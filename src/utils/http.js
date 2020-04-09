import axios from "axios";
import { Message } from "element-ui";
// 创建axios实例
const service = axios.create({
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true,
  baseURL: " https://mock.zhaoly.cn/mock/5e5b8173a16073001fc14d28/bilibili",
  timeout: 15000 // 请求超时时间
});
//添加请求拦截器
service.interceptors.request.use(
  config => {
    //config.headers['Accept'] = 'application/json'
    return config;
  },
  error => {
    Message({
      message: "加载超时",
      type: "error",
      center: true
    });
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    Message({
      message: "加载失败",
      type: "error",
      center: true
    });
    return Promise.reject(error);
  }
);

export default service;
