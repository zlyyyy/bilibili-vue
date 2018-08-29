import axios from 'axios'
import { Message } from 'element-ui';
// 创建axios实例
const service = axios.create({
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true,
    baseURL: 'http://localhost:8080',
    timeout: 15000 // 请求超时时间
})
//添加请求拦截器
service.interceptors.request.use(config => {
    //config.headers['Accept'] = 'application/json'
    return config
}, error => {
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
