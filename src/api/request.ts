import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { message } from 'antd';
import NProgress from 'nprogress';
import URISimple from '@/utils/uri-simple';

const location = window.location;

const domain = URISimple(location.href).domain();

let requestBaseURL;
// 有配置就用配置的域名，没配置就在当前域名前加api
if (domain && domain !== 'localhost') {
  requestBaseURL = `//api.${domain}/`; // 线上和webtest
} else {
  requestBaseURL = `${location.origin}/api`; // 本地开发
}

const axiosConfig: AxiosRequestConfig = {
  baseURL: requestBaseURL,
  timeout: 30000,
  withCredentials: true,
  responseType: 'json',
};
const request = axios.create(axiosConfig);

axios.defaults.timeout = 10000;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://baidu.com' : '';

let startFlag = false; // loadingStart的标志

// 请求拦截
request.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.data && config.data.showLoading) {
    // 需要显示loading的请求
    startFlag = true;
    NProgress.start();
  }
  return config;
}, (err: AxiosError) => {
  if (startFlag) {
    startFlag = false;
    NProgress.done();
  }
  return Promise.reject(err);
});
// 响应拦截
request.interceptors.response.use((res: AxiosResponse) => {
  if (startFlag) {
    startFlag = false;
    NProgress.done();
  }
  return res.data;
}, (err: AxiosError) => {
  // 服务器出错
  if (err.response && String(err.response.status).startsWith('5')) {
    // 请求出错
    message.error('网络开小差啦，请稍后再试~');
  }
  if (startFlag) {
    startFlag = false;
    NProgress.done();
  }
  return Promise.reject(err);
});

export default request;
