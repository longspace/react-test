import axios from 'axios';
import { message } from 'antd';

message.config({
    top: `3px`,
    duration: 2,
    maxCount: 3,
});

// axios 实例配置
const http = axios.create({
    baseURL: '/api',
    timeout: 35 * 1000,
});

// 添加请求拦截器
http.interceptors.request.use(config => {
    if (config.headers['method'] === 'post') {
        config.headers['Content-Type'] = 'multipart/form-data';
    }
    if (!config.headers['Authorization'] && localStorage.getItem('Authorization')) {
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('Authorization')
    }

    return config
}, error => {
    return Promise.reject(error);
})

// 添加响应拦截器
http.interceptors.response.use(response => {
    if(response.headers && response.headers['admin-token']){
        
    }

    if (response.status === 200) { // http status
        if (typeof response.data === "string") {
            message.error(response.data);
            return Promise.reject(response.data);
        }
        const { code, msg, data } = response.data;
        if (code === 401) {
            message.error(msg);
            window.location.href = "/"
            return Promise.reject(msg);
        } else if (![200, 201, 204].includes(code)) {  // 后台自定义 status
            return data;
        }else{
            message.error(msg);
            return Promise.reject(msg);
        }
    } else {
        message.error(response);
        return Promise.reject(response.data);
    }

}, error => {
    return Promise.reject(error);
});

export default http;

// 200 一切正常
// switch (error.response.status) {
//     case 400:
//         error.message = '错误请求'
//         break;
//     case 401:
//         error.message = '未授权，请重新登录'
//         break;
//     case 403:
//         error.message = '拒绝访问'
//         break;
//     case 404:
//         error.message = '请求错误,未找到该资源'
//         window.location.href = "/NotFound"
//         break;
//     case 405:
//         error.message = '请求方法未允许'
//         break;
//     case 408:
//         error.message = '请求超时'
//         break;
//     case 500:
//         error.message = '服务器端出错'
//         break;
//     case 501:
//         error.message = '网络未实现'
//         break;
//     case 502:
//         error.message = '网络错误'
//         break;
//     case 503:
//         error.message = '服务不可用'
//         break;
//     case 504:
//         error.message = '网络超时'
//         break;
//     case 505:
//         error.message = 'http版本不支持该请求'
//         break;
//     default:
//         error.message = `连接错误${error.response.status}`
// }


